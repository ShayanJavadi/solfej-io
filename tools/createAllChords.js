const { 
    ChordDictionary: { chordType, entries },
    Note: { enharmonic, transposeFrom, simplify },
} = require("@tonaljs/modules")
const { uniqBy, isEqual, isEmpty } = require("lodash");
const slugify = require("slugify");
const chordsWithFingerings = require("../chordsWithFingers3.json")
const scales = require("../scales.json")
const fs = require('fs');
const uuidv5 = require('uuid/v5');
const uuidv4 = require('uuid/v4');
const chordTypes = require("../chordTypes.json")
const invertNotes = (notes, inversion) => [...notes, ...notes].slice(inversion, inversion + notes.length);
const musicalSymbolExtensions = {
    "°": " diminish ",
    "Δ": " delta ",
    "#": " sharp ",
    "ø": " half-dim ",
    "/": " slash ",
    "+": " augmented five ",
}
slugify.extend(musicalSymbolExtensions)

const NOTES = ["Cb", "C", "C#", "Db", "D", "D#", "Eb", "E", "F", "F#", "Gb", "G", "G#", "Ab", "A", "A#", "Bb", "B"];
const CHORDS_NAMESPACE = '1b671a64-40d5-491e-99b0-da01ff1f3341';

const flatten = arr => arr.reduce((a, v) => {
    v instanceof Array ? a.push(...flatten(v)) : a.push(v);
    return a;
}, [])

const createChord = (intervals, note) => intervals.map(transposeFrom(note))
    .map(note => note === "Cb" ? "Cb" :simplify(note))
// // add aliases to chord name if missing
// const chordTypes = entries().map(chord => {
//     if (chord.name === "") {
//         chord.name = chord.aliases[0]
//     }

//     return chord;
// })

// make chord objects for each alias
chordTypes.map(chordType => {
    if (chordType.aliases) {
        chordType.aliases.map(aliasName => {
            if (aliasName === "for") {
                return;
            }

            const aliases = [
                ...chordType.aliases.filter(alias => alias !== aliasName),
            ]

            chordTypes.push({
                ...chordType,
                ...{
                    name: aliasName,
                    aliases,
                    isAlias: true
                }
            })
        })
    }
})

// Create chord objects
const chords = NOTES.map(note => {
    return chordTypes.map(({ empty, chroma, normalized, ...chord}) => {
        return {
            ...chord,
            notes: createChord(chord.intervals, note),
            displayName: `${note}${chord.name}`,
            aliases: chord.aliases.map(alias => note + alias),
            rootNote: note,
            id: uuidv4(),
            parentScales: {},
            inversions: []
        }
    })
})

// map chord objects to chord fingerings
const mappedChordsToFingerings = uniqBy(flatten(chords), x => x.displayName)
    .map(chord => {
        const enharmonicNotes = chord.notes.map(note => enharmonic(note));

        const fingering = uniqBy(chordsWithFingerings.filter(fingering => 
            fingering.tones === chord.notes.join(",") ||
            fingering.tones === enharmonicNotes.join(",")
        ), fingering => fingering.voicingID)
        fingering.length > 1 && console.count()
        return {
            ...chord,
            ...{ fingering }
        }
    })

mappedChordsToFingerings.forEach(chord => {
    const { name = "", rootNote = "" } = chord;
    const matchFirstWord = /(\w+)/;
    const firstWord = chord.name.match(matchFirstWord);
    const shouldPadRootNoteName = firstWord &&
        firstWord.length > 1 &&
        firstWord[1].replace(/[0-9]/g, '').length > 3 || false;

    if (name === "fifth") {
        return `${rootNote} power`
    }

    chord.displayName = shouldPadRootNoteName ?
        `${rootNote} ${name}` :
        `${rootNote}${name}`
})


const getChordUrl = string => "/chords/" + slugify(string.replace("-Δ", "minor")).toLowerCase()

const chordDataWithSlugs = mappedChordsToFingerings.map(chord => {
    return {
        ...chord,
        ...{ 
            aliases: chord.aliases.map(alias => ({
                 name: alias,
                 url: getChordUrl(alias)
            })),
            path: getChordUrl(chord.displayName)
        } 
    }
})

// add a namespaced uuid to the path if it's not unique
// this comes up incases like CM vs Cm
chordDataWithSlugs.forEach(chord => {
    chordDataWithSlugs.forEach(chord2 => {
        if  (chord.path.toLowerCase() === chord2.path.toLowerCase() && chord.displayName !== chord2.displayName) {
            const urlId = uuidv5(chord.path, uuidv5.URL)
            const previousPath = chord.path
            const newPath = `${chord.path}-${urlId}`;
            chord.path = newPath

            chordDataWithSlugs.forEach(chord3 => {
                chord3.aliases.forEach(alias => {
                    if (alias.url === previousPath) {
                        alias.url = newPath
                    }
                })
            })
        }
    })
})

// map all aliases together
// if a chord mentions a chord as their alias 
// that chord should also mention the chord as their alias 
chordDataWithSlugs.forEach(chord => {
    chordDataWithSlugs.forEach(chord2 => {
        const aliasNames = chord2.aliases.map(alias => alias.name);

        if (aliasNames.includes(chord.displayName)) {
            chord.aliases.push({ name: chord2.displayName, url: chord2.path })
        }
    })
})

// get rid of duplicate mapped aliases
// get rid of the chord being its own alias
chordDataWithSlugs.forEach(chord => {
    chord.aliases = uniqBy(chord.aliases, alias => alias.name)
        .filter(alias => alias.name !== chord.displayName)
        .filter(alias => chordDataWithSlugs.some(chord => chord.path === alias.url))
})

const allowedScales = [
    "major pentatonic",
    "minor pentatonic",
    "minor blues",
    "major blues",
    "whole tone",
    "harmonic minor",
    "lydian",
    "melodic minor",
    "locrian",
    "phrygian",
    "harmonic major",
    "double harmonic major",
    "dorian",
    "hungarian minor",
    "hungarian major",
    "mixolydian",
    "major",
    "bebop",
    "diminished",
]

// map scales to chords
chordDataWithSlugs.forEach(chord => {
    scales.forEach(scale => {
        const chordNotesInScale = chord.notes.every(note => scale.notes.includes(note))
        if (chordNotesInScale && !scale.isAlias && allowedScales.includes(scale.name)) {
            const rootNote = scale.rootNote.replace("#", "sharp")
            if (!chord.parentScales[rootNote]) {
                chord.parentScales[rootNote] = []
            }

            if (!chord.parentScales[rootNote].some(addedScale => addedScale.path === scale.path)) {
                chord.parentScales[rootNote].push({ name: scale.displayName, path: scale.path, rootNote: scale.rootNote })
            }   
        }
    })
})

// add inversions to chords
chordDataWithSlugs.forEach(chord => {
    Array(chord.notes.length - 1).fill(0).forEach((_, index) => {
        const invertedNotes = invertNotes(chord.notes, index + 1);

        chordDataWithSlugs.forEach(chordData => {
            if (
                isEqual(chordData.notes, invertedNotes) && 
                !chordData.isAlias &&
                !chord.inversions.find(inversionChord => inversionChord.inversion === index) &&
            ) {
                chord.inversions.push({
                    name: chordData.displayName,
                    path: chordData.path,
                    rootNote: chordData.rootNote,
                    notes: chordData.notes,
                    inversion: index,
                })
            }
        })
    })
})

// write to file 
const data = JSON.stringify(chordDataWithSlugs, null, 4)
const minifiedData = JSON.stringify(chordDataWithSlugs.map(({ displayName, path }) => ({ a: displayName, b: path })))
fs.writeFileSync("chords.json", data)
fs.writeFileSync("chordsMinified.json", minifiedData)

const {
    ScaleDictionary: { scaleType, entries },
    Note: { enharmonic, transposeFrom, simplify },
    Chord: { chord }
} = require("@tonaljs/modules")
const { uniqBy, isEqual, isEmpty } = require("lodash");
const slugify = require("slugify");
const fs = require('fs');
const uuidv5 = require('uuid/v5');
const uuidv4 = require('uuid/v4');
const chords = require("../chords.json")

const NOTES = ["Cb", "C", "C#", "Db", "D", "D#", "Eb", "E", "F", "F#", "Gb", "G", "G#", "Ab", "A", "A#", "Bb", "B"];
const CHORDS_NAMESPACE = '1b671a64-40d5-491e-99b0-da01ff1f3341';
const musicalSymbolExtensions = {
    "°": " diminish ",
    "Δ": " delta ",
    "#": " sharp ",
    "ø": " half-dim ",
    "/": " slash ",
    "+": " augmented five ",
}
slugify.extend(musicalSymbolExtensions)

const scaleTypes = entries()
    .filter(s => !isEmpty(s.name))


// create scale objects for alias scales
scaleTypes.map(scaleType => {
    if (scaleType.aliases) {
        scaleType.aliases.map(aliasName => {
            if (aliasName === "for") {
                return;
            }

            const aliases = [
                ...scaleType.aliases.filter(alias => alias !== aliasName),
            ]

            scaleTypes.push({
                ...scaleType,
                ...{
                    name: aliasName,
                    aliases,
                    isAlias: true
                }
            })
        })
    }
})

scaleTypes.forEach(scale => {
    scaleTypes.forEach(scale2 => {

        if (scale2.aliases.includes(scale.name)) {
            scale.aliases.push(scale2.name)
        }
    })
})

const createScale = (intervals, note) => intervals.map(transposeFrom(note))
    .map(note => note === "Cb" ? "Cb" : simplify(note))

const getScaleUrl = string => "/scales/" + slugify(string).toLowerCase()


const flatten = arr => arr.reduce((a, v) => {
    v instanceof Array ? a.push(...flatten(v)) : a.push(v);
    return a;
}, [])


const allScales = uniqBy(flatten(NOTES.map(note => {
    return scaleTypes.map(scale => {
        return {
            ...scale,
            notes: createScale(scale.intervals, note),
            displayName: `${note} ${scale.name}`,
            aliases: scale.aliases.map(alias => ({ name: note + " " + alias, url: getScaleUrl(note + " " + alias)})),
            rootNote: note,
            id: uuidv4(),
            path: getScaleUrl(`${note} ${scale.name}`),
            chords: []
        }
    })
})), scale => scale.path)


// map scale notes to chord names for each degree of the scale
allScales.forEach(scale => {
    scale.notes.forEach((note, index) => {
        const chordNotes = [
            note, 
            scale.notes[(index + 2) % scale.notes.length],
            scale.notes[(index + 4) % scale.notes.length]
        ]
        let foundChord = false;

        chords.forEach(chord => {
            if (!foundChord) {
                if (isEqual(chord.notes, chordNotes) && !chord.isAlias) {
                    scale.chords.push({
                        name: chord.displayName,
                        path: chord.path,
                        rootNote: chord.rootNote
                    })
                    foundChord = true
                } else {

                    chord.inversions.forEach(invertedChord => {
                        if (isEqual(invertedChord.notes, chordNotes)) {
                            scale.chords.push({
                                name: invertedChord.name,
                                path: invertedChord.path,
                                rootNote: invertedChord.rootNote,
                                inversion: invertedChord.inversion
                            })
                            foundChord = true
                        }
                    })
                }
            }
        })
    })
})

const data = JSON.stringify(allScales, null, 4)

fs.writeFileSync("scales.json", data)

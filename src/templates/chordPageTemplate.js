import React, { useEffect, useState } from "react"
import classNames from "classnames";
import { Link } from "gatsby";
import { ChordBox } from 'vexchords';
import { isEmpty } from "lodash";
import { graphql } from "gatsby"
import Fuse from "fuse.js";
import { Note as tonalNote } from "@tonaljs/modules";
import searchIcon from "./search.svg";
import "./chordPageTemplate.scss";
import Layout from "../components/layout";
import PianoRollContainer from "../components/PianoRollContainer/PianoRollContainer";
import { TWELVE_TONE_NOTES, MAPPED_INTERVALS_TO_DISPLAY_NAMES } from "../common/consts/twelveToneConsts";
import chords from "../../chordsMinified.json"
import FacebookIcon from "../images/facebook.svg"
import TwitterIcon from "../images/twitter.svg";
import SearchBar from "../components/SearchBar/SearchBar";

const flatten = arr => arr.reduce((a, v) => {
    v instanceof Array ? a.push(...flatten(v)) : a.push(v);
    return a;
}, [])


const renderHeader = ({ chord }) => {
    const chordName = getChordDisplayName(chord)

    return (
        <div className="header-container">
            <div className="chord-aliases-container">
                {
                    !isEmpty(chord.aliases) &&
                    <p>
                        Aliases: {
                            chord.aliases.map(alias => {
                                return (
                                    <Link to={alias.url}>{alias.name}</Link>
                                )
                            })
                        }
                    </p>
                }

            </div>
            <h1>{chordName} Chord</h1>
            <h3>Below you can find chord diagrams, piano fingerings, guitar fingering, notes, intervals</h3>
        </div>
    )
}

const renderChordInformation = ({ chord }) => {
    const chordName = getChordDisplayName(chord)
    const intervalNames = chord.intervals.map(interval => MAPPED_INTERVALS_TO_DISPLAY_NAMES[interval])

    return (
        <div className="chord-information-container">
            <div className="chord-notes-container container">
                <h2>Notes</h2>
                <h3>What notes are in a {chordName} chord?</h3>
                <p>{chord.notes.join(" - ")}</p>
            </div>
            <div className="chord-intervals-container container">
                <h2>Intervals</h2>
                <h3>What intervals are in a {chordName} chord?</h3>
                {intervalNames.map(interval => <p>{interval}</p>)}
            </div>
        </div>
    )
}


const isBlackKey = note => ["C#", "Db", "D#", "Eb", "F#", "Gb", "G#", "Ab", "A#", "Bb"].includes(note);

const chordDiagramsContainer = ({ chord }) => {
    const chordName = getChordDisplayName(chord)
    const allNotes = [...TWELVE_TONE_NOTES];

    chord.notes.forEach(note => {
        if (!allNotes.includes(note)) {
            allNotes[allNotes.indexOf(tonalNote.enharmonic(note))] = note
        }
    })
    const tempNotes = [...allNotes, ...allNotes, ...allNotes]
    // make the root the first note    
    const rootIndex = tempNotes.indexOf(chord.rootNote);
    const notesFromRoot = tempNotes.slice(
        rootIndex,
        rootIndex + 12,
    )
    const padLeft = isBlackKey(notesFromRoot[0]) ? [tempNotes[rootIndex - 1] + " "] : [];
    const padRight = isBlackKey(notesFromRoot[11]) ? [tempNotes[rootIndex + 13] + " "] : [];
    const pianoNotes = [
        ...padLeft,
        ...notesFromRoot,
        ...padRight
    ]
    
    return (
        <div className="chord-diagrams-container">
            <div className="piano-diagram-container container">
                <h2>Piano Fingering</h2>
                <h3>How do you play a {chordName} chord on the piano?</h3>
                <PianoRollContainer
                    notes={pianoNotes}
                    isPresentational
                    whiteList={chord.notes}
                    highlightedNotes={chord.notes}
                />
            </div>
            {
                !isEmpty(chord.fingering) &&
                <div className="guitar-diagram-container">
                    <h2>Guitar Fingering</h2>
                    <h3>How do you play a {chordName} chord on the guitar?</h3>
                    <div id="guitar-diagram" />
                </div>
            }
        </div>
    )
}

const drawChordDiagram = (chord) => {
    if (!isEmpty(chord.fingering)) {

        const chordFingerPlacements = chord.fingering[0].fingering
            .split(" ")
            .slice(0)
            .reverse();
        const chordFingering = chord.fingering[0].strings
            .split(" ")
            .slice(0)
            .reverse()
            .map((string, index) => ([
                index + 1,
                string === "X" ? 'x' : parseInt(string),
                chordFingerPlacements[index] === "X" ? "" : chordFingerPlacements[index]
            ]))
        const foundBarreFingerings = [];

        const barres = flatten(chordFingerPlacements.slice(0)
            .reverse()
            .map((fingering, fromIndex) => {

                if (fingering !== "X") {
                    return chordFingerPlacements.map((fingeringToBarreTo, toIndex) => {
                        if (
                            fingering === fingeringToBarreTo &&
                            !foundBarreFingerings.includes(fingering) &&
                            fromIndex !== chordFingerPlacements.length - toIndex - 1
                        ) {
                            foundBarreFingerings.push(fingering);
                            const fromString = chordFingerPlacements.length - fromIndex;
                            const toString = toIndex + 1;
                            const fret = chordFingering[fromString - 1][1]

                            return { toString, fromString, fret }
                        }
                    })
                }

            }))
            .filter(Boolean)

        const maximumFretNumberUsed = Math.max(
            ...chordFingering.map(fingering => fingering[1])
                .filter(Number.isInteger)
        )

        const chordDiagram = new ChordBox('#guitar-diagram', {
            width: 100 * 3, // canvas width
            height: 120 * 3, // canvas height
            fontFamily: "Roboto",
            labelColor: "#333",
            labelWeight: "bold",
            strokeColor: "#FFB902",
            fontSize: 25,
            numFrets: maximumFretNumberUsed > 5 ? 12 : 5
        })

        chordDiagram.draw({
            chord: chordFingering,
            tuning: ['E', 'A', 'D', 'G', 'B', 'E'],
            barres,
        });
    }
}

const getChordDisplayName = chord => chord.displayName.replace("chord", "")

export default function Template({ data }) {
    const { chord } = data.allSitePage.edges[0].node.context;
    const { displayName } = chord;
    useEffect(() => {
        !isEmpty(chord) && drawChordDiagram(chord)
    }, [])

    return (
        <Layout 
            title={displayName} 
            description={`How to play ${displayName} chord on piano and guitar? What notes and intervals are in ${displayName}? Find out how and search through 1000s of chords.`}
            image="/images/chords.png"
        >
            <div className="chord-page-template md-styles">
                <SearchBar searchData={chords} searchResultPostFix={"chord"} />
                {renderHeader({ chord })}
                {chordDiagramsContainer({ chord })}
                {renderChordInformation({ chord })}
            </div>
        </Layout>
    )
}
export const pageQuery = graphql`
  query($path: String!) {
    allSitePage(filter: { path: { eq: $path } }) {
      edges {
        node {
            context {
                chord {
                    displayName,
                    quality,
                    intervals,
                    name,
                    rootNote,
                    aliases {
                        name,
                        url
                    },
                    notes,
                    fingering {
                      strings,
                      fingering,

                    },
                    path
                }
            }
        }
      }
    }
  }
`
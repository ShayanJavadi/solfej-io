import { Note as tonalNote } from "@tonaljs/modules";
import { isEmpty } from "lodash";
import React, { useEffect } from "react";
import { ChordBox } from 'vexchords';
import { TWELVE_TONE_NOTES } from "../../../common/consts/twelveToneConsts";
import getChordDisplayName from "../../../common/utils/chords/getChordDisplayName";
import isBlackKey from "../../../common/utils/isBlackKey";
import PianoRollContainer from "../../../components/PianoRollContainer/PianoRollContainer";
import "./ChordGuitarDiagram.scss";
import flattenArray from "../../../common/utils/flattenArray";
import pianoContainerNotesAdapter from "../../../common/utils/pianoContainerNotesAdapter";
import MdSubHeader from "../../../components/MdSubHeader/MdSubHeader";
import FretBoard from "../../../components/FretBoard/FretBoard";
import { red } from "../../../common/consts/colors";

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

        const barres = flattenArray(chordFingerPlacements.slice(0)
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

export default function ChordGuitarDiagram({ chord }) {
    const { notes, rootNote, displayName } = chord;
    const chordName = getChordDisplayName(chord);
    const pianoNotes = pianoContainerNotesAdapter(notes, rootNote);
    const noteOptions = {
        [rootNote]: {
            style: {
                backgroundColor: red
            },
        }
    }

    useEffect(() => {
        !isEmpty(chord) && drawChordDiagram(chord)
    }, [])

    return (
        <div className="chord-diagrams-container">
            <div className="piano-diagram-container container">
                <MdSubHeader
                    subText={`How do you play a ${chordName} chord on the piano?`}
                >
                    Piano Fingering
                </MdSubHeader>
                <PianoRollContainer
                    notes={pianoNotes}
                    isPresentational
                    whiteList={chord.notes}
                    highlightedNotes={chord.notes}
                />
            </div>
            <div className="guitar-diagram-container">
                <MdSubHeader
                    subText={`How do you play a ${chordName} chord on the guitar?`}
                >
                    Guitar Fingering
                </MdSubHeader>
                {
                    !isEmpty(chord.fingering) && <div id="guitar-diagram" />
                }
                <h3>Other fingerings/arpeggio</h3>

                <div class="guitar-fretboard-diagram-container">

                    <FretBoard
                        notes={notes}
                        whiteList={notes}
                        noteOptions={noteOptions}
                        tuning={["E", "A", "D", "G", "B", "E"]}
                    />
                </div>
                
                <div className="fretboard-hint-container flex-centered">
                    <sub>Tip: swipe to see more</sub>
                </div>
            </div>
        </div>
    )
}

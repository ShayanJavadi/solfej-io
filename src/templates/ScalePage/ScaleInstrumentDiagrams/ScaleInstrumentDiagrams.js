
import loadable from '@loadable/component';
import React, { useState } from 'react';
import { Note } from "@tonaljs/modules"
import { red } from '../../../common/consts/colors';
import pianoContainerNotesAdapter from '../../../common/utils/pianoContainerNotesAdapter';
import FretBoard from '../../../components/FretBoard/FretBoard';
import MdSubHeader from '../../../components/MdSubHeader/MdSubHeader';
import PianoRollContainer from '../../../components/PianoRollContainer/PianoRollContainer';
import PlayerBlock from '../../../components/PlayerBlock/PlayerBlock';
import "./ScaleInstrumentDiagrams.scss";
import isServer from '../../../common/utils/isServer';


const TonePolySynthProvider = loadable(() => import('../../../components/TonePolySynthProvider'))

export default function ScaleInstrumentDiagrams(props) {
    const [showTone, setShowTone] = useState(!isServer() && !!window.TONE_AUDIO_CONTEXT);
    const [shouldAutoPlaySound, setShouldAutoPlaySound] = useState(false)
    const { scale } = props;
    const { displayName, notes, rootNote, intervals } = scale;
    const pianoNotes = pianoContainerNotesAdapter(notes, rootNote);
    const noteOptions = {
        [rootNote]: {
            style: {
                backgroundColor: red
            },
        }
    }

    const intervalsViewNoteOptions = scale.notes.reduce((options, note, index) => {
        return { 
            ...options,
            ...{ [note]: { text: intervals[index], style: {} } }
        }
    }, {});

    intervalsViewNoteOptions[rootNote].style.backgroundColor = red;

    return (
        <div className="scale-instrument-diagrams">
            <div className="chord-notes-container container" style={{ marginBottom: "2.5rem" }}>
                <MdSubHeader
                    subText={`What does a ${displayName} scale sound like?`}
                >
                    Audible Example
                    </MdSubHeader>
                {
                    !showTone ?
                        <PlayerBlock
                            onClick={() => {
                                setShowTone(true);
                                setShouldAutoPlaySound(true)
                            }}
                            text={displayName + " scale"}
                        /> :
                        <TonePolySynthProvider>
                            <PlayerBlock
                                text={displayName + " scale"}
                                notesToPlay={intervals.map(Note.transposeFrom(rootNote + "3"))}
                                shouldAutoPlaySound={shouldAutoPlaySound}
                                playNotesSequentially
                            />
                        </TonePolySynthProvider>
                }
            </div>
            <MdSubHeader
                subText={`How do you play the ${displayName} scale on the piano?`}
            >
                Piano Fingering
            </MdSubHeader>
            <div className="piano-diagram-container">
                <h3 className="sub-sub-header">Notes:</h3>

                <PianoRollContainer
                    notes={pianoNotes}
                    isPresentational
                    whiteList={notes}
                    highlightedNotes={notes}
                    noteOptions={noteOptions}
                />

                <h3 className="sub-sub-header">Intervals:</h3>

                <PianoRollContainer
                    notes={pianoNotes}
                    isPresentational
                    whiteList={notes}
                    highlightedNotes={notes}
                    noteOptions={intervalsViewNoteOptions}
                />
            </div>
            <MdSubHeader
                subText={`How do you play the ${displayName} scale on the guitar?`}
            >
                Guitar Fingering
            </MdSubHeader>
            <h3 className="sub-sub-header">Notes:</h3>
            <div className="guitar-fretboard-diagram-container">
                <FretBoard 
                    notes={notes}
                    whiteList={notes}
                    noteOptions={noteOptions}
                    tuning={["E", "A", "D", "G", "B", "E"]}
                />
            </div>
            <h3 className="sub-sub-header">Intervals:</h3>
            <div className="guitar-fretboard-diagram-container">
                <FretBoard
                    notes={notes}
                    whiteList={notes}
                    noteOptions={intervalsViewNoteOptions}
                    tuning={["E", "A", "D", "G", "B", "E"]}
                />
            </div>
           
            <div className="fretboard-hint-container flex-centered">
                <sub>Tip: swipe to see more</sub>
            </div>

        </div>
    )
}

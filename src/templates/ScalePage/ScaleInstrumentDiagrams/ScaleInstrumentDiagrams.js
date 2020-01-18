
import React from 'react';
import "./ScaleInstrumentDiagrams.scss";
import PianoRollContainer from '../../../components/PianoRollContainer/PianoRollContainer';
import MdSubHeader from '../../../components/MdSubHeader/MdSubHeader';
import pianoContainerNotesAdapter from '../../../common/utils/pianoContainerNotesAdapter';
import FretBoard from '../../../components/FretBoard/FretBoard';
import { red, secondaryLight, primary } from '../../../common/consts/colors';

export default function ScaleInstrumentDiagrams(props) {
    const { scale } = props;
    const { displayName, notes, rootNote } = scale;
    const pianoNotes = pianoContainerNotesAdapter(notes, rootNote);
    const noteOptions = {
        [rootNote]: {
            style: {
                backgroundColor: red
            },
        }
    }

    return (
        <div className="scale-instrument-diagrams">
            <MdSubHeader
                subText={`How do you play the ${displayName} scale on the piano? (Yellow keys are IN the scale)`}
            >
                Piano Fingering
            </MdSubHeader>
            <div class="piano-diagram-container">
                <PianoRollContainer
                    notes={pianoNotes}
                    isPresentational
                    whiteList={notes}
                    highlightedNotes={notes}
                />
            </div>
            <MdSubHeader
                subText={`How do you play the ${displayName} scale on the guitar?`}
            >
                Guitar Fingering
            </MdSubHeader>
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
    )
}

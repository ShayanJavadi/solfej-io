
import React from 'react';
import "./ScaleInstrumentDiagrams.scss";
import PianoRollContainer from '../../../components/PianoRollContainer/PianoRollContainer';
import MdSubHeader from '../../../components/MdSubHeader/MdSubHeader';
import pianoContainerNotesAdapter from '../../../common/utils/pianoContainerNotesAdapter';
export default function ScaleInstrumentDiagrams(props) {
    const { scale } = props;
    const { displayName, notes, rootNote } = scale;
    const pianoNotes = pianoContainerNotesAdapter(notes, rootNote);

    return (
        <div className="scale-instrument-diagrams">
            <MdSubHeader
                subText={`How do you play a ${displayName} scale on the piano? (Yellow keys are IN the scale)`}
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
            <div class="guitar-fretboard-diagram-container"></div>
        </div>
    )
}

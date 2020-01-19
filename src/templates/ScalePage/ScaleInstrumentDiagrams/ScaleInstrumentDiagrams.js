
import React from 'react';
import "./ScaleInstrumentDiagrams.scss";
import PianoRollContainer from '../../../components/PianoRollContainer/PianoRollContainer';
import MdSubHeader from '../../../components/MdSubHeader/MdSubHeader';
import pianoContainerNotesAdapter from '../../../common/utils/pianoContainerNotesAdapter';
import FretBoard from '../../../components/FretBoard/FretBoard';
import { red, secondaryLight, primary } from '../../../common/consts/colors';

export default function ScaleInstrumentDiagrams(props) {
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
            <MdSubHeader
                subText={`How do you play the ${displayName} scale on the piano? (Yellow keys are IN the scale)`}
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


import loadable from '@loadable/component';
import React, { useState } from 'react';
import { Note } from "@tonaljs/modules"
import { red } from '../../../common/consts/colors';
import usePianoSound from '../../../common/hooks/usePianoSound';
import useGuitarSound from '../../../common/hooks/useGuitarSound';
import pianoContainerNotesAdapter from '../../../common/utils/pianoContainerNotesAdapter';
import FretBoard from '../../../components/FretBoard/FretBoard';
import { translateName } from '../../../i18n/translateName';
import MdSubHeader from '../../../components/MdSubHeader/MdSubHeader';
import PianoRollContainer from '../../../components/PianoRollContainer/PianoRollContainer';
import PlayerBlock from '../../../components/PlayerBlock/PlayerBlock';
import "./ScaleInstrumentDiagrams.scss";
import isServer from '../../../common/utils/isServer';
import { trackPianoKeyClick, trackFretboardNoteClick } from '../../../common/utils/analytics';
import useSectionTracking from '../../../common/hooks/useSectionTracking';


const TonePolySynthProvider = loadable(() => import('../../../components/TonePolySynthProvider'))

export default function ScaleInstrumentDiagrams(props) {
    const [showTone, setShowTone] = useState(!isServer() && !!window.TONE_AUDIO_CONTEXT);
    const [shouldAutoPlaySound, setShouldAutoPlaySound] = useState(false)
    const { scale, translatedStrings } = props;
    const ui = translatedStrings || {};
    const { displayName, notes, rootNote, intervals } = scale;
    const scaleName = translateName(displayName, scale.name, rootNote, ui.scaleNames);
    const playPianoNote = usePianoSound(rootNote);
    const playGuitarNote = useGuitarSound();
    const onPianoKeyClick = (note) => { trackPianoKeyClick(scaleName, note); playPianoNote(note); }
    const onGuitarNoteClick = (note) => { trackFretboardNoteClick(scaleName, note); playGuitarNote(note); }
    const audibleRef = useSectionTracking("Audible Example");
    const pianoRef = useSectionTracking("Piano Fingering");
    const guitarRef = useSectionTracking("Guitar Fingering");
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
            <div className="chord-notes-container container" style={{ marginBottom: "2.5rem" }} ref={audibleRef}>
                <MdSubHeader
                    subText={(ui.whatDoesScaleSoundLike || "What does a %s scale sound like?").replace(/%s/g, scaleName)}
                >
                    {ui.audibleExample || "Audible Example"}
                    </MdSubHeader>
                {
                    !showTone ?
                        <PlayerBlock
                            onClick={() => {
                                setShowTone(true);
                                setShouldAutoPlaySound(true)
                            }}
                            text={scaleName + " " + (ui.scaleWord || "scale")}
                        /> :
                        <TonePolySynthProvider>
                            <PlayerBlock
                                text={scaleName + " " + (ui.scaleWord || "scale")}
                                notesToPlay={intervals.map(Note.transposeFrom(rootNote + "3"))}
                                shouldAutoPlaySound={shouldAutoPlaySound}
                                playNotesSequentially
                            />
                        </TonePolySynthProvider>
                }
            </div>
            <MdSubHeader
                subText={(ui.howPlayScalePiano || "How do you play the %s scale on the piano?").replace(/%s/g, scaleName)}
            >
                {ui.pianoFingering || "Piano Fingering"}
            </MdSubHeader>
            <div className="piano-diagram-container" ref={pianoRef}>
                <h3 className="sub-sub-header">{ui.notesLabel || "Notes:"}</h3>

                <PianoRollContainer
                    notes={pianoNotes}
                    whiteList={notes}
                    highlightedNotes={notes}
                    noteOptions={noteOptions}
                    onKeyClick={onPianoKeyClick}
                />

                <h3 className="sub-sub-header">{ui.intervalsLabel || "Intervals:"}</h3>

                <PianoRollContainer
                    notes={pianoNotes}
                    whiteList={notes}
                    highlightedNotes={notes}
                    noteOptions={intervalsViewNoteOptions}
                    onKeyClick={onPianoKeyClick}
                />
            </div>
            <div ref={guitarRef}>
            <MdSubHeader
                subText={(ui.howPlayScaleGuitar || "How do you play the %s scale on the guitar?").replace(/%s/g, scaleName)}
            >
                {ui.guitarFingering || "Guitar Fingering"}
            </MdSubHeader>
            </div>
            <h3 className="sub-sub-header">{ui.notesLabel || "Notes:"}</h3>
            <div className="guitar-fretboard-diagram-container">
                <FretBoard
                    notes={notes}
                    whiteList={notes}
                    noteOptions={noteOptions}
                    tuning={["E", "A", "D", "G", "B", "E"]}
                    onNoteClick={onGuitarNoteClick}
                />
            </div>
            <h3 className="sub-sub-header">{ui.intervalsLabel || "Intervals:"}</h3>
            <div className="guitar-fretboard-diagram-container">
                <FretBoard
                    notes={notes}
                    whiteList={notes}
                    noteOptions={intervalsViewNoteOptions}
                    tuning={["E", "A", "D", "G", "B", "E"]}
                    onNoteClick={onGuitarNoteClick}
                />
            </div>

            <div className="fretboard-hint-container flex-centered">
                <sub>{ui.tapNotesHint || "💡 Tap the notes to hear each note"}</sub>
            </div>

        </div>
    )
}

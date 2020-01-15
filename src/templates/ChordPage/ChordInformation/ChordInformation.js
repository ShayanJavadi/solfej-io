
import React from 'react';
import { isEmpty } from "lodash";
import getChordDisplayName from '../../../common/utils/chords/getChordDisplayName';
import "./ChordInformation.scss";
import { MAPPED_INTERVALS_TO_DISPLAY_NAMES } from '../../../common/consts/twelveToneConsts';
import MdSubHeader from '../../../components/MdSubHeader/MdSubHeader';
import { Link } from 'gatsby';

const renderScaleRow = (rootNote, scales) => {
    const rootNoteText = rootNote.replace("sharp", "#");

    return (
        scales &&
        <div className="root-note-with-scales-container">
            <MdSubHeader>
                {rootNoteText}
            </MdSubHeader>
            <div className="scales">
                {
                    scales.map((scale, index) => (
                        <p>
                            {index !== 0 ? " - " : ""}
                            <Link to={scale.path}>{scale.name}</Link>
                        </p>
                    ))
                }
            </div>
        </div>
    )
}

export default function ChordInformation(props) {
    const { chord } = props
    const chordName = getChordDisplayName(chord)
    const intervalNames = chord.intervals.map(interval => MAPPED_INTERVALS_TO_DISPLAY_NAMES[interval])

    return (
        <div className="chord-information-container">
            <div className="chord-notes-container container">
                <MdSubHeader
                    subText={`What notes are in a ${chordName} chord?`}
                >
                    Notes
                </MdSubHeader>
                <p>{chord.notes.join(" - ")}</p>
            </div>
            <div className="chord-intervals-container container">
                <MdSubHeader
                    subText={`What intervals are in a ${chordName} chord?`}
                >
                    Intervals
                </MdSubHeader>
                {intervalNames.map(interval => <p>{interval}</p>)}
            </div>
            {
                !isEmpty(chord.parentScales) &&
                <div className="scales-container">
                    <MdSubHeader
                        subText={`What scales does a ${chordName} chord fit in?`}
                    >
                        Scales
                    </MdSubHeader>
                    <div className="scale-names-container">
                        {
                            Object.entries(chord.parentScales)
                                .filter(([rootNote]) => rootNote.replace("sharp", "#") === chord.rootNote)
                                .map(([rootNote, scales]) => renderScaleRow(rootNote, scales))
                        }
                        {
                            Object.entries(chord.parentScales)
                                .filter(([rootNote]) => rootNote.replace("sharp", "#") !== chord.rootNote)
                                .map(([rootNote, scales]) => renderScaleRow(rootNote, scales))
                        }
                    </div>
                </div>
            }
        </div>
    )
}

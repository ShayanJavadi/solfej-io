
import React from 'react';
import { isEmpty } from "lodash";
import getChordDisplayName from '../../../common/utils/chords/getChordDisplayName';
import "./ChordInformation.scss";
import { MAPPED_INTERVALS_TO_DISPLAY_NAMES } from '../../../common/consts/twelveToneConsts';
import MdSubHeader from '../../../components/MdSubHeader/MdSubHeader';
import { Link } from 'gatsby';

const INVERSION_TEXT = [
    "1st",
    "2nd",
    "3rd",
    "4th",
    "5th",
    "6th",
    "7th",
    "8th"
]

const renderScaleRow = (rootNote, scales) => {
    const rootNoteText = rootNote.replace("sharp", "#");

    return (
        scales &&
        <div className="root-note-with-scales-container" key={Math.random()}>
            <MdSubHeader>
                {rootNoteText}
            </MdSubHeader>
            <div className="scales">
                {
                    scales.map((scale, index) => (
                        <p key={index}>
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
    const highestInversion = Math.max(...chord.inversions.map(inversion => inversion.inversion));

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
                {intervalNames.map(interval => <p key={Math.random()}>{interval}</p>)}
            </div>
            {
                !isEmpty(chord.inversions) &&
                <div className="chord-intervals-container container">
                    <MdSubHeader
                        subText={`What are ${chordName} chord's inversions?`}
                    >
                        Inversions
                    </MdSubHeader>
                    {
                        Array(highestInversion + 1).fill(0).map((_, index) => {
                            const chordsInversion = chord.inversions.find(inversion => inversion.inversion === index)
                            
                            return (
                                <div key={index}>
                                    <p>
                                        {`${INVERSION_TEXT[index]}: `}
                                        {
                                            chordsInversion ?
                                                <Link to={chordsInversion.path}>
                                                    {`${chordsInversion ? chordsInversion.name : "?"}`}
                                                </Link> :
                                                "?"
                                        }
                                        
                                    </p>
                                </div>
                            )
                        })
                    }
                </div>
            }
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

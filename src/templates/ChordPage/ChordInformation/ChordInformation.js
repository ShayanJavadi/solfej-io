
import React from 'react';
import { isEmpty } from "lodash";
import getChordDisplayName from '../../../common/utils/chords/getChordDisplayName';
import { translateName } from '../../../i18n/translateName';
import "./ChordInformation.scss";
import { MAPPED_INTERVALS_TO_DISPLAY_NAMES } from '../../../common/consts/twelveToneConsts';
import { chordDescriptions as defaultChordDescriptions, chordQualityDescriptions as defaultQualityDescriptions } from '../../../common/consts/chordDescriptions';
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

const renderScaleRow = (rootNote, scales, prefix = "", scaleNames) => {
    const rootNoteText = rootNote.replace("sharp", "#");

    return (
        scales &&
        <div className="root-note-with-scales-container" key={Math.random()}>
            <MdSubHeader>
                {rootNoteText}
            </MdSubHeader>
            <div className="scales">
                {
                    scales.map((scale, index) => {
                        const scaleParts = scale.name.split(" ");
                        const scaleRootNote = scaleParts[0];
                        const scaleTypeName = scaleParts.slice(1).join(" ");
                        const translatedScaleName = translateName(scale.name, scaleTypeName, scaleRootNote, scaleNames);
                        return (
                            <p key={index}>
                                {index !== 0 ? " - " : ""}
                                <Link to={`${prefix}${scale.path}`}>{translatedScaleName}</Link>
                            </p>
                        );
                    })
                }
            </div>
        </div>
    )
}

export default function ChordInformation(props) {
    const { chord, translatedStrings, locale } = props
    const ui = translatedStrings || {
        notes: "Notes",
        whatNotesInChord: "What notes are in a %s chord?",
        intervals: "Intervals",
        whatIntervalsInChord: "What intervals are in a %s chord?",
        inversions: "Inversions",
        whatInversionsOfChord: "What are %s chord's inversions?",
        scales: "Scales",
        whatScalesFitChord: "What scales does a %s chord fit in?",
        ordinals: ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th"],
    };
    const chordName = translateName(getChordDisplayName(chord), chord.name, chord.rootNote, ui.chordNames)
    const intervalNames = chord.intervals.map(interval => MAPPED_INTERVALS_TO_DISPLAY_NAMES[interval])
    const highestInversion = Math.max(...chord.inversions.map(inversion => inversion.inversion));
    const prefix = locale ? `/${locale}` : "";

    const ordinals = ui.ordinals || INVERSION_TEXT;

    const chordDescs = ui.chordDescriptions || defaultChordDescriptions;
    const qualityDescs = ui.chordQualityDescriptions || defaultQualityDescriptions;
    const description = chordDescs[chord.name] || qualityDescs[chord.quality] || qualityDescs["Unknown"];
    const descriptionHeading = (ui.chordDescriptionHeading || "About the %s chord").replace(/%s/g, chordName);

    return (
        <div className="chord-information-container">
            {description &&
                <div className="chord-description-container container">
                    <MdSubHeader>
                        {descriptionHeading}
                    </MdSubHeader>
                    <p>{description}</p>
                </div>
            }
            <div className="chord-notes-container container">
                <MdSubHeader
                    subText={ui.whatNotesInChord.replace(/%s/g, chordName)}
                >
                    {ui.notes}
                </MdSubHeader>
                <p>{chord.notes.join(" - ")}</p>
            </div>
            <div className="chord-intervals-container container">
                <MdSubHeader
                    subText={ui.whatIntervalsInChord.replace(/%s/g, chordName)}
                >
                    {ui.intervals}
                </MdSubHeader>
                {intervalNames.map(interval => <p key={Math.random()}>{interval}</p>)}
            </div>
            {
                !isEmpty(chord.inversions) &&
                <div className="chord-intervals-container container">
                    <MdSubHeader
                        subText={ui.whatInversionsOfChord.replace(/%s/g, chordName)}
                    >
                        {ui.inversions}
                    </MdSubHeader>
                    {
                        Array(highestInversion + 1).fill(0).map((_, index) => {
                            const chordsInversion = chord.inversions.find(inversion => inversion.inversion === index)

                            return (
                                <div key={index}>
                                    <p>
                                        {`${ordinals[index]}: `}
                                        {
                                            chordsInversion ?
                                                <Link to={`${prefix}${chordsInversion.path}`}>
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
                        subText={ui.whatScalesFitChord.replace(/%s/g, chordName)}
                    >
                        {ui.scales}
                    </MdSubHeader>
                    <div className="scale-names-container">
                        {
                            Object.entries(chord.parentScales)
                                .filter(([rootNote]) => rootNote.replace("sharp", "#") === chord.rootNote)
                                .map(([rootNote, scales]) => renderScaleRow(rootNote, scales, prefix, ui.scaleNames))
                        }
                        {
                            Object.entries(chord.parentScales)
                                .filter(([rootNote]) => rootNote.replace("sharp", "#") !== chord.rootNote)
                                .map(([rootNote, scales]) => renderScaleRow(rootNote, scales, prefix, ui.scaleNames))
                        }
                    </div>
                </div>
            }
        </div>
    )
}

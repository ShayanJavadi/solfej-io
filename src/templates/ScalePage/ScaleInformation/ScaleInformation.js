
import React from 'react';
import { isEmpty } from "lodash";
import { Tonal } from "@tonaljs/modules";
import { translateName } from '../../../i18n/translateName';
import "./ScaleInformation.scss";
import MdSubHeader from '../../../components/MdSubHeader/MdSubHeader';
import { Link } from 'gatsby';
import { MAPPED_INTERVALS_TO_DISPLAY_NAMES } from '../../../common/consts/twelveToneConsts';
import { scaleDescriptions as defaultScaleDescriptions, scaleDefaultDescription as defaultFallback } from '../../../common/consts/scaleDescriptions';
const { distance } = Tonal;

const ROMAN_NUMERALS = [
    "I",
    "II",
    "III",
    "IV",
    "V",
    "VI",
    "VII",
    "VIII"
];

const DEFAULT_INVERSION_TEXT = [
    "1st Inversion",
    "2nd Inversion",
    "3rd Inversion",
    "4th Inversion",
    "5th Inversion",
    "6th Inversion",
    "7th Inversion",
    "8th Inversion"
]

const SCALE_FORMULA_INTERVALS = {
    "2M": "W",
    "2m": "H",
}

export default function ScaleInformation(props) {
    const { scale, translatedStrings, locale } = props;
    const { displayName, notes, chords, intervals } = scale;
    const prefix = locale ? `/${locale}` : "";
    const ui = translatedStrings || {
        notes: "Notes",
        whatNotesInScale: "What notes are in the %s scale",
        formula: "Formula",
        whatFormulaOfScale: "What is the formula for the %s scale",
        intervals: "Intervals",
        whatIntervalsInScale: "What intervals are in the %s scale",
        chords: "Chords",
        whatChordsInScale: "What chords (diatonic) are in the %s scale",
        chord: "chord",
    };
    const translatedScaleName = translateName(displayName, scale.name, scale.rootNote, ui.scaleNames);
    const inversionLabels = ui.inversionLabels || DEFAULT_INVERSION_TEXT;

    const scaleDescs = ui.scaleDescriptions || defaultScaleDescriptions;
    const description = scaleDescs[scale.name] || ui.scaleDefaultDescription || defaultFallback;
    const descriptionHeading = (ui.scaleDescriptionHeading || "About the %s scale").replace(/%s/g, translatedScaleName);

    const intervalNames = intervals.map(interval => MAPPED_INTERVALS_TO_DISPLAY_NAMES[interval])
    const scaleFormula = notes.map((note, index) => {
        if (notes[index + 1]) {
            return distance(note, notes[index + 1]);
        }

        return distance(note, notes[0]);
    })

    const chordScaleDegrees = notes.map((note, index) => {
        const scaleDegree = ROMAN_NUMERALS[index];
        const chord = chords.find(chordInScale => chordInScale.rootNote === note);

        return {
            scaleDegree,
            chord
        }
    })

    return (
        <div className="scale-information">
            {description &&
                <div className="scale-description-container">
                    <MdSubHeader>
                        {descriptionHeading}
                    </MdSubHeader>
                    <p>{description}</p>
                </div>
            }
            <MdSubHeader
                subText={ui.whatNotesInScale.replace(/%s/g, translatedScaleName)}
            >
                {ui.notes}
            </MdSubHeader>
            <p>
                {scale.notes.join(" - ")}
            </p>
            <MdSubHeader
                subText={ui.whatFormulaOfScale.replace(/%s/g, translatedScaleName)}
            >
                {ui.formula}
            </MdSubHeader>
            <p>
                {scaleFormula.join(" - ")}
            </p>
            <MdSubHeader
                subText={ui.whatIntervalsInScale.replace(/%s/g, translatedScaleName)}
            >
                {ui.intervals}
            </MdSubHeader>
            <p>
                {intervalNames.map(interval => <p key={Math.random()}>{interval}</p>)}
            </p>
            {
                !isEmpty(chordScaleDegrees) &&
                chordScaleDegrees.some(chordScaleDegree => chordScaleDegree.chord) &&
                <>
                    <MdSubHeader
                        subText={ui.whatChordsInScale.replace(/%s/g, translatedScaleName)}
                        className="chords-sub-header"
                    >
                        {ui.chords}
                    </MdSubHeader>
                    <div className="chords-in-scale">
                        {
                            chordScaleDegrees.map(({ scaleDegree, chord }) => {
                                const chordTypeName = chord ? chord.name.slice(chord.rootNote.length).trim() : "";
                                const translatedChordName = chord ? translateName(chord.name, chordTypeName, chord.rootNote, ui.chordNames) : "";
                                return (
                                <div>
                                    <p className="scale-degree">
                                        {scaleDegree}
                                    </p>
                                    <p className="divider">-</p>
                                    {
                                        chord ?
                                        <Link to={`${prefix}${chord.path}`}>
                                            <p>
                                                {translatedChordName} {ui.chord}
                                                {
                                                    ![undefined, null].includes(chord.inversion) &&
                                                    `(${inversionLabels[chord.inversion]})`
                                                }
                                            </p>
                                        </Link>:
                                        <p>?</p>
                                    }

                                </div>
                                )
                            })
                        }
                    </div>
                </>
            }
        </div>
    )
}

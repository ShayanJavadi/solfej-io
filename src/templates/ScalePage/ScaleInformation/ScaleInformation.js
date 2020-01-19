
import React from 'react';
import { isEmpty } from "lodash";
import { Tonal } from "@tonaljs/modules";
import "./ScaleInformation.scss";
import MdSubHeader from '../../../components/MdSubHeader/MdSubHeader';
import { Link } from 'gatsby';
import { MAPPED_INTERVALS_TO_DISPLAY_NAMES } from '../../../common/consts/twelveToneConsts';
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

const INVERSION_TEXT = [
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
    const { scale } = props;
    const { displayName, notes, chords, intervals } = scale;
    const intervalNames = intervals.map(interval => MAPPED_INTERVALS_TO_DISPLAY_NAMES[interval])
    const scaleFormula = notes.map((note, index) => {
        if (notes[index + 1]) {
            return SCALE_FORMULA_INTERVALS[distance(note, notes[index + 1])];
        }

        return SCALE_FORMULA_INTERVALS[distance(note, notes[0])];
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
            <MdSubHeader
                subText={`What notes are in the ${displayName} scale`}
            >
                Notes
            </MdSubHeader>
            <p>
                {scale.notes.join(" - ")}
            </p>
            <MdSubHeader
                subText={`What is the formula for the ${displayName} scale`}
            >
                Formula
            </MdSubHeader>
            <p>
                {scaleFormula.join(" - ")}
            </p>
            <MdSubHeader
                subText={`What intervals are in the ${displayName} scale`}
            >
                Intervals
            </MdSubHeader>
            <p>
                {intervalNames.map(interval => <p key={Math.random()}>{interval}</p>)}
            </p>
            {
                !isEmpty(chordScaleDegrees) &&
                chordScaleDegrees.some(chordScaleDegree => chordScaleDegree.chord) &&
                <>
                    <MdSubHeader
                        subText={`What chords (diatonic) are in the ${displayName} scale`}
                        className="chords-sub-header"
                    >
                        Chords
                    </MdSubHeader>
                    <div className="chords-in-scale">
                        {
                            chordScaleDegrees.map(({ scaleDegree, chord }) => (
                                <div>
                                    <p className="scale-degree">
                                        {scaleDegree}
                                    </p>
                                    <p className="divider">-</p>
                                    {
                                        chord ?
                                        <Link to={chord && chord.path}>
                                            <p>
                                                {chord.name} chord 
                                                {
                                                    ![undefined, null].includes(chord.inversion) && 
                                                    `(${INVERSION_TEXT[chord.inversion]})`
                                                }
                                            </p>
                                        </Link>:
                                        <p>?</p>
                                    }
                                    
                                </div>
                            ))
                        }
                    </div>
                </>              
            }
        </div>
    )
}

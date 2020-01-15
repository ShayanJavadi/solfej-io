
import React from 'react';
import { isEmpty } from "lodash";
import "./ScaleInformation.scss";
import MdSubHeader from '../../../components/MdSubHeader/MdSubHeader';
import { Link } from 'gatsby';

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

export default function ScaleInformation(props) {
    const { scale } = props;
    const { displayName, notes, chords } = scale;
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
                subText={`What notes are in a ${displayName} scale`}
            >
                Notes
            </MdSubHeader>
            <p>
                {scale.notes.join(" - ")}
            </p>
            {
                !isEmpty(chordScaleDegrees) &&
                <>
                    <MdSubHeader
                        subText={`What chords (diatonic) are in a ${displayName} scale`}
                        className="chords-sub-header"
                    >
                        Chords
                    </MdSubHeader>
                    <div class="chords-in-scale">
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
                                            <p>{chord.name} chord</p> :
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

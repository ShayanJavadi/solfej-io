
import React from 'react';
// get rid of ramda. currently being used for legacy fucntion reaons.
import { times, sum, range } from 'ramda'
import { isEmpty } from "lodash";
import classNames from "classnames";
import "./FretBoard.scss";
import matchAccidentals from '../../common/utils/matchAccidentals';
import { TWELVE_TONE_NOTES } from '../../common/consts/twelveToneConsts';


const calculateFretWidth = (numberOfFrets, currentPosition) =>
    (((2 ** (1 / numberOfFrets)) - 1) /
        (2 ** ((currentPosition + 1) / numberOfFrets))) * 100 * 2

export const fretWidth = nrFrets => pos =>
    (((2 ** (1 / nrFrets)) - 1) /
        (2 ** ((pos + 1) / nrFrets))) * 100 * 2

export const fretOffset = nrFrets => pos =>
    // (1 - (1 / (2 ** (pos / nrFrets)))) * 100 * 2
    sum(times(fretWidth(nrFrets), pos))

const stringHeight = nrOfStrings => 100 / nrOfStrings

const stringOffset = nrOfStrings => str =>
    str * stringHeight(nrOfStrings)

const stringCenter = nrOfStrings => str =>
    stringOffset(nrOfStrings)(str) + (stringHeight(nrOfStrings) / 2)

const renderOpenStrings = (props) => {
    const {
        numberOfFrets = 12,
        numberOfStrings = 6,
        notes,
        whiteList = [],
        noteOptions = [],
        tuning,
    } = props;

    return (
        <div className="neck">
            <div className="fret-column" style={{ width: "5%" }}>
                {
                    [...tuning].reverse().map((note) => {
                        const { style: { backgroundColor }, text } = noteOptions[note] || { style: {} };

                        return (
                            <div className="fret-row" key={Math.random()}>
                                <div
                                    className="fret-dot active"
                                    style={{ 
                                        backgroundColor: !whiteList.includes(note) ?
                                        "transparent" :
                                        backgroundColor
                                    }}
                                >
                                    {text || note}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

const renderNeck = (props) => {
    const { 
        numberOfFrets = 12,
        numberOfStrings = 6,
        notes,
        whiteList = [],
        noteOptions = [],
        tuning,
    } = props;
    const allNotes = [...TWELVE_TONE_NOTES];

    matchAccidentals(allNotes, notes);

    const fretboardNotes = tuning.map((stringNote, index) => {
        const noteIndex = allNotes.indexOf(stringNote);

        return Array(numberOfFrets).fill(0).map((_, index) => {
            return allNotes[(noteIndex + index + 1) % allNotes.length]
        }) 
    }).reverse()

    return (
        <div className="neck">
            {
                Array(numberOfFrets).fill(0).map((_, fretIndex) => (
                    <div className="fret-column" style={{ width: `${calculateFretWidth(numberOfFrets, fretIndex)}%` }} key={Math.random()}>
                        {
                            Array(numberOfStrings).fill(0).map((_, stringIndex) => {
                                const note = fretboardNotes[stringIndex][fretIndex];
                                const shouldShow = whiteList.includes(note);
                                const { style: { backgroundColor }, text } = noteOptions[note] || { style: {} };
                                const dotClasses = classNames(
                                    "fret-dot",
                                    shouldShow && "active"
                                );
                                
                                return (
                                    <div className="fret-row" key={Math.random()}>
                                        <div 
                                            className={dotClasses}
                                            style={{ backgroundColor }}
                                        >
                                            {shouldShow && (text || note)}
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                ))
            }
        </div>
    )
}


const stringLine = nrOfStrings => (str) => {
    const y = stringCenter(nrOfStrings)(str)
    return (
        <line
            key={`str-${str}`}
            x1="0%"
            x2="100%"
            y1={`${y}%`}
            y2={`${y}%`}
        />)
}

const fretLineBounds = nrOfStrings => (
    {
        top: stringCenter(nrOfStrings)(0),
        bottom: stringCenter(nrOfStrings)(nrOfStrings - 1),
    }
)
const fretLine = (nrOfFrets, nrOfStrings) => (frt) => {
    const { top, bottom } = fretLineBounds(nrOfStrings)
    const x = fretOffset(nrOfFrets)(frt)

    return (
        <line
            key={`fret-${frt}`}
            x1={`${x}%`}
            x2={`${x}%`}
            y1={`${top}%`}
            y2={`${bottom}%`}
        />)
}

const boardGraphicStrings = (numberOfStrings, numberOfFrets) =>
    <g>
        {times(stringLine(numberOfStrings), numberOfStrings)}
        {range(1, numberOfFrets).map(fretLine(numberOfFrets, numberOfStrings))}
    </g>

export default function FretBoard(props) {
    const { numberOfFrets = 12, numberOfStrings = 6 } = props;

    return (
        <div className="fret-board">
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100%" stroke="black" strokeWidth="1" fill="white" shapeRendering="geometricPrecision" styles={{ overflow: "visible" }}>
                <svg width="100%" height="100%" x="0" y="0">
                    <foreignObject width="100%" height="100%">
                        {renderOpenStrings(props)}
                    </foreignObject>
                </svg>
                <svg width="0.75%" height="100%" x="6%" y="0"><rect x="0" y="8.333333333333334%" width="100%" height="83.33333333333334%" fill="black"></rect></svg>
                <svg width="95.25%" height="100%" x="6%" y="0">
                    {boardGraphicStrings(numberOfStrings, numberOfFrets)}
                    <foreignObject width="100%" height="100%">
                        {renderNeck(props)}
                    </foreignObject>
                </svg>
            </svg>
             
        </div>
    )
}

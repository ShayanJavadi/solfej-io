import classNames from "classnames";
import { map } from "lodash";
import React from "react";
import "./PianoRoll.scss";

const getIsBlackKey = note => ["C#", "Db", "D#", "Eb", "F#", "Gb", "G#", "Ab", "A#", "Bb"].includes(note);

const splitNoteAndOctave = noteNameToSplit => {
    const [noteName, octave] = noteNameToSplit.split(/(\d)/);
    return {
        noteName,
        octave: octave ? parseInt(octave) : undefined,
    };
};



const CORRECT_NOTE_CLASSNAME = "correct";
const DISABLED_NOTE_CLASSNAME = "disabled";

const renderKeys = (note, {
  noteToGuess = "",
  isDisabled,
  onKeyClick = () => null,
  isPresentational,
  hideBlackKeyNames,
  notesHaveOctaves,
  whiteListHasOctaves,
  whiteList,
  highlightedNotes,
  wrongPressedNotes,
  correctPressedNotes,
}) => {
  let noteName;
  let octave;

  if (notesHaveOctaves) {
    const noteAndOctave = splitNoteAndOctave(note);
    noteName = noteAndOctave.noteName;
    octave = noteAndOctave.octave;
    
  } else {
    noteName = note;
  }
  const isBlackKey = getIsBlackKey(noteName);
  const isCorrectNote = noteName === noteToGuess.noteName;
  const isWrongAndPressed = wrongPressedNotes && wrongPressedNotes.includes(noteName);
  const isCorrectAndPressed = correctPressedNotes && correctPressedNotes.includes(noteName);

  const keyClasses = classNames(
    isCorrectNote && !isDisabled && !isPresentational && CORRECT_NOTE_CLASSNAME,
    isDisabled && DISABLED_NOTE_CLASSNAME,
    isBlackKey ? "key black-key" : "key white-key",
    isWrongAndPressed && "highlight-red",
    isCorrectAndPressed && "highlight-green",
    highlightedNotes.includes(note) && "highlighted"
  );
  const containerClasses = classNames(
    isBlackKey ? "black-key-container" : keyClasses,
  );

  const noteNameDisplay = whiteList ?
    whiteList.includes(whiteListHasOctaves ? note : noteName) ? noteName : "" :
    noteName;

  return (
    <div 
      className={containerClasses} 
      onClick={() => !isDisabled && !isWrongAndPressed && onKeyClick(notesHaveOctaves ? { noteName, octave } : noteName)} 
      key={Math.random()}
    >
      {
        isBlackKey ?
          <div className={keyClasses}>
            <span className={classNames("note-text")}>{hideBlackKeyNames ? "" : noteNameDisplay}</span>
          </div>:
          <span className={classNames("note-text")}>{noteNameDisplay}</span>
      }
    </div>
  );
};

export default function PianoRoll(props) {
  const classes = classNames("piano-roll", props.isPresentational && "presentational");

  return (
    <div className={classes}>
      {map(props.notes, note => renderKeys(note, props))}
    </div>
  );
}

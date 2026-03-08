import { sample } from "lodash";
import createChordNotes from "../../util/chordUtils/createChordNotes";
import {
  CHORD_QUALITY_SCREEN_SET_OPTIONS, CHORD_QUALITY_SCREEN_SET_CHORD_TO_GUESS, PRACTICE_LOOP_NEW_QUESTION, PRACTICE_LOOP_SET_OPTIONS 
} from "../types";
import { EAR_TRAINING_CHORD_IDENTIFICATION_AVAILABLE_CUSTOM_OPTIONS } from "../../common/consts/earTrainingLessonChordsOptions";
import splitNoteAndOctave from "../../util/noteUtils/splitNoteAndOctave";
import { NOTES } from "../../common/consts/twelveToneConsts";
import { ROOT_NOTE_MODE_RANGE, ROOT_NOTE_MODE_FIXED } from "../../common/consts/earTrainingLessonCommonOptions";

const getRootNoteAndOctave = ({
  referenceNoteRange,
  octavesRange,
  noteRange,
  rootNoteMode,
  fixedRootNote
}) => {
  // this is ideally how the note should be in the future
  // the custom lessons come through from this first flow
  // TODO: refactor the other flows to use the noteRange model
  if (noteRange && rootNoteMode === ROOT_NOTE_MODE_RANGE) {
    const [firstNote, lastNote] = noteRange || [];
    const availableNotes = NOTES.slice(NOTES.indexOf(firstNote), NOTES.indexOf(lastNote) + 1);
    const { noteName: rootNote, octave } = splitNoteAndOctave(sample(availableNotes));

    return { rootNote, octave };
  }

  if (fixedRootNote && rootNoteMode === ROOT_NOTE_MODE_FIXED) {
    const { noteName: rootNote, octave } = splitNoteAndOctave(fixedRootNote);

    return { rootNote, octave };
  }

  const rootNote = sample(referenceNoteRange);
  const octave = sample(octavesRange);

  return { rootNote, octave };
};

export const getNewQuestion = lessonId => (dispatch, getState) => {
  const { chordQualityScreen } = getState();
  const { 
    octavesRange,
    referenceNoteRange,
    availableChoices,
    noteRange,
    rootNoteMode,
    fixedRootNote
  } = chordQualityScreen;

  dispatch({
    type: PRACTICE_LOOP_NEW_QUESTION
  });
  
  const { rootNote, octave } = getRootNoteAndOctave({
    referenceNoteRange,
    octavesRange,
    noteRange,
    rootNoteMode,
    fixedRootNote
  });
  const { displayName: chordName, intervals } = sample(chordQualityScreen.availableChoices);
  const newChordToGuess = {
    chordName,
    notes: createChordNotes({ rootNote, intervals, index: 0, octave }),
  };

  dispatch({
    type: CHORD_QUALITY_SCREEN_SET_CHORD_TO_GUESS,
    payload: newChordToGuess
  });
};

export const setOptions = (options = {}) => dispatch => {
  const {
    choices,
    chords,
    fixedRootNote,
    noteRange,
    pointsToFinish,
    rootNoteMode,
    wrongAnswerPenalty,
    referenceNoteRange,
    octavesRange,
  } = options;

  const { chords: availableChords } = EAR_TRAINING_CHORD_IDENTIFICATION_AVAILABLE_CUSTOM_OPTIONS;

  const chordsOrderArray = availableChords.map(chord => chord.label);
  const sortedChoices = Object.values(chords)
    .sort((a, b) => chordsOrderArray.indexOf(a.displayName) - chordsOrderArray.indexOf(b.displayName))
    .reduce((chordsAcc, chord) => ({
      ...chordsAcc,
      [chord.machineName]: chord
    }), {});
    
  dispatch({
    type: PRACTICE_LOOP_SET_OPTIONS,
    payload: {
      wrongAnswerPenalty,
      pointsToFinish
    }
  });

  dispatch({
    type: CHORD_QUALITY_SCREEN_SET_OPTIONS,
    payload: {
      chords: sortedChoices,
      octavesRange,
      referenceNoteRange,
      fixedRootNote,
      noteRange,
      rootNoteMode,
    }
  });

  return Promise.resolve();
};
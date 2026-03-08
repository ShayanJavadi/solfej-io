import { TWELVE_TONE_NOTES, INTERVALS_DISPLAY_NAMES } from "../../common/consts/twelveToneConsts";
import { INTERVAL_IDENTIFICATION_SCREEN_SET_NEW_QUESTION, INTERVAL_IDENTIFICATION_SCREEN_SET_OPTIONS } from "../types";
import { PLAY_SPEED_NORMAL } from "../../common/consts/earTrainingLessonIntervalsOptions";
import { ROOT_NOTE_MODE_FIXED, ROOT_NOTE_MODE_RANGE } from "../../common/consts/earTrainingLessonCommonOptions";

const getNoteRange = ({ rootNoteMode, fixedRootNote, noteRange }) => {
  if (rootNoteMode === ROOT_NOTE_MODE_FIXED) {
    return fixedRootNote;
  }

  if (rootNoteMode === ROOT_NOTE_MODE_RANGE) {
    return noteRange;
  }
};

const initialState = {
  referenceNoteRange: [],
  octavesRange: [],
  intervals: [],
  octavesBetweenIntervalAndRootRange: [],
  referenceNote: { noteName: undefined, index: 0, octave: undefined },
  noteToGuess: { noteName: undefined, index: 1, octave: undefined },
  availableChoices: INTERVALS_DISPLAY_NAMES,
  playModes: [],
  noteRange: [],
  getPlayableSounds: undefined,
  playSpeed: PLAY_SPEED_NORMAL,
  rootNoteMode: undefined,
  fixedRootNote: undefined,
};

export default (state = initialState, action) => {
  switch (action.type) {
  case INTERVAL_IDENTIFICATION_SCREEN_SET_NEW_QUESTION:
    return {
      ...state,
      noteToGuess: action.payload.noteToGuess,
      referenceNote: action.payload.referenceNote,
      correctChoiceName: action.payload.correctChoiceName,
      playableSounds: action.payload.playableSounds
    };
  case INTERVAL_IDENTIFICATION_SCREEN_SET_OPTIONS:
    return {
      ...state,
      referenceNoteRange: action.payload.referenceNoteRange,
      intervals: action.payload.intervals,
      availableChoices: action.payload.choices,
      octavesRange: action.payload.octavesRange,
      octavesBetweenIntervalAndRootRange: action.payload.octavesBetweenIntervalAndRootRange,
      getPlayableSounds: action.payload.getPlayableSounds,
      noteRange: getNoteRange(action.payload),
      playModes: action.payload.playModes,
      playSpeed: action.payload.playSpeed,
      rootNoteMode: action.payload.rootNoteMode,
      fixedRootNote: action.payload.fixedRootNote
    };
  default:
    return state;
  }
};

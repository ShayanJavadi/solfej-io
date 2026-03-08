import { TWELVE_TONE_NOTES } from "../../common/consts/twelveToneConsts";
import { CHORD_QUALITY_SCREEN_SET_CHORD_TO_GUESS, CHORD_QUALITY_SCREEN_SET_OPTIONS } from "../types";
import { CHORD_QUALITY_CHOICES } from "../../common/consts/earTrainingLessonChordsOptions"; // DO NOT REMOVE! EVERYTHING BREAKS AND I HAVE NO IDEA WHY

const initialState = {
  noteRange: TWELVE_TONE_NOTES,
  referenceNote: { noteName: "C", index: undefined },
  chordToGuess: { chordName: undefined, index: 0, notes: [] },
  availableChoices: CHORD_QUALITY_CHOICES,
  octavesRange: [],
  referenceNoteRange: [],
  fixedRootNote: undefined,
  rootNoteMode: undefined,
  noteRange: []
};

export default (state = initialState, action) => {
  switch (action.type) {
  case CHORD_QUALITY_SCREEN_SET_CHORD_TO_GUESS:
    return {
      ...state,
      chordToGuess: action.payload
    };
  case CHORD_QUALITY_SCREEN_SET_OPTIONS:
    return {
      ...state,
      availableChoices: action.payload.chords,
      octavesRange: action.payload.octavesRange,
      referenceNoteRange: action.payload.referenceNoteRange,
      fixedRootNote: action.payload.fixedRootNote,
      noteRange: action.payload.noteRange,
      rootNoteMode: action.payload.rootNoteMode,
    };
  default:
    return state;
  }
};

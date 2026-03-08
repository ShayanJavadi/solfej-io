import { SINGLE_NOTE_SCREEN_SET_NOTE_TO_GUESS } from "../types";
import { TWELVE_TONE_NOTES } from "../../common/consts/twelveToneConsts";

const initialState = {
  noteRange: TWELVE_TONE_NOTES,
  referenceNote: { noteName: "C", index: 0 },
  noteToGuess: { noteName: undefined, index: 1 }
};

export default (state = initialState, action) => {
  switch (action.type) {
  case SINGLE_NOTE_SCREEN_SET_NOTE_TO_GUESS:
    return {
      ...state,
      noteToGuess: action.payload
    };
  default:
    return state;
  }
};

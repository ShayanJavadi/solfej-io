import { TWELVE_TONE_NOTES, INTERVALS_DISPLAY_NAMES } from "../../common/consts/twelveToneConsts";
import { INTERVAL_IDENTIFICATION_SCREEN_SET_NEW_QUESTION, INTERVAL_IDENTIFICATION_SCREEN_SET_OPTIONS, ENHARMONIC_NOTES_EXERCISE_SCREEN_SET_NOTES } from "../types";

const initialState = {
  noteRange: TWELVE_TONE_NOTES,
  firstNote: undefined,
  secondNote: undefined,
  availableChoices: ["True", "False"]
};

export default (state = initialState, action) => {
  switch (action.type) {
  case ENHARMONIC_NOTES_EXERCISE_SCREEN_SET_NOTES:
    return {
      ...state,
      firstNote: action.payload.firstNote,
      secondNote: action.payload.secondNote
    };
  default:
    return state;
  }
};

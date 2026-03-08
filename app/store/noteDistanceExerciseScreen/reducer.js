import { TWELVE_TONE_NOTES } from "../../common/consts/twelveToneConsts";
import { NOTE_DISTANCE_EXERCISE_SCREEN_SET_AVAILABLE_CHOICES, NOTE_DISTANCE_EXERCISE_SCREEN_SET_QUESTION } from "../types";

const initialState = {
  noteRange: TWELVE_TONE_NOTES,
  referenceNote: undefined,
  intervalToGuess: undefined,
  availableChoices: []
};

export default (state = initialState, action) => {
  switch (action.type) {
  case NOTE_DISTANCE_EXERCISE_SCREEN_SET_QUESTION:
    return {
      ...state,
      referenceNote: action.payload.referenceNote,
      intervalToGuess: action.payload.intervalToGuess,
    };
  case NOTE_DISTANCE_EXERCISE_SCREEN_SET_AVAILABLE_CHOICES:
    return {
      ...state,
      availableChoices: action.payload
    };
  default:
    return state;
  }
};

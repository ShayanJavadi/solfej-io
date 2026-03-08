import { RHYTHM_TRANSCRIPTION_SCREEN_SET_CORRECT_CHOICE, RHYTHM_TRANSCRIPTION_SCREEN_SET_CHOICES } from "../types";

const initialState = {
  availableChoices: undefined,
  correctChoice: "",
  choiceLength: undefined,
  choiceId: undefined
};

export default (state = initialState, action) => {
  switch (action.type) {
  case RHYTHM_TRANSCRIPTION_SCREEN_SET_CORRECT_CHOICE:
    return {
      ...state,
      correctChoice: action.payload,
      choiceId: Math.random()
    };
  case RHYTHM_TRANSCRIPTION_SCREEN_SET_CHOICES:
    return {
      ...state,
      availableChoices: action.payload.choices,
      choiceLength: action.payload.choiceLength
    };
  default:
    return state;
  }
};

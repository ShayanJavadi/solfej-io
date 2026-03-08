import { SOUND_EFFECTS_SET_CORRECT_SOUND_EFFECT, SOUND_EFFECTS_SET_IS_LOADING, SOUND_EFFECTS_SET_WRONG_SOUND_EFFECT } from "../types";

const initialState =  {
  isLoading: false,
  correctSoundEffect: undefined,
  wrongSoundEffect: undefined
};

export default (state = initialState, action) => {
  switch (action.type) {
  case SOUND_EFFECTS_SET_IS_LOADING:
    return {
      ...state,
      isLoading: action.payload
    };
  case SOUND_EFFECTS_SET_CORRECT_SOUND_EFFECT:
    return {
      ...state,
      correctSoundEffect: action.payload
    };
  case SOUND_EFFECTS_SET_WRONG_SOUND_EFFECT:
    return {
      ...state,
      wrongSoundEffect: action.payload
    };
  default:
    return state;
  }
};

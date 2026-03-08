import Tone from "tone";
import { APP_SET_IS_INTERACTIVE, APP_SET_IS_LOADING, APP_SET_SHOULD_SHOW_VOLUME_WARNINIG, } from "../types";

const initialState = { 
  isInteractive: false,
  isLoading: false,
  shouldShowVolumeWarning: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
  case APP_SET_IS_INTERACTIVE:
    return {
      ...state,
      isInteractive: action.payload
    };
  case APP_SET_IS_LOADING:
    return {
      ...state,
      isLoading: action.payload
    };
  case APP_SET_SHOULD_SHOW_VOLUME_WARNINIG:
    return {
      ...state,
      shouldShowVolumeWarning: action.payload
    };
  default:
    return state;
  }
};

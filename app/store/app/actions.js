import Tone from "tone";
import { APP_SET_IS_INTERACTIVE, APP_SET_IS_LOADING, APP_SET_SHOULD_SHOW_VOLUME_WARNINIG } from "../types";

export const setAppIsInteractive = isInteractive => dispatch => {
  Tone.start();
  dispatch({
    type: APP_SET_IS_INTERACTIVE,
    payload: isInteractive
  });
};

export const setAppIsLoading = isLoading => dispatch => {
  dispatch({
    type: APP_SET_IS_LOADING,
    payload: isLoading
  });
};

export const setShouldShowVolumeWarning = shouldShowVolumeWarning => dispatch => {

  dispatch({
    type: APP_SET_SHOULD_SHOW_VOLUME_WARNINIG,
    payload: shouldShowVolumeWarning
  });
};
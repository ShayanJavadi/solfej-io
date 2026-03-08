import { APP_SET_IS_LOADING } from "../types";

const signInWithGoogleWeb = async (firebase, dispatch) => {
  try {
    await firebase.login({ provider: "google", type: "popup" });

    dispatch({
      type: APP_SET_IS_LOADING,
      payload: false
    });
  } catch (e) {
    console.error("Google sign-in error:", e);
    dispatch({
      type: APP_SET_IS_LOADING,
      payload: false
    });
  }
};

export const signInWithGoogle = firebase => dispatch => {
  dispatch({
    type: APP_SET_IS_LOADING,
    payload: true
  });

  signInWithGoogleWeb(firebase, dispatch);
};

export const signInWithApple = firebase => dispatch => {
  // Apple Sign-In not available on web
};

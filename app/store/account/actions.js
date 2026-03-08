import {
  ACCOUNT_SET_IS_LOADING, ACCOUNT_SET_IS_SETUP_COMPLETE, ACCOUNT_SET_IS_ONBOARDED, ACCOUNT_SET_IS_LOADING_ONBOARDED_STATUS, ACCOUNT_SET_IS_SUBSCRIBED 
} from "../types";

export const setAccountIsLoading = isLoading => dispatch => {
  dispatch({
    type: ACCOUNT_SET_IS_LOADING,
    payload: isLoading
  });
};

export const setAccountIsSetupComplete = isComplete => dispatch => {
  dispatch({
    type: ACCOUNT_SET_IS_SETUP_COMPLETE,
    payload: isComplete
  });
};

export const setAccountIsOnboarded = isOnboarded => dispatch => {
  dispatch({
    type: ACCOUNT_SET_IS_ONBOARDED,
    payload: isOnboarded
  });
};

export const setAccountIsLoadingOnboardedStatus = isLoading => dispatch => {
  dispatch({
    type: ACCOUNT_SET_IS_LOADING_ONBOARDED_STATUS,
    payload: isLoading
  });
};

export const setAccountIsSubscribed = isSubscribed => dispatch => {
  dispatch({
    type: ACCOUNT_SET_IS_SUBSCRIBED,
    payload: isSubscribed
  });
};
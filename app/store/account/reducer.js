import {
  ACCOUNT_SET_IS_LOADING, ACCOUNT_SET_IS_LOADING_SUBSCRIBED_STATUS, ACCOUNT_SET_IS_SETUP_COMPLETE, ACCOUNT_SET_IS_SUBSCRIBED, ACCOUNT_SET_IS_ONBOARDED, ACCOUNT_SET_IS_LOADING_ONBOARDED_STATUS 
} from "../types";

const initialState = {
  isLoading: false,
  isSetupComplete: false,
  isSubscribed: false,
  isLoadingSubscribedStatus: false,
  isOnboarded: false,
  isLoadingOnboardedStatus: false,
  isOnboardFetchComplete: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
  case ACCOUNT_SET_IS_LOADING:
    return {
      ...state,
      isLoading: action.payload
    };
  case ACCOUNT_SET_IS_SETUP_COMPLETE:
    return {
      ...state,
      isSetupComplete: action.payload
    };
  case ACCOUNT_SET_IS_SUBSCRIBED:
    return {
      ...state,
      isSubscribed: action.payload
    };
  case ACCOUNT_SET_IS_LOADING_SUBSCRIBED_STATUS:
    return {
      ...state,
      isLoadingSubscribedStatus: action.payload
    };
  case ACCOUNT_SET_IS_ONBOARDED:
    return {
      ...state,
      isOnboarded: action.payload,
      isOnboardFetchComplete: true,
    };
  case ACCOUNT_SET_IS_LOADING_ONBOARDED_STATUS:
    return {
      ...state,
      isLoadingOnboardedStatus: action.payload
    };
  default:
    return state;
  }
};

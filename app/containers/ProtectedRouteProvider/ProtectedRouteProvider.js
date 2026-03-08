import locationHelperBuilder from "redux-auth-wrapper/history4/locationHelper";
import { connectedRouterRedirect } from "redux-auth-wrapper/history4/redirect";
import {
  HOME_SCREEN, SIGN_IN_SCREEN, SUBSCRIPTION_SCREEN, GET_STARTED_SCREEN, ONBOARDING_SCREEN, SUBSCRIPTION_CAROUSEL_SCREEN, SUBSCRIPTION_CAROUSEL_SCREEN_MODAL 
} from "../../common/consts/routes";

// This route can only be accessed if authenticated
export const AuthenticatedRouteProvider = connectedRouterRedirect({
  wrapperDisplayName: "UserIsAuthenticated",
  allowRedirectBack: true,
  redirectPath: (state, ownProps) =>
    GET_STARTED_SCREEN,
  authenticatingSelector: ({ firebase: { auth, isInitializing } }) =>
    !auth.isLoaded || isInitializing === true,
  authenticatedSelector: ({ firebase: { auth } }) =>
    auth.isLoaded && !auth.isEmpty,
});

const locationHelper = locationHelperBuilder({});

// This route can only be accessed if unauthenticated
export const UnauthenticatedRouteProvider = connectedRouterRedirect({
  wrapperDisplayName: "UserIsNotAuthenticated",
  allowRedirectBack: false,
  redirectPath: (state, ownProps) => HOME_SCREEN,
  authenticatingSelector: ({ firebase: { auth, isInitializing } }) =>
    !auth.isLoaded || isInitializing === true,
  authenticatedSelector: ({ firebase: { auth } }) =>
    auth.isLoaded && auth.isEmpty,
});

// this route can only be accessed if subscribed
export const SubscribedRouteProvider = connectedRouterRedirect({
  wrapperDisplayName: "UserIsSubscribed",
  allowRedirectBack: true,
  redirectPath: (state, ownProps) =>
    SUBSCRIPTION_CAROUSEL_SCREEN_MODAL,
  authenticatingSelector: ({ account: { isSubscribed, isLoadingSubscribedStatus } }) =>
    isLoadingSubscribedStatus && !isSubscribed,
  authenticatedSelector: ({ account: { isSubscribed, isLoadingSubscribedStatus } }) =>
    isSubscribed && !isLoadingSubscribedStatus,
});

// this route can only be accessed if not subscribed
export const NotSubscribedRouteProvider = connectedRouterRedirect({
  wrapperDisplayName: "UserIsNotSubscribed",
  allowRedirectBack: true,
  redirectPath: (state, ownProps) =>
    HOME_SCREEN,
  authenticatingSelector: ({ account: { isSubscribed, isLoadingSubscribedStatus } }) =>
    isLoadingSubscribedStatus && !isSubscribed,
  authenticatedSelector: ({ account: { isSubscribed, isLoadingSubscribedStatus } }) =>
    !isSubscribed && !isLoadingSubscribedStatus,
});

// this route can only be accessed if onboarded
export const IsOnboardedProvider = connectedRouterRedirect({
  wrapperDisplayName: "UserIsOnboarded",
  allowRedirectBack: true,
  redirectPath: (state, ownProps) =>
    ONBOARDING_SCREEN,
  authenticatingSelector: ({ account: { isOnboarded, isLoadingOnboardedStatus, isOnboardFetchComplete } }) =>
    !isOnboardFetchComplete || isLoadingOnboardedStatus,
  authenticatedSelector: ({ account: { isOnboarded, isLoadingOnboardedStatus, isOnboardFetchComplete } }) =>
    isOnboarded && !isLoadingOnboardedStatus && isOnboardFetchComplete,
});

// this route can only be accessed if not onboarded
export const NotOnboardedProvider = connectedRouterRedirect({
  wrapperDisplayName: "UserIsNotOnboarded",
  allowRedirectBack: true,
  redirectPath: (state, ownProps) => HOME_SCREEN,
  authenticatingSelector: ({ account: { isOnboarded, isLoadingOnboardedStatus, isOnboardFetchComplete } }) =>
    !isOnboardFetchComplete || isLoadingOnboardedStatus,
  authenticatedSelector: ({ account: { isOnboarded, isLoadingOnboardedStatus, isOnboardFetchComplete } }) =>
    !isOnboarded && !isLoadingOnboardedStatus && isOnboardFetchComplete,
});

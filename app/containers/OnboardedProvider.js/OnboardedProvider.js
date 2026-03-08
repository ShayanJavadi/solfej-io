import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFirebase, useFirebaseConnect } from "react-redux-firebase";
import { isEmpty } from "lodash";
import {
  setAccountIsLoading, setAccountIsSetupComplete, setAccountIsLoadingOnboardedStatus, setAccountIsOnboarded 
} from "../../store/account/actions";
import { setupNewAccount } from "../../store/firebase/accountSetup";
import { USERS } from "../../common/consts/api";
import useSetIsLoading from "../../common/hooks/useSetIsLoading";

const getIsLoading = (firebase) => {
  return firebase.requesting &&
    (
      firebase.auth && !firebase.auth.isLoaded ||
      firebase.auth && firebase.auth.isLoaded === undefined ||
      isEmpty(firebase.requesting) ||
      firebase.requesting[`${USERS}/${firebase.auth.uid}`]
    );
};

const getIsOnboarded = firebase => {
  const { uid } = firebase.auth || {};

  const { isOnboarded } = (firebase.data && firebase.data.users && firebase.data.users[uid]) || {};

  return isOnboarded;
};

// Makes sure account setup is done before the user accesses the app
export default props => {
  const {
    auth,
    isOnboarded,
    isLoadingOnboardedStatus,
    isOnboardFetchComplete,
    isLoading
  } = useSelector(state => ({
    auth: state.firebase.auth,
    isOnboarded: state.account.isOnboarded,
    isLoadingOnboardedStatus: state.account.isLoadingOnboardedStatus,
    isOnboardFetchComplete: state.account.isOnboardFetchComplete,
    isOnboarded: getIsOnboarded(state.firebase),
    isLoading: getIsLoading(state.firebase)
  }));

  const { uid } = auth;

  useFirebaseConnect(uid && [
    { path: `${USERS}/${uid}` },
  ]);

  const firebase = useFirebase();
  const dispatch = useDispatch();

  // don't need to set this to start loading if there's no uid since we need uid to check status
  const loadingSetter = isLoading => uid && dispatch(setAccountIsLoadingOnboardedStatus(isLoading));
  useSetIsLoading(isLoading, loadingSetter);

  if (!isOnboardFetchComplete && !isLoading && isLoading !== undefined) {
    dispatch(setAccountIsOnboarded(isOnboarded));
  }
  return <>{props.children}</>;
};


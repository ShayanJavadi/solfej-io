import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFirebase } from "react-redux-firebase";
import firebase from "firebase/app";
import "firebase/analytics";
import { setAccountIsLoading, setAccountIsSetupComplete } from "../../store/account/actions";
import { setupNewAccount } from "../../store/firebase/accountSetup";
import { setUserProperties } from "../../common/consts/analytics";

// Makes sure account setup is done before the user accesses the app
export default props => {
  const {
    auth,
    isAccountSetupComplete
  } = useSelector(state => ({
    auth: state.firebase.auth,
    isAccountSetupComplete: state.app.isAccountSetupComplete
  }));

  const rfFirebase = useFirebase();
  const dispatch = useDispatch();

  useEffect(() => {
    const firebaseAccountLoaded = !auth.isEmpty && auth.isLoaded;

    if (firebaseAccountLoaded && !isAccountSetupComplete) {
      const accountSetup = async () => {
        dispatch(setAccountIsLoading(true));

        await dispatch(setupNewAccount(rfFirebase, auth));

        try {
          firebase.analytics().setUserId(auth.uid);
          setUserProperties({
            subscription_status: "free",
          });
        } catch (e) {
          // analytics may not be initialized
        }

        dispatch(setAccountIsLoading(false));
        dispatch(setAccountIsSetupComplete(true));
      };

      accountSetup();
    }

    return () => dispatch(setAccountIsLoading(false));
  }, [auth]);

  return <>{props.children}</>;
};

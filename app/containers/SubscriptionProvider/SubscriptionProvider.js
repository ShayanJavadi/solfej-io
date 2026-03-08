import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFirebase, useFirebaseConnect } from "react-redux-firebase";
import { USERS } from "../../common/consts/api";
import { setAccountIsSubscribed } from "../../store/account/actions";

const getIsFriend = firebase => {
  const { uid } = firebase.auth || {};
  const { isFriend } = (firebase.data && firebase.data.users && firebase.data.users[uid]) || {};
  return isFriend;
};

const getStripeSubscriptionActive = firebase => {
  const { uid } = firebase.auth || {};
  const userData = firebase.data && firebase.data.users && firebase.data.users[uid];
  return userData && userData.stripeSubscriptionActive;
};

export default props => {
  const firebase = useFirebase();
  const dispatch = useDispatch();
  const { auth = {}, isFriend, stripeSubscriptionActive } = useSelector(({ firebase }) => ({
    auth: firebase.auth,
    isFriend: getIsFriend(firebase),
    stripeSubscriptionActive: getStripeSubscriptionActive(firebase),
  }));

  const { uid } = auth;

  useFirebaseConnect(uid && [
    { path: `${USERS}/${uid}` },
  ]);

  useEffect(() => {
    if (isFriend) {
      dispatch(setAccountIsSubscribed(true));
    }
  }, [isFriend]);

  useEffect(() => {
    if (stripeSubscriptionActive) {
      dispatch(setAccountIsSubscribed(true));
    } else if (stripeSubscriptionActive === false) {
      dispatch(setAccountIsSubscribed(false));
    }
  }, [stripeSubscriptionActive]);

  return <>{props.children}</>;
};

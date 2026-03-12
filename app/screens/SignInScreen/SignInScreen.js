import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useFirebase } from "react-redux-firebase";
import googleLogo from "../../assets/images/google-logo.png";
import appleLogo from "../../assets/images/apple-logo.svg";
import Button from "../../common/components/Button/Button";
import Screen from "../../common/components/Screen/Screen";
import { logSignInStarted } from "../../common/consts/analytics";
import { SIGN_UP_SCREEN } from "../../common/consts/routes";
import "./SignInScreen.scss";
import isIOS from "../../util/platform/isIOS";

export default function SignInScreen(props) {
  const {
    history,
    signInWithGoogle,
    setupNewAccount,
    signInWithApple
  } = props;

  const auth = useSelector(state => state.firebase.auth);
  const firebase = useFirebase();

  useEffect(() => {
    if (!auth.isEmpty && auth.isLoaded) {
      // this weird function instantiation is due to hooks
      const setupNewAccountIfNeededAndRouteToHome = async () => {
        await setupNewAccount(firebase, auth);
        history.push("/home");
      };

      setupNewAccountIfNeededAndRouteToHome();
    }
  }, [auth]);

  return (
    <Screen className="sign-in-screen">
      <div className="header-container">
        <h1>Sign in</h1>
      </div>
      <div className="buttons-container">
        <Button
          text="Sign in with Google"
          icon={<img width="22px" height="auto" src={googleLogo} alt="" />}
          onClick={() => { logSignInStarted("google"); signInWithGoogle(firebase); }}
        />
        {
          isIOS() &&
          <Button
            text="Sign in with Apple"
            icon={<img width="19px" height="auto" src={appleLogo} alt="" />}
            onClick={() => { logSignInStarted("apple"); signInWithApple(firebase); }}
          />
        }
        {/* <Button
          text="Sign in with Facebook"
          icon={<img width="15px" height="auto" src={facebookLogo} alt="" />}
        /> */}
      </div>
      <div className="copy-container">
        <p>Don’t have an account? <span onClick={() => history.push(SIGN_UP_SCREEN)}>SIGN UP</span></p>
      </div>
    </Screen>
  );
}

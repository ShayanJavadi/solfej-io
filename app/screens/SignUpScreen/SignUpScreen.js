import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useFirebase } from "react-redux-firebase";
import appleLogo from "../../assets/images/apple-logo.svg";
import facebookLogo from "../../assets/images/facebook-logo.svg";
import googleLogo from "../../assets/images/google-logo.png";
import Button from "../../common/components/Button/Button";
import Screen from "../../common/components/Screen/Screen";
import { primary } from "../../common/consts/colors";
import { SIGN_IN_SCREEN } from "../../common/consts/routes";
import useSetNotchColor from "../../common/hooks/useSetNotchColor";
import isIOS from "../../util/platform/isIOS";
import isMobile from "../../util/platform/isMobile";
import "./SignUpScreen.scss";

export default function SignInScreen(props) {
  const {
    history,
    signInWithGoogle,
    signInWithApple,
    setupNewAccount,
  } = props;

  const auth = useSelector(state => state.firebase.auth);
  const firebase = useFirebase();

  useSetNotchColor(primary);
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
    <Screen className="sign-up-screen">
      <div className="header-container">
        <h1>Sign Up</h1>
      </div>
      <div className="buttons-container">
        <Button
          text="Sign up with Google"
          icon={<img width="22px" height="auto" src={googleLogo} alt="" />}
          onClick={() => signInWithGoogle(firebase)}
        />
        {
          isIOS() &&
          <Button
            text="Sign up with Apple"
            icon={<img width="19px" height="auto" src={appleLogo} alt="" />}
            onClick={() => signInWithApple(firebase)}
          />
        }
      </div>
      <div className="copy-container">
        <p>Have an account? <span onClick={() => history.push(SIGN_IN_SCREEN)}>SIGN IN</span></p>
      </div>
    </Screen>
  );
}

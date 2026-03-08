
import React from "react";
import "./GetStartedScreen.scss";
import logoWithText from "../../assets/images/logo-text.png";
import copyImage from "../../assets/images/get-started-image.png";
import Button from "../../common/components/Button/Button";
import Screen from "../../common/components/Screen/Screen";
import { SIGN_UP_SCREEN, SIGN_IN_SCREEN } from "../../common/consts/routes";

export default function GetStartedScreen(props) {
  return (
    <Screen className="get-started-screen">
      <div className="logo-container flex-center">
        <img src={logoWithText} alt="" />
      </div>
      <div className="copy-container flex-center flex-vertical">
        <div className="image-container">
          <img src={copyImage} alt="" />
        </div>
        <div className="copy">
          <p>Master music theory.</p>
          <p>Train your ears.</p>
        </div>
      </div>
      <div className="buttons-container">
        <Button
          text="Tap To Get Started"
          isTextCentered
          isSuccess
          onClick={() => props.history.push(SIGN_UP_SCREEN)}
        />
        <Button
          text="I Already Have An Account"
          isTextCentered
          isGhost
          onClick={() => props.history.push(SIGN_IN_SCREEN)}
        />
      </div>
    </Screen>
  );
}

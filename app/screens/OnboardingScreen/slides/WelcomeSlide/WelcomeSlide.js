
import React from "react";
import { useSelector } from "react-redux";
import GuitarConfetti from "../../../../assets/images/guitar-confetti.png";
import "./WelcomeSlide.scss";
import HeaderText from "../../../../common/components/HeaderText/HeaderText";
import Paragraph from "../../../../common/components/Paragraph";
import Button from "../../../../common/components/Button/Button";
import { useFirebase } from "react-redux-firebase";
import setOnboardingSlidesDone from "../../../../store/firebase/setOnboardingSlidesDone";
import { logOnboardingStarted, logOnboardingStepCompleted } from "../../../../common/consts/analytics";

export default function WelcomeSlide(props) {
  const { index, onNextSlideClick } = props;
  const firebase = useFirebase();

  const { auth, } = useSelector(state => ({
    auth: state.firebase.auth,
  }));

  const { uid } = auth || {};

  return (
    <>
      <div className="slide-container">
        <div className="welcome-slide">
          <div className="image-container">
            <img src={GuitarConfetti} alt="" />
          </div>
          <div className="text-container">
            <HeaderText>
              Welcome to Solfej 👋
            </HeaderText>
            <Paragraph>
              Solfej is your guide to reaching your musical goals
            </Paragraph>
          </div>
        </div>
      </div>
      <div className="buttons-container">
        <Button
          onClick={() => {
            logOnboardingStarted();
            logOnboardingStepCompleted("welcome", 0);
            onNextSlideClick(index + 1);
            setOnboardingSlidesDone(firebase, uid, { [index]: true });
          }}
          isTextCentered
          isPrimary
          text="Next"
        />
      </div>
    </>
  );
}

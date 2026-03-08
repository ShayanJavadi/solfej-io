
import classNames from "classnames";
import React, { useState, useEffect } from "react";
import Screen from "../../common/components/Screen/Screen";
import "./OnboardingScreen.scss";
import IAmASlide from "./slides/IAmASlide";
import IWantToSlide from "./slides/IWantToSlide";
import MusicianLevelSlide from "./slides/MusicianLevelSlide";
import ReminderSlide from "./slides/ReminderSlide";
import WelcomeSlide from "./slides/WelcomeSlide";
import { useFirebase } from "react-redux-firebase";
import { SCREEN_VIEW } from "../../common/consts/analytics";
import { ONBOARDING_SCREEN } from "../../common/consts/routes";

const slides = [
  {
    component: WelcomeSlide,
    buttonProps: {
      isPrimary: true,
      text: "Next",
      isDisabled: false
    }
  },
  {
    component: MusicianLevelSlide,
    buttonProps: {
      isYellow: true,
      text: "Next",
      isDisabled: false
    }
  },
  {
    component: IAmASlide,
    buttonProps: {
      isSuccess: true,
      text: "Next",
      isDisabled: false
    }
  },
  {
    component: IWantToSlide,
    buttonProps: {
      isAccent: true,
      text: "Next",
      isDisabled: false
    }
  },
  {
    component: ReminderSlide,
    buttonProps: {
      isPrimary: true,
      text: "Start Learning",
      isDisabled: false
    }
  },
];

export default function OnboardingScreen(props) {
  const [index, setIndex] = useState(0);
  const { component: SlideComponent, buttonProps } = slides[index];
  const [isButtonDisabled, setIsButtonDisabled] = useState(buttonProps.isDisabled);
  const firebase = useFirebase();

  return (
    <Screen className={classNames("onboarding-screen", index === 4 && "two-buttons")}>
      <SlideComponent 
        index={index}
        onNextSlideClick={index => setIndex(index)}
        history={props.history}
      />
    </Screen>
  );
}

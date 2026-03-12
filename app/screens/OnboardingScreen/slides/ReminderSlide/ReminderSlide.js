
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFirebase } from "react-redux-firebase";
import Reminde from "../../../../assets/images/push-notifications.png";
import Button from "../../../../common/components/Button/Button";
import HeaderText from "../../../../common/components/HeaderText/HeaderText";
import Paragraph from "../../../../common/components/Paragraph";
import { setAccountIsOnboarded } from "../../../../store/account/actions";
import setOnboardingSlidesDone from "../../../../store/firebase/setOnboardingSlidesDone";
import setUserIsOnboarded from "../../../../store/firebase/setUserIsOnboarded";
import "./ReminderSlide.scss";
import { HOME_SCREEN, SUBSCRIPTION_CAROUSEL_SCREEN } from "../../../../common/consts/routes";
import { logOnboardingStepCompleted, logOnboardingCompleted } from "../../../../common/consts/analytics";

export default function ReminderSlide(props) {
  const [selected, setSelected] = useState(undefined);
  const { index, onNextSlideClick } = props;
  const firebase = useFirebase();

  const { auth, } = useSelector(state => ({
    auth: state.firebase.auth,
  }));
  const { uid } = auth || {};

  const dispatch = useDispatch();
  const goToNextPage = () => {
    logOnboardingStepCompleted("reminder", 4);
    logOnboardingCompleted();
    dispatch(setAccountIsOnboarded(true));
    setOnboardingSlidesDone(firebase, uid, { [index]: true });
    setUserIsOnboarded(firebase, uid, true);
    props.history.push(SUBSCRIPTION_CAROUSEL_SCREEN);
  };

  return (
    <>
    <div className="slide-container">
      <div className="reminder-slide">
        <div className="image-container">
          <img src={Reminde} alt="" />
        </div>
        <div className="text-container">
          <HeaderText>
             Perfect Practice Makes Perfect
          </HeaderText>
          <Paragraph>
              Solfej will help you reach your music goals
          </Paragraph>
        </div>
      </div>
      <div className="buttons-container">
        <Button
          onClick={goToNextPage}
          isTextCentered
          isPrimary
          text="Continue"
        />
      </div>
    </div>
    </>
  );
}

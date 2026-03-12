
import React, { useState } from "react";
import { useSelector } from "react-redux";
import classNames from "classnames";
import "./MusicianLevelSlide.scss";
import novice from "../../../../assets/images/novice.png";
import beginner from "../../../../assets/images/beginner.png";
import intermediate from "../../../../assets/images/intermediate.png";
import expert from "../../../../assets/images/expert.png";
import HeaderText from "../../../../common/components/HeaderText/HeaderText";
import Paragraph from "../../../../common/components/Paragraph";
import Button from "../../../../common/components/Button/Button";
import { useFirebase } from "react-redux-firebase";
import setUserMusicianLevel from "../../../../store/firebase/setUserMusicianLevel";
import setOnboardingSlidesDone from "../../../../store/firebase/setOnboardingSlidesDone";
import { logOnboardingStepCompleted } from "../../../../common/consts/analytics";

export const MUSICIAN_LEVELS = [
  "novice",
  "beginner",
  "intermediate",
  "expert"
];

export default function MusicianLevelSlide(props) {
  const [selected, setSelected] = useState(undefined);
  const { index, onNextSlideClick } = props;
  const firebase = useFirebase();

  const { auth, } = useSelector(state => ({
    auth: state.firebase.auth,
  }));
  const { uid } = auth || {};

  return (
    <>
      <div className="slide-container">
        <div className="musician-level-slide">
          <HeaderText>
            Which best describes you as a musician?
          </HeaderText>
          <div className="levels-container">
            <div
              onClick={() => setSelected(0)}
              className={classNames("level", selected === 0 && "selected")}>
              <div className="image-container">
                <img src={novice} alt="" />
              </div>
              <Paragraph>
                Novice
              </Paragraph>
            </div>
            <div
              onClick={() => setSelected(1)}
              className={classNames("level", selected === 1 && "selected")}>
              <div className="image-container">
                <img src={beginner} alt="" />
              </div>
              <Paragraph>
                Beginner
              </Paragraph>
            </div>
            <div
              onClick={() => setSelected(2)}
              className={classNames("level", selected === 2 && "selected")}>
              <div className="image-container">
                <img src={intermediate} alt="" />
              </div>
              <Paragraph>
                Intermediate
              </Paragraph>
            </div>
            <div
              onClick={() => setSelected(3)}
              className={classNames("level", selected === 3 && "selected")}>
              <div className="image-container">
                <img src={expert} alt="" />
              </div>
              <Paragraph>
                Expert
              </Paragraph>
            </div>
          </div>
        </div>
      </div>
      <div className="buttons-container">
        <Button
          onClick={() => {
            if (selected !== undefined) {
              logOnboardingStepCompleted("musician_level", 1);
              setUserMusicianLevel(firebase, uid, selected);
              setOnboardingSlidesDone(firebase, uid, { [index]: true });
              onNextSlideClick(index + 1);
            }
          }}
          isTextCentered
          isYellow
          text="Next"
          isDisabled={selected === undefined}
        />
      </div>
    </>
  );
}

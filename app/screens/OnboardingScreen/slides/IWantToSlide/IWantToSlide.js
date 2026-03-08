
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useFirebase } from "react-redux-firebase";
import Button from "../../../../common/components/Button/Button";
import HeaderText from "../../../../common/components/HeaderText/HeaderText";
import setOnboardingSlidesDone from "../../../../store/firebase/setOnboardingSlidesDone";
import setUserWantsTo from "../../../../store/firebase/setUserWantsTo";
import "./IWantToSlide.scss";

const IAmAChoices = [
  {
    name: "Become a better musician",
    id: "better-musician",
    isSelected: false,
  },
  {
    name: "Improve my musical ear",
    id: "improve-ear",
    isSelected: false,
  },
  {
    name: "Improve my rhythm",
    id: "improve-rhythm",
    isSelected: false,
  },
  {
    name: "Get better at songwriting",
    id: "improve-songwriting",
    isSelected: false,
  },
  {
    name: "Sing/play in key",
    id: "play-in-key",
    isSelected: false,
  },
  {
    name: "Get better at improvisation",
    id: "improve-improv",
    isSelected: false,
  },
  {
    name: "None of the above",
    id: "none-of-the-above",
    isSelected: false,
  }
];

export default function IWantToSlide(props) {
  const [choices, setChoices] = useState([...IAmAChoices]);
  const { index, onNextSlideClick } = props;
  const firebase = useFirebase();

  const { auth, } = useSelector(state => ({
    auth: state.firebase.auth,
  }));
  const { uid } = auth || {};
  const hasChoicesSelected = choices.some(choice => choice.isSelected);

  return (
    <>
      <div className="slide-container">
        <div className="i-am-a-slide">
          <div className="text-container">
            <HeaderText
              subtext="(Select all that applies)"
            >
              I want to...
            </HeaderText>
          </div>
          <div className="choices-container">
            <div className="buttons">
              {
                choices.map((choice, index) => (
                  <Button
                    isChoiceButton
                    isSelected={choice.isSelected}
                    text={choice.name}
                    onClick={() => {
                      const newChoices = [...choices];
                      newChoices[index].isSelected = !choice.isSelected;
                      setChoices(newChoices);
                    }}
                  />
                ))
              }
            </div>
          </div>
        </div>
      </div>
      <div className="buttons-container">
        <Button
          onClick={() => {
            if (hasChoicesSelected) {
              const wantsTo = choices.reduce((choicesToUpdate, choice) => ({
                ...choicesToUpdate,
                ...{ [choice.id]: choice.isSelected }
              }), {});

              setUserWantsTo(firebase, uid, wantsTo);
              setOnboardingSlidesDone(firebase, uid, { [index]: true });
              onNextSlideClick(index + 1);
            }
          }}
          isTextCentered
          isSuccess
          text="Next"
          isDisabled={!hasChoicesSelected}
        />
      </div>
    </>
  );
}

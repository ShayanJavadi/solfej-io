
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useFirebase } from "react-redux-firebase";
import Button from "../../../../common/components/Button/Button";
import HeaderText from "../../../../common/components/HeaderText/HeaderText";
import setOnboardingSlidesDone from "../../../../store/firebase/setOnboardingSlidesDone";
import setUserIsA from "../../../../store/firebase/setUserIsA";
import "./IAmASlide.scss";

const IAmAChoices = [
  {
    name: "Guitar Player",
    id: "guitar-player",
    isSelected: false,
  },
  {
    name: "Bass Player",
    id: "bass-player",
    isSelected: false,
  },
  {
    name: "Piano Player",
    id: "piano-player",
    isSelected: false,
  },
  {
    name: "Singer",
    id: "singer-player",
    isSelected: false,
  },
  {
    name: "Producer",
    id: "producer",
    isSelected: false,
  },
  {
    name: "Drummer",
    id: "drummer",
    isSelected: false,
  },
  {
    name: "Music Teacher",
    id: "music-teacher",
    isSelected: false,
  },
  {
    name: "Other",
    id: "other",
    isSelected: false,
  }
];

export default function IAmASlide(props) {
  const [choices, setChoices] = useState([ ...IAmAChoices ]);
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
              I am a...
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
                    key={Math.random()}
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
              const isA = choices.reduce((choicesToUpdate, choice) => ({ 
                ...choicesToUpdate,
                ...{ [choice.id]: choice.isSelected }
              }), {});

              setUserIsA(firebase, uid, isA);
              setOnboardingSlidesDone(firebase, uid, { [index]: true });
              onNextSlideClick(index + 1);
            }
          }}
          isTextCentered
          isAccent
          text="Next"
          isDisabled={!hasChoicesSelected}
        />
      </div>
    </>
  );
}

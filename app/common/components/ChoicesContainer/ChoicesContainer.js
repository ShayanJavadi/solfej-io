import React from "react";
import classNames from "classnames";
import "./ChoicesContainer.scss";
import ChoiceCard from "../ChoiceCard";

export default function ChoicesContainer(props) {
  const {
    choices = [],
    correctChoice,
    onChoiceClick,
    disabled,
    isRhythmChoices,
    noRightOrWrong
  } = props;
  const classes = classNames(
    "choices-container",
    choices.length === 2 && "two-choices",
    choices.length === 4 && "four-choices",
    choices.length === 5 && "five-choices",
    choices.length === 3 && "three-choices",
    choices.length === 8 && "eight-choices",
    choices.length === 6 && "six-choices",
    choices.length > 12 && "more-than-12-choices",
    isRhythmChoices && "rhythm"
  );
  return (
    <div className={classes}>
      {choices.map(choice => {
        const isCorrectChoice = choice === correctChoice;
        
        return (
          <ChoiceCard
            choice={choice}
            key={choice}
            isCorrect={!noRightOrWrong && isCorrectChoice}
            isWrong={!noRightOrWrong && !isCorrectChoice}
            disabled={disabled}
            onClick={clickedChoice => !disabled && onChoiceClick(clickedChoice)}
          />
        );
      })}
    </div>
  );
}

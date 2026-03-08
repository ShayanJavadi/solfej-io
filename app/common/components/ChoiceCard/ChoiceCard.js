import classNames from "classnames";
import React from "react";
import "./ChoiceCard.scss";

const WRONG_GUESS_CLASS = "wrong";
const CORRECT_GUESS_CLASS = "correct";
const DISABLED_CLASS = "disabled";

export default function ChoiceCard(props) {
  const {
    choice, onClick, className, isCorrect, isWrong, disabled 
  } = props;
  const classes = classNames(
    "choice-card",
    isCorrect && !disabled && CORRECT_GUESS_CLASS,
    isWrong && !disabled && WRONG_GUESS_CLASS,
    disabled && DISABLED_CLASS,
    className
  );

  return (
    <div onClick={() => onClick(choice)} className={classes}> 
      <p>{choice}</p>
    </div>
  );
}


import React from "react";
import "./LessonFinishButtons.scss";
import Button from "../Button/Button";

export default function LessonFinishButtons(props) {
  const { onReplayClick = () => null, onContinueClick = () => null, disableReplay } = props;

  return (
    <div className="lesson-finish-buttons notes-container">
      {
        !disableReplay &&
        <Button
          text="Play Again"
          isTextCentered
          onClick={onReplayClick}
        />
      }
      <Button
        text="Continue"
        isTextCentered
        isSuccess
        onClick={onContinueClick}
        className="success-button"
      />
    </div>
  );
}

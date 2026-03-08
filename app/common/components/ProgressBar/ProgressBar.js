import React from "react";
import classNames from "classnames";
import "./ProgressBar.scss";
import {
  green, yellow, purple, red, orange 
} from "../../consts/colors";

const renderProgressFill = (props) => {
  const { percentageFilled, isSmall, isOnlyGreen } = props;
  let background = orange;

  if (percentageFilled > 10) {
    background = yellow;
  }

  if (percentageFilled > 40) {
    background = green;
  }

  // const background = green;

  return (
    <div
      className="filler"
      style={{
        width: `${percentageFilled}%`,
        background: isSmall || isOnlyGreen ?
          "#00D9CD" :
          background
      }}
    />
  );
};

export default function ProgressBar(props) {
  const { isSmall } = props;
  const classes = classNames(
    "progress-bar",
    isSmall && "small",
  );

  return (
    <div className={classes}>
      {renderProgressFill(props)}
    </div>
  );
}

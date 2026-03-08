
import React from "react";
import classNames from "classnames";
import "./Streak.scss";

export default function Streak(props = {}) {
  const { streaks = {}, onClick } = props;
  const { currentStreak = 0 } = streaks || {};

  const classes = classNames("streak", currentStreak < 1 && "gray-scale" );
  return (
    <div className={classes} onClick={onClick}>
      🔥 {currentStreak}
    </div>
  );
}

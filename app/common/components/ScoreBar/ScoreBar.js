import React from "react";
import "./ScoreBar.scss";

export default function ScoreBar({ correct, total }) {
  return (
    <div className="score-bar">
      <span className="score-text">
        {`${correct}/${total}`}
      </span>
    </div>
  );
}

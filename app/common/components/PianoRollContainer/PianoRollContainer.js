
import React from "react";
import "./PianoRollContainer.scss";
import PianoRoll from "../PianoRoll/PianoRoll";

export default function PianoRollContainer(props) {
  return (
    <div className="piano-roll-container">
      <PianoRoll
        {...props}
      />
    </div>
  );
}

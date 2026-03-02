
import React from "react";
import "./PianoRollContainer.scss";
import PianoRoll from "../PianoRoll/PianoRoll";

export default function PianoRollContainer(props) {
  return (
    <div className="piano-roll-container">
      <PianoRoll
        {...props}
      />
      {props.onKeyClick && (
        <sub className="piano-roll-hint">💡 Tap the keys to hear each note</sub>
      )}
    </div>
  );
}

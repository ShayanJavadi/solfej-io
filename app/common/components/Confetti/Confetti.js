
import React from "react";
import ConfettiLib from "react-dom-confetti";
import {
  accentOne, accentTwo, green, primary, yellow 
} from "../../consts/colors";
import "./Confetti.scss";

export default function Confetti({ active }) {
  
  return (
    <div style={{ display: "flex", alignSelf: "center" }}>
      <ConfettiLib
        active={active}
        config={{
          stagger: 4,
          elementCount: 50,
          startVelocity: 50,
          colors: [yellow, green, primary, accentOne, accentTwo]
        }}
      />
    </div>
  );
}

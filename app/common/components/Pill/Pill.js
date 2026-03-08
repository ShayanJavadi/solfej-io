import React from "react";
import "./Pill.scss";
import { primary } from "../../consts/colors";

export default function Pill(props) {
  const { text, onClick, color = primary } = props;

  return (
    <div onClick={onClick} className="pill" style={{ background: color }}>
      <p>{text}</p>
    </div>
  );
}

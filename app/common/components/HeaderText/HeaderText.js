
import React from "react";
import "./HeaderText.scss";
import Paragraph from "../Paragraph";

export default function HeaderText(props) {
  return (
    <div className="header-text">
      <h1>{props.children}</h1>
      {
        props.subtext && 
        <Paragraph>
          {props.subtext}
        </Paragraph>
      }
    </div>
  );
}

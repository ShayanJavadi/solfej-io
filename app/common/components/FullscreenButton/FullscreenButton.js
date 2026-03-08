import React from "react";
import className from "classnames";
import "./FullscreenButton.scss";

export default function FullscreenButton(props) {
  const {
    text, onClick, children, hasReverseBackground 
  } = props;
  const classes = className("fullscreen-button", hasReverseBackground && "reverse-background");

  return (
    <div className={classes} onClick={onClick}>
      {
        children ?
          children : 
          <h1>{text}</h1>
      }
    </div>
  );
}

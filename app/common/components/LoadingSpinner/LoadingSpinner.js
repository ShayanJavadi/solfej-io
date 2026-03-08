import React from "react";
import classNames from "classnames";
import "./LoadingSpinner.scss";
// from https://loading.io/css/
export default function LoadingSpinner({ isWhite }) {
  const classes = classNames("loading-spinner", isWhite && "white");
  return (
    <div className={classes}><div></div><div></div><div></div><div></div></div>
  );
}

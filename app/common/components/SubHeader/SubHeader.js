
import React from "react";
import classNames from "classnames";
import "./SubHeader.scss";

export default function SubHeader(props) {
  const { addBottomPadding } = props;
  const classes = classNames("sub-header", addBottomPadding && "padding");
  return (
    <div className={classes}>
      <h2>{props.children}</h2>
    </div>
  );
}

import React from "react";
import classNames from "classnames";

import "./Dot.scss";

export default function Dot(props) {
  const {
    isEmpty, isDisabled, className, backgroundColor 
  } = props;
  const classes = classNames(
    "dot",
    isDisabled && "gray",
    className
  );

  return (
    <div className={classes} style={{ backgroundColor }}>
      {
        isEmpty && <div className="empty" />
      }
      {props.children}
    </div>
  );
}

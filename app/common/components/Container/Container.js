
import React from "react";
import classNames from "classnames";
import "./Container.scss";

export default function Container({ className, children }) {
  const classes = classNames("container", className);
  
  return (
    <div className={classes}>
      {children}
    </div>
  );
}

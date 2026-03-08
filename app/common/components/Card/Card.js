
import React from "react";
import classNames from "classnames";
import "./Card.scss";

export default function Card({ children, className, ...rest }) {
  const classes = classNames("card", className);

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
}

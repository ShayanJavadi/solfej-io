
import React from "react";
import classNames from "classnames";
import "./BottomFloatingMenu.scss";

export default function BottomFloatingMenu(props) {
  const classes = classNames(
    "bottom-floating-menu",
    props.className
  );

  return (
    <div className={classes}>
      {props.children}
    </div>
  );
}

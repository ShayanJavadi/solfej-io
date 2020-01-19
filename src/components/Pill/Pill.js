
import React from 'react';
import classNames from "classnames";
import "./Pill.scss";

export default function Pill(props) {
    const { onClick, text, active } = props;
    const classes = classNames(
        "pill",
        "flex-centered",
        active && "active"
    )
  return (
    <div className={classes} onClick={onClick}>
        <p>{text}</p>
    </div>
  )
}

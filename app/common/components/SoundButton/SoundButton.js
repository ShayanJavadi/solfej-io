import React from "react";
import classNames from "classnames";
import "./SoundButton.scss";

export default function SoundButton(props) {
  const { 
    name,
    onClick,
    className,
    hasWhiteText,
    isTextHidden,
    hasSecondaryBackgroundColor,
    size,
    isActive,
    isLongText,
    isLong,
    isText
  } = props;
  const classes = classNames(
    "note-button",
    hasWhiteText && "white-text",
    hasSecondaryBackgroundColor && "secondary-background-color",
    isActive && "active",
    isLongText && "small-font",
    isLong && "long",
    isText && "is-text",
    className
  );

  const style = !isLong ? {
    width: size, height: size
  } : {};

  return (
    <div 
      className={classes}
      onClick={onClick}
      style={style}
    >
      <span>{isTextHidden ? "?" : name}</span>
    </div>
  );
}

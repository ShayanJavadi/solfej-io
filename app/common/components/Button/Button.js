import React from "react";
import classNames from "classnames";
import "./Button.scss";

export default function Button(props) {
  const {
    text,
    onClick,
    icon,
    className,
    isGhost,
    isSuccess,
    isDanger,
    isTextCentered,
    isDisabled,
    isAccent,
    isPrimary,
    isYellow,
    isChoiceButton,
    isSelected,
    isRed,
    style,
    type,
    noBackgroundShadow,
    isFixed
  } = props;
  const classes = classNames(
    "button",
    className,
    isGhost && "ghost",
    isSuccess && "success",
    isTextCentered && "text-centered",
    isDisabled && "disabled",
    isDanger && "danger",
    isAccent && "accent",
    isPrimary && "primary",
    isYellow && "yellow",
    isChoiceButton && "choice-button",
    isSelected && isChoiceButton && "selected",
    isFixed && "is-fixed",
    isRed && "is-red",
    noBackgroundShadow && "no-background-shadow"
  );

  const ButtonTag = type ? "button" : "div";

  return (
    <ButtonTag className={classes} onClick={onClick} style={style} type={type}>
      {
        icon &&
        <div className="icon-container">
          {icon}
        </div>
      }
      <div className="text-container">
        <p>{text}</p>
      </div>
    </ButtonTag>
  );
}

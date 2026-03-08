import React, { useEffect } from "react";
import classNames from "classnames";
import "./Screen.scss";
import { blueGray } from "../../consts/colors";
import { useSelector } from "react-redux";

export default function Screen(props) {
  const { currentLocation } = useSelector(({ navigation }) => ({ currentLocation: navigation.currentLocation }));
  const {
    children, className, hasGrayBackground, addBottomNotchPadding, isModal, addBottomPadding 
  } = props;
  const classes = classNames("screen", className, addBottomNotchPadding && "notch-padding", isModal && "is-modal", addBottomPadding && "bottom-padding");
  const styles = { background: hasGrayBackground && blueGray };

  return (
    <div className={classes} style={styles}>
      {children}
    </div>
  );
}

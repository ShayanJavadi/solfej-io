import React from "react";
import "./LoadingScreen.scss";
import useSetNotchColor from "../../hooks/useSetNotchColor";
import { primary } from "../../consts/colors";

export default function LoadingScreen(props) {
  useSetNotchColor(primary);
  return (
    <div className="loading-screen">
      {props.children ? props.children : "testing"}
    </div>
  );
}

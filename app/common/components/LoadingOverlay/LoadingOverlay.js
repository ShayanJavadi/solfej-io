import React, { useEffect } from "react";
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import "./LoadingOverlay.scss";
import isIOS from "../../../util/platform/isIOS";

export default function LoadingOverlay({ isVisible }) {
  useEffect(() => {
    // TODO: 
    // enableBodyScroll unsuccessful - targetElement must be provided when 
    // calling enableBodyScroll on IOS devices.
    if (!isIOS()) {
      if (isVisible) {
        disableBodyScroll();
      } else {
        enableBodyScroll();
      }
    }
    
    return () => {
      clearAllBodyScrollLocks();
    };
  }, [isVisible]);

  return (
    isVisible ?
      <div className="loading-overlay">
        <LoadingSpinner isWhite />
      </div> :
      null
  );
}

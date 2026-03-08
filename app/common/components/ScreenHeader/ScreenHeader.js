import classNames from "classnames";
import React, { useEffect } from "react";
import { MdClose } from "react-icons/md";
import "./ScreenHeader.scss";
import useSetNotchColor from "../../hooks/useSetNotchColor";

export default function ScreenHeader(props) {
  const {
    title, subText, backgroundColor, hasWhiteText, className,
    onClose
  } = props;
  const classes = classNames(
    "screen-header",
    className,
    hasWhiteText && "white-text"
  );

  const styles = {
    background: backgroundColor || "#fff",
  };

  useSetNotchColor(backgroundColor);
  
  return (
    <div className="screen-header-container">
      <div className={classes} style={styles}>
        {
          onClose && 
          <div onClick={onClose} className="close-button-container">
            <MdClose
              size={28}
              color="#fff"
            />
          </div>
        }
        <div className="copy-container">
        
          <h1>{title}</h1>
          <h4>{subText}</h4>
        </div>
      </div>
    </div>
  );
}

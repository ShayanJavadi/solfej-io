import React, { useRef, useEffect } from "react";
import classNames from "classnames";
import Popover from "react-tiny-popover";
import "./Header.scss";
import { MdArrowBack, MdSettings, MdLightbulbOutline } from "react-icons/md";
import { IoMdInformation } from "react-icons/io";
import { yellow } from "../../consts/colors";
import isAndroid from "../../../util/platform/isAndroid";
import LessonHeaderIcons from "../LessonHeaderIcons";

export default function Header(props) {
  const { 
    headerLeftNode,
    headerRightNode,
    headerMiddleNode,
    className,
    hasBackButton,
    onBackButtonPress,
    hasMenu,
    onSettingsPress,
    onHelpPress,
    menuHasInformationButton,
    showSettings,
    showHints,
    highlightHints,
    onHintButtonPress,
    isFixed,
    onClickOutside = () => null,
    isDropDown,
    children,
    isDailyLesson,
    isCustomLesson,
    isMenuDisabled,
    activeCustomLessonId
  } = props;
  const searchWrapperRef = useRef(null);

  const handleClickOutside = event => {
    if (searchWrapperRef.current && !searchWrapperRef.current.contains(event.target)) {
      onClickOutside();
    }
  };

  useEffect(() => {
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const classes = classNames(
    "header",
    isFixed && "is-fixed",
    isDropDown && "drop-down-header",
    classNames,
    className
  );

  if (isDropDown) {
    return (
      <div className={classes} ref={searchWrapperRef}>
        {children}
      </div>
    );
  }

  return (
    <div className={classes} ref={searchWrapperRef} style={{ paddingTop: isAndroid() && "15px" }}>
      <div className="header-left">
        {
          hasBackButton ?
            <MdArrowBack
              size={24}
              color="#c6c6c6"
              onClick={onBackButtonPress}
            /> :
            headerLeftNode
        }
      </div>
      <div className="header-middle">
        {
          headerMiddleNode &&
          <div className="header-middle">
            {headerMiddleNode}
          </div>
        }
      </div>
      <div className="header-right" style={{ flex: headerMiddleNode ? 1 : 5 }}>
        {
          hasMenu ?
            <LessonHeaderIcons
              showSettings={showSettings}
              showHints={showHints}
              highlightHints={highlightHints}
              onHintButtonPress={onHintButtonPress}
              isDailyLesson={isDailyLesson}
              isCustomLesson={isCustomLesson}
              activeCustomLessonId={activeCustomLessonId}
              isDisabled={isMenuDisabled}
            /> : 
            headerRightNode
        }
      </div>
    </div>
  );
}

import React from "react";
import classNames from "classnames";
import "./SectionHeader.scss";

export default function SectionHeader(props) {
  const { text, isSubHeader, subText } = props;
  const TextElement = isSubHeader ? "h3" : "h1";
  const classes = classNames("section-header", isSubHeader && "sub");

  return (
    <div className={classes}>
      <TextElement>
        {text || props.children}
      </TextElement>
      {
        subText &&
        <h3 className="subtext">{subText}</h3>
      }
    </div>
  );
}

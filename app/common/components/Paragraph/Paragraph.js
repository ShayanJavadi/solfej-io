
import React from "react";
import classNames from "classnames";
import "./Paragraph.scss";

export default function Paragraph(props) {
  const {
    isCentered, spaceBetween, flexCentered, onClick, noMargin, opaque, isLink
  } = props;
  const classes = classNames("paragraph", isCentered && "centered", spaceBetween && "space-between", flexCentered && "flex-centered", noMargin && "no-margin", opaque && "opaque", isLink && "link");

  return (
    <div className={classes} onClick={onClick}>
      <p>{props.children}</p>
    </div>
  );
}

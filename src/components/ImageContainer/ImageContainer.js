
import React from 'react';
import classNames from "classnames";
import "./ImageContainer.scss";



export default function ImageContainer(props) {
    const classes = classNames("image-container-common", props.two && "two")
  return (
    <div className={classes} >
        {props.children}
    </div>
  )
}

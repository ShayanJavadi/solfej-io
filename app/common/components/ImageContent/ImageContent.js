
import React from "react";
import "./ImageContent.scss";

export default function ImageContent(props) {
  const { src } = props;
  
  return (
    <div className="image-content">
      <img src={src} alt="" />
    </div>
  );
}

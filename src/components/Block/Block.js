
import React from "react";
import "./Block.scss";

export default function Block(props) {
  return (
    <div className="block-container">
      <div className="block">
        {props.children}
      </div>
    </div>

  );
}

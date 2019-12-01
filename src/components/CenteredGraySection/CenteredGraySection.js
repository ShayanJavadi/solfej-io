
import React from 'react';
import "./CenteredGraySection.scss";

export default function CenteredGraySection(props) {
  return (
    <div className="centered-gray-section">
        {props.children}
    </div>
  )
}

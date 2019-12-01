
import React from 'react';
import "./Section.scss";

export default function Section(props) {
    const { title } = props;

  return (
    <div className="section">
        {
            title && 
            <div>
                <h2>
                    {title}
                </h2>
            </div>
        }
        {props.children}
    </div>
  )
}

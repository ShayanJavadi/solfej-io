
import React from 'react';
import "./Section.scss";

export default function Section(props) {
    const { title, h1Header } = props;

  return (
    <div className="section">
        {
            title && 
            <div>
                {
                    h1Header ?
                        <h1>
                            {title}
                        </h1> :
                        <h2>
                            {title}
                        </h2>
                }
                
            </div>
        }
        {props.children}
    </div>
  )
}

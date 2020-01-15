
import React from 'react';
import "./MdHeader.scss";

export default function MdHeader(props) {
  return (
    <>
        <h1 className="md-header-h1">
            {props.children}
        </h1>
        {
            props.subText &&
              <h3 className="md-header-h3">
                  {props.subText}
              </h3>
        }
       
    </>
  )
}

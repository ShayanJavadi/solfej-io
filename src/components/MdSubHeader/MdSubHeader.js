
import React from 'react';
import classNames from "classnames";
import "./MdSubHeader.scss";

export default function MdSubHeader(props) {
    const { children, subText, className } = props
    const classes = classNames("md-sub-header-h2", className)

    return (
        <>
            <h2 className={classes}>
                {props.children}
            </h2>
            {
                subText &&
                <h3 className="md-sub-header-h3">
                    {subText}
                </h3>
            }
        </>
    )
}


import React from 'react';
import classNames from "classnames";
import "./Page.scss";

export default function Page(props) {
    const { className } = props;
    const classes = classNames("page", className);

    return (
        <div className={classes}>
            {props.children}
        </div>
    )
}

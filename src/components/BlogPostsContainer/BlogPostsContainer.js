
import React from 'react';
import classNames from "classnames";
import "./BlogPostsContainer.scss";

export default function BlogPostsContainer(props) {
    const classes = classNames(props.two && "two", "blog-post-container")
  return (
    <div className={classes}>
      {props.children}
    </div>
  )
}

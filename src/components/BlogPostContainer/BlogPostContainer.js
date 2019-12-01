
import React from 'react';
import "./BlogPostContainer.scss";

export default function BlogPostContainer(props) {
  return (
    <div className="blog-post-container">
      {props.children}
    </div>
  )
}

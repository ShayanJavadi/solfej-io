
import React from 'react';
import "./BlogPostsContainer.scss";

export default function BlogPostsContainer(props) {
  return (
    <div className="blog-post-container">
      {props.children}
    </div>
  )
}

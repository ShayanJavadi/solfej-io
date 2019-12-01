
import React from 'react';
import "./BlogPostThumbnail.scss";

export default function BlogPostThumbnail(props) {
    const { image, title, description, authorName, authorImage, date, timeToRead } = props;

  return (
    <div className="blog-post-thumbnail">
      <div className="image-container">
          {props.image}
      </div>
      <div className="copy-container">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="author-container">
        <div className="author-image-container">
        {authorImage}
        </div>
        <div className="details-container">
            <p>{authorName}</p>
            <p>{`${date} - ${timeToRead} read`}</p>
        </div>
      </div>
    </div>
  )
}

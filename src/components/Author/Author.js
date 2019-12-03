
import React from 'react';
import "./Author.scss";

export default function Author(props) {
    const { authorImage, authorName, date, timeToRead } = props;
    
  return (
    <div className="author">
          <div className="author-image-container">
              {authorImage}
          </div>
          <div className="details-container">
              <p>{authorName}</p>
              <p>{`${date} - ${timeToRead} read`}</p>
          </div>
    </div>
  )
}

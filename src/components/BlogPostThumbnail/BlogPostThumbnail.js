
import React from 'react';
import "./BlogPostThumbnail.scss";
import Author from '../../components/Author/index';
import { Link } from "gatsby";

export default function BlogPostThumbnail(props) {
    const { image, title, description, authorName, authorImage, date, timeToRead, route, isUnavailable, hidden } = props;

    return (
        <div className="blog-post-thumbnail" styles={{ visibility: hidden && "none"}}> 
        
        {
                !hidden && isUnavailable ?
            <a href="https://mailchi.mp/a64190eaf494/solfej-newsletter">
                <div className="image-container">
                    {props.image}
                </div>
                <div className="copy-container">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            </a> :
            <Link to={`blog/${route}`}>
                <div className="image-container">
                    {props.image}
                </div>
                <div className="copy-container">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            </Link>
        }
        {
            !isUnavailable && !hidden &&
            <Author
                {...{ authorName, authorImage, date, timeToRead }}
            /> 
        }
    </div>
  )
}

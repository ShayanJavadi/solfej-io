
import React from 'react';
import "./PhotoHero.scss";

export default function PhotoHero(props) {
    
  return (
    <div className="photo-hero">
        <div className="hero-image-container">
           {props.children}
        </div>
    </div>
  )
}

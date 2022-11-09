import React from "react";
import { Link } from "react-router-dom";

export default function GalleryData(props) {
  return (
    <section className="bg-gallery-card">
      <ul>
        <Link to="/pageGalleryAbout">
        <article className="gallery-card">
        <img src={props.cover} alt="image de location" />
        <div className="filter"></div>
        <h2 className="gallery-title">{props.title}</h2>
        </article>
        
      </Link>
      </ul>
      
    </section>
  );
}

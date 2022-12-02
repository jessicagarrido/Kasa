import React from "react";
import { Link } from "react-router-dom";

export default function GalleryData(props) {
  return (
    <section className="bg-gallery-card">
      <Link to={`/pageGalleryAbout/${props.id}`}>
        <article className="gallery-card">
          <img src={props.cover} alt="image de location" />
          <div className="filter"></div>
          <h2 className="gallery-title">{props.title}</h2>
        </article>
      </Link>
    </section>
  );
}

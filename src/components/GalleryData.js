import React from "react";
import { Link } from "react-router-dom";

export default function GalleryData(props) {
  return (
    <section className="bg-gallery-card">
      <Link to="/gallery">
        <div className="gallery-card">
          <img src={props.cover} alt="" />
          <div className="gallery-title">{props.title}</div>
        </div>
      </Link>
    </section>
  );
}

import React, { useState } from "react";
import VectorRight from "../assets/img/VectorRight.svg";
import VectorLeft from "../assets/img/VectorLeft.svg";

export default function Carrousel(props) {
  let [slide, setSlide] = useState(0);

  const onSlide = (moove) => {
    if (moove === 1 && slide + 1 === props.pictures.length) {
      setSlide(0);
    } else if (moove === -1 && slide === 0) {
      setSlide(props.pictures.length - 1);
    } else {
      setSlide(slide + moove);
    }
  };

  return (
    <div className="carrousel-container">
      <div className="carrousel-picture">
        {props.pictures.map(
          (picture, key) => key === slide && <img src={picture} alt="" />
        )}
      </div>
      {props.pictures.length > 1 && (
        <div className="carrousel-navigation">
          <button onClick={() => onSlide(-1)}>
            <img src={VectorLeft} alt="Fleche gauche du slider" />
          </button>
          <button onClick={() => onSlide(1)}>
            <img src={VectorRight} alt="Fleche droite du slider" />
          </button>
        </div>
      )}
      {props.pictures.length > 1 && (
        <div className="carrousel-pagination">
          <span>{slide + 1}</span> / {props.pictures.length}
        </div>
      )}
    </div>
  );
}

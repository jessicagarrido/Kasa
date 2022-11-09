import { useState } from "react";
import VectorOpen from "../assets/img/VectorOpen.svg";
import VectorClose from "../assets/img/VectorClose.svg";
import React from "react";

function Collapse(props) {
  let [toggle, setToggle] = useState(true);

  return (
    <div className="collapse">
      <div className="collapse-title" onClick={() => setToggle(!toggle)}>
        <div className="collapse-title-content">
          <span>{props.title}</span>
        </div>
        <div className="collapse-title-arrow">
          <img
            src={toggle ? VectorOpen : VectorClose}
            alt="fleche permettant d'indiquer que le composant est cliquable"
          />
        </div>
      </div>
      {toggle && (
        <div className="collapse-content">
          <p>{props.children}</p>
        </div>
      )}
    </div>
  );
}

export default Collapse;

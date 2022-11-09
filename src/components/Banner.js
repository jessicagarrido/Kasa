import React from "react";

function Banner(props) {
  return (
    <div className="banner-contener">
      <img src={props.src} alt="Bannière Accueil" />
      {typeof props.content != "undefined" && (
        <div className="center-banner-text">{props.content}</div>
      )}
    </div>
  );
}

export default Banner;

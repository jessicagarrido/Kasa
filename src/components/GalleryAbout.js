import React from "react";


export default function GalleryAbout(props) {
    return(
        <div className="about-contener">
            <div className="carrousel">{props.pictures}</div>
            <div className="card-title">{props.title}</div>
            <div className="card-location">{props.location}</div>
            <div className="card-attribute">
                <div className="card-tags">{props.tags}</div>
            </div>
            <div>
               <div className="card-description">{props.description}</div>
               <div className="card-equipments">{props.equipments}</div> 
            </div>
            
        </div>
        )

}
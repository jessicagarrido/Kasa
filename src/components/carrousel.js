import React, { useState} from "react";
import VectorRight from "../assets/img/VectorRight.svg";
import VectorLeft from "../assets/img/VectorLeft.svg";



export default function Carrousel(props) {
    let [slide, setSlide] = useState(0);
    let length

    return (

        <div className="carrousel-container">
            <div className="carrousel" style={{backgroundImage: `url${props.pictures}`}}>
               <img src="" alt="" /> 
            </div>
            <div className="left" onClick={() => {
                slide > 0 && setSlide(slide - 1);
            }}>
                <VectorLeft />
            </div>
            <div className="right" onClick={() => {
                slide <  -1 && setSlide(slide +1);
            }}>
                <VectorRight />

            </div>
            

        </div>
    )

}
import React from "react";
import './FillerImage.css';

function FillerImage(props) {

    return <div style={props.style}>
    {/* <img src={props.src} className="image-property image-type" alt={props.alt} /> */}
    <h2 style={{fontSize : "150px", margin : "0"}}>{props.head}<sub>{props.hs}</sub></h2>
    <h3 style={{fontSize : "100px", margin : "0 auto"}}>{props.val}</h3>
    </div>
}

export default FillerImage;
import React from "react";
import './ImageProcessing.css';


function ImageProcessing(props) {
    // Define inline styles for the image
    const imageStyles = {
        objectFit: 'cover',
        width: props.width || '100%',
        height: 'auto',
        aspectRatio: props.aspectRatio || '4/3', // Use the provided aspect ratio or default to '4/3'

    };

    // Define inline styles for the border
    const borderStyles = {
        border: '2px solid #008080',
        borderRadius: '10px',
    };

    // Combine both sets of styles
    const combinedStyles = { ...imageStyles, ...borderStyles };

    return <img src={props.src} className="image-property image-type" alt={props.alt} style={combinedStyles} />;
}

export default ImageProcessing;
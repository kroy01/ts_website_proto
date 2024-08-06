import React from "react";
import './detailsbox.css';

function DetailsBox(props) {
    return (
        <div className="details-box details-contain details-background">
            <h2 className="detailsbox-heading">{props.detailsheading}</h2>
            <p className="detailsbox-text">{props.detailstext}</p>
        </div>
    );
};

export default DetailsBox;
import React from "react";
import './contactbox.css';

function ContactBox(props){
    return(
        <div className="contactbox-box contactbox-background">
            <h2 className="contactbox-heading">{props.heading}</h2>
            <a className="contactbox-link" href={props.link} rel="noreferrer" target="_blank">{props.linktext}</a>
        </div>
    );
};

export default ContactBox;
import React from "react";
import "./boardMembers.css";


function BoardMember(props) {

    return (
        <div className="memberbox-margin">
            <div className="member-box" href={props.link}><a href={props.link}><span class="clickable"></span></a>
                <div className="member-designationbox">
                    <h2 className="member-heading">{props.heading}</h2>
                </div>

                <img src={props.image} alt={props.alt} className="member-imageproperty" />

                <div className="member-namebox">
                    <h3 className="member-name">{props.name}</h3>
                </div>
            </div>
        </div>
    );
};

export default BoardMember;
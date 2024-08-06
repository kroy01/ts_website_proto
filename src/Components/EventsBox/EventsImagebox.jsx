import React from "react";
import './eventsimagebox.css';
import { HashLink } from 'react-router-hash-link';

function EventsImagebox(props) {
    const eventsid=`/events#contentBox-${props.givepathid}`
    return (<div className="eventsimagebox-margin">
    <div className="eventsimagebox-box eventsimagebox-background">
            <HashLink smooth to={eventsid}>
            <img src={props.image} className="eventsimagebox-image" alt={props.alt}></img>
            </HashLink>
            <div className="eventimagebox-name">
                <h3 className="eventsimage-name">{props.eventname}</h3>
            </div>
        </div>
        </div>
    );
}

export default EventsImagebox;
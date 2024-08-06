import React from "react";
import './eventsbox.css';
import EventsImagebox from "./EventsImagebox";

function EventsBox(props){
    return(
    <div className="events-box events-box-background">
        <h2 className="events-heading">{props.heading}</h2>
        {props.List.map((list,i)=>{
                return(
                    <div className="events-list" key={i} >
                        
                        {list.map((value,index)=>{
                            return(
                                <div className="events-img" key={index}>
                                    <EventsImagebox
                                        image={value.image}
                                        eventsid={value.id}
                                        alt={value.alt}
                                        eventname={value.eventname}
                                        givepathid={value.pathid}
                                    />
                                </div>
                            );
                        })}
                    </div>
                );
            })}
    </div>
    );
}

export default EventsBox;
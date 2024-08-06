import React from "react";
import "./ProjectBox.css";

import ProjectImage from "./ProjectImage";

function ProjectBox(props) {
    return <>
        <div className="project-box project-background">
            <h2 className="projectBox-heading">{props.heading}</h2>
            <ProjectImage
                givepathid={props.pathid}
                src={props.src}
                alt={props.alt}
                class={{ margin: "0 auto;" }}
            />
        </div>
    </>
}

export default ProjectBox;
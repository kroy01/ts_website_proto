import React from "react";
import "./ProjectImage.css";
import { HashLink } from 'react-router-hash-link';

function ProjectImage(props) {
    const projectid = `/projects#contentBox-${props.givepathid}`
    return (<div className="projectImage-boundary">
        <HashLink smooth to={projectid}>
            <img src={props.src} className="project-box-image-property project-box-image-type" alt={props.alt} />
        </HashLink>
    </div>
    );
}

export default ProjectImage;
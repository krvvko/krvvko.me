import React from "react";
import './../ExperienceElement/index.css';

const ExperienceElementTemplate: React.FC = () => {
    return (
        <div className="experience-element">
            <span className="experience-id"></span>
            <span className="experience-name"></span>
            <span className="experience-lang"></span>
            <span className="experience-description"></span>
            <span className="experience-date"></span>
            <span className="experience-level"></span>
        </div>
    )
}

export default ExperienceElementTemplate;
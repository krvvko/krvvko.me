import React from "react";
import './index.css';
import {useServerData} from "../../utils/ServerDataContext";
import {ProjectsData} from "../../utils/interfaces";
import {useNavigate} from "react-router-dom";
import {useAnimation} from "../../utils/AnimationContext";
import {usePreferences} from "../../utils/PreferencesContext";

const MoreProjects = () => {
    const {projects} = useServerData();
    const navigate = useNavigate();
    const { startAnimation, isInProcess } = useAnimation();
    const { reducedMotion } = usePreferences();
    const {translation} = usePreferences();
    const formattedDate = (date: Date) => new Date(date).toLocaleDateString("en-US", {
        year: 'numeric', month: 'long', day: 'numeric'
    });
    const redirect = (to: string, e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        if(!isInProcess) {
            if(reducedMotion) {
                window.scrollTo(0, 0);
            }
            reducedMotion ? navigate(to) : startAnimation(to);
        }
    }

    return (
        <div className="more-projects">
            <span>{translation.project.moreProjects}</span>
            <div className="more-projects-container">
                {projects.map((project: ProjectsData, index: number) => (
                    <button key={index} className="more-project-element" onClick={(e) => redirect(`/project/${project.id}`, e)}>
                        {project.ProjectImages !== null ? (
                            <img src={project.ProjectImages[0]} alt=""
                                 className="more-project-bg-img"/>
                        ) : (
                            <div className="more-project-bg-div"></div>
                        )}
                        <span className="info-bottom">
                            <span className="info-bottom-headline">{project.ProjectName}</span>
                            <span className="info-bottom-date">{formattedDate(project.ProjectCreationDay)}</span>
                        </span>
                    </button>
                ))}
            </div>
        </div>
    )
}

export default MoreProjects;
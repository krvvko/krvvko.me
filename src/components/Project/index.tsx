import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import './index.css';
import MoreProjects from "../MoreProjects";
import {AnimationOnScroll} from "react-animation-on-scroll";
import {ProjectServerData} from "../../utils/interfaces";

const parseArrayString = (arrayString: string) => {
    try {
        return JSON.parse(arrayString.replace(/'/g, '"'));
    } catch (error) {
        console.error("Failed to parse array string:", arrayString, error);
        return null;
    }
};

const Project = () => {
    const {id} = useParams();
    const [projectData, setProjectData] = useState<ProjectServerData | null>(null);

    useEffect(() => {
        axios.get(`http://localhost:4001/api/myProjects/project/${id}`)
            .then((response) => {
                console.log(response.data);
                const modifiedData = {
                    ...response.data,
                    ProjectTechnologies: response.data.ProjectTechnologies ? parseArrayString(response.data.ProjectTechnologies) : null,
                    ProjectImages: response.data.ProjectImages ? parseArrayString(response.data.ProjectImages) : null,
                };
                setProjectData(modifiedData);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);
    return (
        <>
            <div className="project-container">
                <div className="project-container-top">
                    <div className="project-main">
                        <div className="project-main-text">
                            <AnimationOnScroll animateIn="animate__fadeInDown delay-25">
                                <span className="project-main-id">PRJ {projectData?.id}</span>
                            </AnimationOnScroll>
                            <AnimationOnScroll animateIn="animate__fadeInDown">
                                <span className="project-main-name">{projectData?.ProjectName}</span>
                            </AnimationOnScroll>
                            <div className="project-main-techs">
                                {projectData?.ProjectTechnologies && (
                                    <>
                                        {projectData.ProjectTechnologies.map((tech, index) => (
                                            <AnimationOnScroll animateIn={`animate__fadeInUp delay-${30 + (index*5)}`}>
                                                <span key={index} className="project-tech-main">
                                                    {tech}
                                                </span>
                                            </AnimationOnScroll>
                                        ))}
                                    </>
                                )}
                            </div>
                            <AnimationOnScroll animateIn="animate__fadeInDown delay-55">
                                <span className="project-main-short-description">{projectData?.ProjectShortDescription}</span>
                            </AnimationOnScroll>
                        </div>
                        {(projectData?.ProjectUrl || projectData?.ProjectSourceUrl) &&
                            <div className="links-container animate__animated animate__fadeInUp delay-45">
                                {projectData?.ProjectUrl &&
                                    <a className="project-main-link live"
                                       href={projectData?.ProjectUrl}>
                                        <i className="icon web"></i>
                                        <span>View Live</span>
                                    </a>
                                }
                                {projectData?.ProjectSourceUrl &&
                                    <a className="project-main-link gh"
                                       href={projectData?.ProjectSourceUrl}>
                                        <i className="icon github"></i>
                                    </a>
                                }
                            </div>
                        }
                    </div>
                    <div className="project-details">
                        {projectData?.ProjectImages && projectData.ProjectImages.length > 0 && (
                            <AnimationOnScroll offset={20} animateIn="animate__fadeIn">
                                <img className="project-detail-primary-img"
                                     src={projectData.ProjectImages[0]}
                                     alt="Project primary"/>
                            </AnimationOnScroll>
                        )}
                        <AnimationOnScroll offset={20} animateIn="animate__fadeIn">
                            <span className="project-long-description">{projectData?.ProjectLongDescription}</span>
                        </AnimationOnScroll>
                        {projectData?.ProjectImages && projectData.ProjectImages.length > 1 && (
                            <div className="project-additional-images">
                                {projectData.ProjectImages.slice(1).map((url, index) => (
                                    <AnimationOnScroll offset={20} animateIn="animate__fadeIn">
                                        <img key={index} className="project-detail-img"
                                             src={url}
                                             alt={`Project image ${index + 1}`}/>
                                    </AnimationOnScroll>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
                <MoreProjects/>
            </div>
        </>
    )
}

export default Project;
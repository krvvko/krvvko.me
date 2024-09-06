import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import './index.css';
import MoreProjects from "../MoreProjects";
import {AnimationOnScroll} from "react-animation-on-scroll";
import {ProjectServerData} from "../../utils/interfaces";
import {usePreferences} from "../../utils/PreferencesContext";

const Project = () => {
    const {id} = useParams();
    const [projectData, setProjectData] = useState<ProjectServerData | null>(null);
    const {translation, language} = usePreferences();

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/projects/${id}`)
            .then((response): void => {
                const modifiedData = {
                    ...response.data,
                };
                setProjectData(modifiedData);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);

    const projectName = projectData ? projectData[`name_${language}`] : '';
    const shortDescription = projectData ? projectData[`short_description_${language}`] : '';
    const fullDescription = projectData ? projectData[`full_description_${language}`] : '';


    return (
        <>
            <div className="project-container">
                {projectData ? (
                    <div className="project-container-top">
                        <div className="project-main">
                            <div className="project-main-text">
                                <AnimationOnScroll animateIn="animate__fadeInDown delay-25">
                                    <span className="project-main-id">PRJ {projectData?.id}</span>
                                </AnimationOnScroll>
                                <AnimationOnScroll animateIn="animate__fadeInDown">
                                    <span className="project-main-name">{projectName}</span>
                                </AnimationOnScroll>
                                <div className="project-main-techs">
                                    {projectData?.technologies && (
                                        <>
                                            {projectData.technologies.map((tech, index) => (
                                                <AnimationOnScroll key={index} animateIn={`animate__fadeInUp delay-${30 + (index*5)}`}>
                                                        <span className="project-tech-main">
                                                            {tech}
                                                        </span>
                                                </AnimationOnScroll>
                                            ))}
                                        </>
                                    )}
                                </div>
                                <AnimationOnScroll animateIn="animate__fadeInDown delay-55">
                                    <span className="project-main-short-description">{shortDescription}</span>
                                </AnimationOnScroll>
                            </div>
                            {(projectData?.url || projectData?.source) &&
                                <div className="links-container animate__animated animate__fadeInUp delay-45">
                                    {projectData?.url &&
                                        <a target="_blank" rel="noreferrer" className="project-main-link live"
                                           href={projectData?.url}>
                                            <i className="icon web"></i>
                                            <span>{translation.project.liveLink}</span>
                                        </a>
                                    }
                                    {projectData?.source &&
                                        <a target="_blank" rel="noreferrer" className="project-main-link gh"
                                           href={projectData?.source}>
                                            <i className="icon github"></i>
                                        </a>
                                    }
                                </div>
                            }
                        </div>
                        <div className="project-details">
                            {projectData?.images && projectData.images.length > 0 && (
                                <AnimationOnScroll offset={20} animateIn="animate__fadeIn">
                                    <img className="project-detail-primary-img"
                                         src={projectData.images[0]}
                                         alt="Project primary"/>
                                </AnimationOnScroll>
                            )}
                            <AnimationOnScroll offset={20} animateIn="animate__fadeIn">
                                <span className="project-long-description">{fullDescription}</span>
                            </AnimationOnScroll>
                            {projectData?.images && projectData.images.length > 1 && (
                                <div className="project-additional-images">
                                    {projectData.images.slice(1).map((url, index) => (
                                        <AnimationOnScroll key={index} offset={20} animateIn="animate__fadeIn">
                                            <img className="project-detail-img"
                                                 src={url}
                                                 alt={`Project ${index + 1}`}/>
                                        </AnimationOnScroll>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                ) : (
                    <div className="project-container-top skelet">
                        <div className="project-main">
                            <div className="project-main-text skelet">
                                <div className="text skelet-element"></div>
                                <div className="text skelet-element"></div>
                                <div className="text skelet-element"></div>
                                <div className="text skelet-element"></div>
                            </div>
                            <div className="links-container skelet-element"></div>
                        </div>
                        <div className="project-details">
                            <div className="image-detail skelet-element"></div>
                            <div className="text-detail skelet-element"></div>
                        </div>
                    </div>
                )}
                <MoreProjects/>
            </div>
        </>
    )
}

export default Project;
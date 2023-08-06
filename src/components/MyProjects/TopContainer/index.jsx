import React, {useEffect} from "react";
import './index.css';
import links from "../../../links";
import TechStackItem from "./TechStackItem";
import AOS from 'aos';
import WalkingShrimp from "./WalkingShrimp";
// import 'aos/dist/aos.css';

const TopContainer = () => {
    // useEffect(() => {
    //     AOS.init({
    //         duration: 700,
    //     });
    // }, [])
    return (
        <div className="project-top-container">
            <a target="_blank" data-aos="fade-right" data-aos-delay="50" href={links.github} className="project-top-element hover project-github">
                <i className="icon github-logo"></i>
                <span className="github-span headline">My GitHub</span>
            </a>
            <div data-aos="fade-down" data-aos-delay="150" className="project-top-element project-technologies">
                <div className="tech-stack-list">
                    <TechStackItem name="JavaScript" svgName="js" />
                    <TechStackItem name="HTML" svgName="html" />
                    <TechStackItem name="CSS" svgName="css" />
                    <TechStackItem name="Node.js" svgName="nodejs" />
                    <TechStackItem name="React.js" svgName="react" />
                    <TechStackItem name="REST Api" svgName="rest" />
                    <TechStackItem name="PHP" svgName="php" />
                    <TechStackItem name="Laravel" svgName="laravel" />
                </div>
                <span className="technologies-span headline">Technologies Stack</span>
            </div>
            <div className="project-top-element project-addons">
                <div data-aos="fade-down" data-aos-delay="250" className="project-addons-top">
                    <div className="project-addons-element">
                        <span className="headline">Experience</span>
                        <span className="experience-date">3+ Years</span>
                    </div>
                    <div data-aos="fade-left" data-aos-delay="350" className="project-addons-element">
                        <span className="headline">Current State</span>
                        <span className="current-state">Ready For Employment</span>
                    </div>
                </div>
                <div data-aos="fade-left" data-aos-delay="350" className="project-addons-element">
                    <WalkingShrimp />
                </div>
            </div>
        </div>
    )
}

export default TopContainer;
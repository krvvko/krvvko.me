import React from "react";
import './index.css';

const WelcomeText = () => {
    return (
        <div className="welcome-text">
            <div className="welcome-text-top">
                <span className="headline">CD KRVVKO.ME/</span>
                <span className="headline">v. Rhodochrosite</span>
            </div>
            <span className="welcome-text-bottom">
                Hey, I'm krvvko -  a frontend web developer. I live in the MA, USA, but I was born in the Eastern European country Belarus. At the age of 15, I began to engage in programming and design, tried to write my first websites, create first scripts, edit first videos and pictures. Since then, I have improved in the field of design and development, gaining experience, new knowledge and skills.
            </span>
            <div className="welcome-buttons">
                <a href="#projects" className="projects-btn">
                    <span className="btn-text">My projects</span>
                    <div className="btn-layer"></div>
                </a>
                <a href="#contact" className="getintouch-btn">
                    <span className="btn-text">Get in touch</span>
                    <div className="btn-layer"></div>
                </a>
            </div>
        </div>
    )
}

export default WelcomeText;
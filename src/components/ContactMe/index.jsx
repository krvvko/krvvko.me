import React from "react";
import './index.css';
import PurpleWaveBg from "./PurpleWaveBg";
import PackModel from "./PackModel";
import links from "../../links";
const ContactMe = () => {
    return (
        <div className="contact-me-container" id="contact">
            <div className="contact-me-main">
                <div className="contact-me-main-left">
                    <PackModel />
                </div>
                <div className="contact-me-main-right">
                    <div className="contact-me-top">
                        <div className="headline">
                            <span>PACK ME INTO YOUR PROJECT</span>
                            <span>aka Contact Me</span>
                        </div>
                    </div>
                    <span className="welcome-text-bottom">
                        Thinking about creating a website? Or are you looking for new Frontend Developer to your company? So, what are you waiting for? get in touch with me
                    </span>
                    <div className="footer-btn-container">
                        <a target="_blank" rel="noreferrer" href={links.github} className="projects-btn">
                            <span className="btn-text">GitHub</span>
                            <div className="btn-layer"></div>
                        </a>
                        <a target="_blank" rel="noreferrer" href={links.telegram} className="projects-btn">
                            <span className="btn-text">Telegram</span>
                            <div className="btn-layer"></div>
                        </a>
                        <a target="_blank" rel="noreferrer" href={links.email} className="projects-btn">
                            <span className="btn-text">Email</span>
                            <div className="btn-layer"></div>
                        </a>
                    </div>
                </div>
            </div>
            <footer>
                <div className="footer-element">
                    <span>©krvvko 2019 - Present</span>
                </div>
                <div className="footer-element">
                    <span>Web version - <span className="footer-red">Rhodochrosite</span></span>
                </div>
            </footer>
            <PurpleWaveBg />
        </div>
    )
}

export default ContactMe;
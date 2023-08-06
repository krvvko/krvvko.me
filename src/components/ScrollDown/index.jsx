import React, { useState, useEffect } from "react";
import './index.css';

const ScrollDown = () => {
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        setScrolled(window.scrollY > 0);
    };

    const scrollToProjects = () => {
        const projectsElement = document.getElementById("projects");
        if (projectsElement) {
            projectsElement.scrollIntoView({ behavior: "smooth" });
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return(
        <div className={`scroll-down-container ${scrolled ? "not-visible" : ""}`}>
            <div className="scroll-down-button-container">
                <button onClick={scrollToProjects} className="scroll-down-btn">
                    <span>Scroll Down</span>
                    <i className="icon scrolldown"></i>
                </button>
                <div className="scroll-down-button-offset"></div>
            </div>
        </div>
    )
}

export default ScrollDown;
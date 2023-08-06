import React, { useState, useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
export default function TechnologyCard({ technology, handleCardClick, selectedTechnology, position }) {
    // useEffect(() => {
    //     AOS.init({
    //         duration: 700,
    //     });
    // }, [])
    const [showDetails, setShowDetails] = useState(false);
    const [hideMainContent, setHideMainContent] = useState(false);

    const isSelected = technology.name === selectedTechnology;
    const isAnyCardSelected = selectedTechnology !== null;

    useEffect(() => {
        if (isSelected) {
            const timer1 = setTimeout(() => {
                setShowDetails(true);
            }, 300);  // Matches the fade-out transition.

            const timer2 = setTimeout(() => {
                setHideMainContent(true);
            }, 300);  // Matches the fade-out transition.

            return () => {
                clearTimeout(timer1);
                clearTimeout(timer2);
            };
        } else {
            const timer = setTimeout(() => {
                setShowDetails(false);
            }, 200); // Match the fade-out duration
            setHideMainContent(false);
            return () => clearTimeout(timer);
        }
    }, [isSelected]);

    let cardClass = 'card card-' + technology.logo;
    if (isAnyCardSelected) {
        cardClass += isSelected ? ' active' : ' inactive';
    }
    return (
        <button data-aos-delay={position * 100} data-aos="fade-in" className={cardClass} onClick={() => handleCardClick(technology.name)}>
            {!hideMainContent &&
                <div className={(isSelected ? "fade-out" : "fade-in") + " card-init-info"}>
                    <span className="headline">{technology.name}</span>
                </div>
            }
            {isSelected && showDetails &&
                <div className="fade-in card-active-info">
                    <div className="project-technology-card-info">
                        <span className="headline">{technology.years}</span>
                        <span>Experience</span>
                    </div>
                    <div className="project-technology-card-info">
                        <span className="headline">{technology.projects}</span>
                        <span>Projects</span>
                    </div>
                    <div className="project-technology-card-info">
                        <span className="headline">{technology.scale}/10</span>
                        <span>Knowledge</span>
                    </div>
                </div>
            }
            <i className={"experience-icon " + technology.logo}  />
        </button>
    );
}

import React, { useRef, useEffect, useState } from "react";
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
    const { reducedMotion, language } = usePreferences();
    const { translation } = usePreferences();

    const scrollRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const formattedDate = (date: Date) => new Date(date).toLocaleDateString("en-US", {
        year: 'numeric', month: 'long', day: 'numeric'
    });

    const redirect = (to: string, e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        if (!isInProcess) {
            if (reducedMotion) {
                window.scrollTo(0, 0);
            }
            reducedMotion ? navigate(to) : startAnimation(to);
        }
    };

    useEffect(() => {
        const scrollContainer = scrollRef.current;

        if (!scrollContainer) return;

        // Handle mouse wheel for horizontal scrolling
        const handleWheelScroll = (e: WheelEvent) => {
            e.preventDefault();
            scrollContainer.scrollLeft += e.deltaY * 0.5; // Adjust the scroll speed
        };

        scrollContainer.addEventListener('wheel', handleWheelScroll);

        return () => {
            scrollContainer.removeEventListener('wheel', handleWheelScroll);
        };
    }, []);

    // Handle dragging
    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!scrollRef.current) return;

        setIsDragging(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isDragging || !scrollRef.current) return;

        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 2; // The number 2 represents the scroll speed
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    return (
        <div className="more-projects">
            <span>{translation.project.moreProjects}</span>
            <div
                className={`more-projects-container ${isDragging ? 'dragging' : ''}`}
                ref={scrollRef}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
                style={{ cursor: isDragging ? 'grabbing' : 'grab' }} // Change cursor while dragging
            >
                {projects.map((project: ProjectsData, index: number) => (
                    <button key={index} className="more-project-element" onClick={(e) => redirect(`/project/${project.id}`, e)}>
                        {project.images !== null ? (
                            <img src={project.images[0]} alt="" className="more-project-bg-img" />
                        ) : (
                            <div className="more-project-bg-div"></div>
                        )}
                        <span className="info-bottom">
                            <span className="info-bottom-headline">{project[`name_${language}`]}</span>
                            <span className="info-bottom-date">{formattedDate(project.creation_date)}</span>
                        </span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default MoreProjects;

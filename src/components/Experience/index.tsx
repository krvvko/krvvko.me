import React, { useState } from "react";
import './index.css';
import { ExperienceButtonProps } from "../../utils/interfaces";
import All from "./Projects";
import Technologies from "./Technologies";
import {useServerData} from "../../utils/ServerDataContext";
import Projects from "./Projects";
import {usePreferences} from "../../utils/PreferencesContext";

const ExperienceButton: React.FC<ExperienceButtonProps> = ({ name,displayedName , amount, onClick, currentActive }) => {
    const isActive = currentActive.toLowerCase() === name.toLowerCase();
    return (
        <button className={`experience-button ${isActive ? 'active' : ''}`} onClick={onClick}>
            <span>{displayedName}</span>
            <span>{amount}</span>
        </button>
    );
};

const Experience = () => {
    const [activeComponentName, setActiveComponentName] = useState<string>('projects');
    const {translation} = usePreferences();

    const { experience, projects } = useServerData();

    const renderActiveComponent = () => {
        switch (activeComponentName) {
            case 'projects':
                return <Projects />;
            case 'technologies':
                return <Technologies />;
            default:
                return <All />;
        }
    };

    return (
        <section className="experience-container">
            <span className="section-headline" id='experience'>{translation.experience.myExperience}</span>
            <div className="experience-sections">
                <ExperienceButton currentActive={activeComponentName} amount={projects.length} displayedName={translation.experience.projects} name='Projects' onClick={() => setActiveComponentName('projects')} />
                <ExperienceButton currentActive={activeComponentName} amount={experience.length} displayedName={translation.experience.technologies} name='Technologies' onClick={() => setActiveComponentName('technologies')} />
            </div>
            <div className="active-experience">
                {renderActiveComponent()}
            </div>
        </section>
    );
};

export default Experience;

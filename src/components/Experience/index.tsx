import React, { useEffect, useState } from "react";
import './index.css';
import axios from 'axios';
import { ExperienceData, ExperienceButtonProps } from "../../utils/interfaces";
import All from "./All";
import Technologies from "./Technologies";

const ExperienceButton: React.FC<ExperienceButtonProps> = ({ name, amount, onClick, currentActive }) => {
    const isActive = currentActive.toLowerCase() === name.toLowerCase();

    return (
        <button className={`experience-button ${isActive ? 'active' : ''}`} onClick={onClick}>
            <span>{name}</span>
            <span>{amount}</span>
        </button>
    );
};

const Experience = () => {
    const [experience, setExperience] = useState<ExperienceData[]>([]);
    const [activeComponentName, setActiveComponentName] = useState<string>('all');

    useEffect(() => {
        axios.get('http://localhost:4001/api/experience')
            .then(function (response) {
                setExperience(response.data.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    const renderActiveComponent = () => {
        switch (activeComponentName) {
            case 'all':
                return <All />;
            case 'projects':
                return <Technologies />;
            default:
                return <All />;
        }
    };

    return (
        <section className="experience-container">
            <span className="section-headline">My Experience:</span>
            <div className="experience-sections">
                <ExperienceButton currentActive={activeComponentName} amount={10} name='All' onClick={() => setActiveComponentName('all')} />
                <ExperienceButton currentActive={activeComponentName} amount={12} name='Projects' onClick={() => setActiveComponentName('projects')} />
            </div>
            <div className="active-experience">
                {renderActiveComponent()}
            </div>
            {experience.map((technology) => (
                <div key={technology.id}>
                    <span>{technology.TechnologyName}</span>
                </div>
            ))}
        </section>
    );
};

export default Experience;

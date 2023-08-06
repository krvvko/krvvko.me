import React, {useEffect, useState} from "react";
import './index.css';
import TechnologyCard from "./TechnologyCard";

const technologies = [
    {
        name: "JavaScript",
        years: '4 years',
        projects: 10,
        scale: 7,
        logo: 'js',
    },
    {
        name: "HTML",
        years: '4 years',
        projects: 15,
        scale: 8,
        logo: 'html',
    },
    {
        name: "CSS",
        years: '4 years',
        projects: 15,
        scale: 8,
        logo: 'css',
    },
    {
        name: "React",
        years: '4 years',
        projects: 12,
        scale: 8,
        logo: 'react',
    },
    {
        name: "Node",
        years: '4 years',
        projects: 8,
        scale: 7,
        logo: 'node',
    },
    {
        name: "PHP",
        years: '4 years',
        projects: 9,
        scale: 7,
        logo: 'php',
    }
];

const BottomContainerLeft = () => {
    const [selectedTechnology, setSelectedTechnology] = useState(null);

    const handleCardClick = (techName) => {
        setSelectedTechnology(prevTech => prevTech !== techName ? techName : null);
    };


    return (
        <div className="grid">
            {technologies.map((tech, index) => (
                <TechnologyCard
                    key={tech.name}
                    technology={tech}
                    handleCardClick={() => handleCardClick(tech.name, index)}
                    selectedTechnology={selectedTechnology}
                    position={index + 1}
                />
            ))}
        </div>
    );

}

export default BottomContainerLeft;

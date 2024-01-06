import React, { useState, useMemo } from "react";
import { useServerData } from "../../../utils/ServerDataContext";
import { ExperienceData } from "../../../utils/interfaces";
import ExperienceElement from "../ExperienceElement";
import {usePreferences} from "../../../utils/PreferencesContext";
import {useNavigate} from "react-router-dom";

const Technologies = () => {
    const { experience } = useServerData();
    const [sortKey, setSortKey] = useState('');
    const [isAscending, setIsAscending] = useState(true);
    const {translation} = usePreferences();
    const navigate = useNavigate();

    const sortedExperience = useMemo(() => {
        if (!sortKey) return experience;

        return [...experience].sort((a, b) => {
            if (a[sortKey] < b[sortKey]) {
                return isAscending ? -1 : 1;
            }
            if (a[sortKey] > b[sortKey]) {
                return isAscending ? 1 : -1;
            }
            return 0;
        });
    }, [experience, sortKey, isAscending]);

    const handleSort = (key: keyof ExperienceData) => {
        navigate('#experience');
        const element = document.getElementById('experience');
        if (element) {
            element.scrollIntoView();
        }
        setIsAscending(sortKey === key ? !isAscending : true);
        setSortKey(key);
    };

    const getSortLabel = (key: keyof ExperienceData) => {
        if (sortKey === key) {
            return isAscending ? 'i' : 'd';
        }
        return '';
    };

    return (
        <>
            <div className="sort-buttons">
                <button className="sort-id" onClick={() => handleSort('id')}>
                    <span>ID</span>
                    <i className={`icon arrow ${getSortLabel('id')}`}></i>
                </button>
                <button className="sort-name auto" onClick={() => handleSort('TechnologyName')}>
                    <span>{translation.experience.technologiesList.name}</span>
                    <i className={`icon arrow ${getSortLabel('TechnologyName')}`}></i>
                </button>
                <button className="sort-lang auto" onClick={() => handleSort('Language')}>
                    <span>{translation.experience.technologiesList.language}</span>
                    <i className={`icon arrow ${getSortLabel('Language')}`}></i>
                </button>
                <span className="placeholder-desc">{translation.experience.technologiesList.description}</span>
                <button className="sort-date auto" onClick={() => handleSort('StartDate')}>
                    <span>{translation.experience.technologiesList.startDate}</span>
                    <i className={`icon arrow ${getSortLabel('StartDate')}`}></i>
                </button>
                <button className="sort-level auto" onClick={() => handleSort('KnowledgeLevel')}>
                    <span>{translation.experience.technologiesList.knowledgeLevel}</span>
                    <i className={`icon arrow ${getSortLabel('KnowledgeLevel')}`}></i>
                </button>
            </div>
            <div className="sort-data">
                {sortedExperience.map((element: ExperienceData) => (
                    <ExperienceElement
                        key={element.id}
                        id={element.id}
                        name={element.TechnologyName}
                        language={element.Language}
                        knowledgeLevel={element.KnowledgeLevel}
                        description={element.Description}
                        startDate={element.StartDate}
                    />
                ))}
            </div>
        </>
    );
};

export default Technologies;
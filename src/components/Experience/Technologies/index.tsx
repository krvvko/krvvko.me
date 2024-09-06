import React, { useState, useMemo } from "react";
import { useServerData } from "../../../utils/ServerDataContext";
import { ExperienceData } from "../../../utils/interfaces";
import ExperienceElement from "../ExperienceElement";
import { usePreferences } from "../../../utils/PreferencesContext";
import { useNavigate } from "react-router-dom";

const Technologies = () => {
    const { experience } = useServerData();
    const [sortKey, setSortKey] = useState<string>('');  // Ensure sortKey is always a string
    const [isAscending, setIsAscending] = useState(true);
    const { translation, language } = usePreferences();
    const navigate = useNavigate();

    // Add an index to the experience data and sort by index when necessary
    const sortedExperience = useMemo(() => {
        if (!sortKey) {
            return experience.map((exp: any, index: any) => ({ ...exp, index }));
        }

        return [...experience].map((exp, index) => ({ ...exp, index })).sort((a, b) => {
            // Sorting by index if 'index' is the sort key
            if (sortKey === 'index') {
                return isAscending ? a.index - b.index : b.index - a.index;
            }

            // Rest of the sorting logic
            if (a[sortKey] < b[sortKey]) return isAscending ? -1 : 1;
            if (a[sortKey] > b[sortKey]) return isAscending ? 1 : -1;
            return 0;
        });
    }, [experience, sortKey, isAscending]);

    const handleSort = (key: keyof ExperienceData | 'index') => {
        navigate('#experience');
        const element = document.getElementById('experience');
        if (element) {
            element.scrollIntoView();
        }
        setIsAscending(sortKey === key ? !isAscending : true);
        setSortKey(key as string);  // Cast key to string here
    };

    const getSortLabel = (key: keyof ExperienceData | 'index') => {
        if (sortKey === key) {
            return isAscending ? 'i' : 'd';
        }
        return '';
    };

    return (
        <>
            <div className="sort-buttons technologies">
                <button className="sort-id" onClick={() => handleSort('index')}>
                    <span>ID</span>
                    <i className={`icon arrow ${getSortLabel('index')}`}></i>
                </button>
                <button className="sort-name auto" onClick={() => handleSort('name')}>
                    <span>{translation.experience.technologiesList.name}</span>
                    <i className={`icon arrow ${getSortLabel('name')}`}></i>
                </button>
                <button className="sort-lang auto" onClick={() => handleSort('language')}>
                    <span>{translation.experience.technologiesList.language}</span>
                    <i className={`icon arrow ${getSortLabel('language')}`}></i>
                </button>
                <span className="placeholder-desc">{translation.experience.technologiesList.description}</span>
                <button className="sort-date auto" onClick={() => handleSort('start_date')}>
                    <span>{translation.experience.technologiesList.startDate}</span>
                    <i className={`icon arrow ${getSortLabel('start_date')}`}></i>
                </button>
                <button className="sort-level auto" onClick={() => handleSort('knowledge')}>
                    <span>{translation.experience.technologiesList.knowledgeLevel}</span>
                    <i className={`icon arrow ${getSortLabel('knowledge')}`}></i>
                </button>
            </div>
            <div className="sort-data">
                {sortedExperience.map((element: ExperienceData & { index: number }) => (
                    <ExperienceElement
                        key={element.id}
                        id={element.index}  // Now correctly pass the index from sortedExperience
                        name={element.name}
                        language={element.language}
                        knowledgeLevel={element.knowledge}
                        description={element[`description_${language}`]}
                        startDate={element.start_date}
                    />
                ))}
            </div>
        </>
    );
};

export default Technologies;

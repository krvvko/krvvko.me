import React, { useMemo, useState } from "react";
import { useServerData } from "../../../utils/ServerDataContext";
import { ProjectsData } from "../../../utils/interfaces";
import ProjectElement from "../ProjectElement";
import { usePreferences } from "../../../utils/PreferencesContext";
import { useNavigate } from "react-router-dom";

const Projects: React.FC = () => {
    const { projects } = useServerData();
    const [sortKey, setSortKey] = useState<string>('');  // Ensure sortKey is always a string
    const [isAscending, setIsAscending] = useState(true);
    const { translation } = usePreferences();
    const navigate = useNavigate();

    const sortedProjects = useMemo(() => {
        if (!sortKey) return projects.map((project: any, index: any) => ({ ...project, index }));

        return [...projects].map((project, index) => ({ ...project, index })).sort((a, b) => {
            const aImages = a.images?.length || 0;
            const bImages = b.images?.length || 0;

            // Sort by index if 'index' is the sort key
            if (sortKey === 'index') {
                return isAscending ? a.index - b.index : b.index - a.index;
            }

            // Compare based on image count if sortKey is 'images'
            if (sortKey === 'images') {
                if (aImages < bImages) return isAscending ? -1 : 1;
                if (aImages > bImages) return isAscending ? 1 : -1;
                return 0;
            }

            // Rest of the sorting logic
            if (a[sortKey] < b[sortKey]) return isAscending ? -1 : 1;
            if (a[sortKey] > b[sortKey]) return isAscending ? 1 : -1;
            return 0;
        });
    }, [projects, sortKey, isAscending]);

    const handleSort = (key: keyof ProjectsData | 'index') => {
        navigate('#experience');
        const element = document.getElementById('experience');
        if (element) {
            element.scrollIntoView();
        }
        setIsAscending(sortKey === key ? !isAscending : true);
        setSortKey(key as string);  // Cast key to string here
    };

    const getSortLabel = (key: keyof ProjectsData | 'index') => {
        if (sortKey === key) {
            return isAscending ? 'i' : 'd';
        }
        return '';
    };

    return (
        <>
            <div className="sort-buttons projects">
                <button className="sort-project-id" onClick={() => handleSort('index')}>
                    <span>ID</span>
                    <i className={`icon arrow ${getSortLabel('index')}`}></i>
                </button>
                <button className="sort-project-name auto" onClick={() => handleSort('name_en')}>
                    <span>{translation.experience.projectsList.name}</span>
                    <i className={`icon arrow ${getSortLabel('name_en')}`}></i>
                </button>
                <span className="placeholder-project-desc auto">{translation.experience.projectsList.shortDesc}</span>
                <button className="sort-project-technologies" onClick={() => handleSort('technologies')}>
                    <span>{translation.experience.projectsList.technologies}</span>
                    <i className={`icon arrow ${getSortLabel('technologies')}`}></i>
                </button>
                <button className="sort-project-images" onClick={() => handleSort('images')}>
                    <span>{translation.experience.projectsList.images}</span>
                    <i className={`icon arrow ${getSortLabel('images')}`}></i>
                </button>
                <span className="sort-project-url">{translation.experience.projectsList.url}</span>
                <span className="sort-project-source">{translation.experience.projectsList.source}</span>
                <button className="sort-project-deployed" onClick={() => handleSort('deployed')}>
                    <span>{translation.experience.projectsList.deployed}</span>
                    <i className={`icon arrow ${getSortLabel('deployed')}`}></i>
                </button>
                <button className="sort-project-date auto" onClick={() => handleSort('creation_date')}>
                    <span>{translation.experience.projectsList.releaseDate}</span>
                    <i className={`icon arrow ${getSortLabel('creation_date')}`}></i>
                </button>
                <button className="sort-project-difficulty auto" onClick={() => handleSort('difficulty')}>
                    <span>{translation.experience.projectsList.difficulty}</span>
                    <i className={`icon arrow ${getSortLabel('difficulty')}`}></i>
                </button>
            </div>
            <div className="sort-data">
                {sortedProjects.map((element: ProjectsData & { index: number }) => (
                    <ProjectElement
                        key={element.id}
                        creation_date={element.creation_date}
                        deployed={element.deployed}
                        difficulty={element.difficulty}
                        images={element.images}
                        full_description_en={element.full_description_en}
                        full_description_ru={element.full_description_ru}
                        name_en={element.name_en}
                        name_ru={element.name_ru}
                        short_description_en={element.short_description_en}
                        short_description_ru={element.short_description_ru}
                        source={element.source}
                        technologies={element.technologies}
                        url={element.url}
                        index={element.index}
                        id={element.id}
                        onClick={() => {}}
                        tags={[]}
                        type={''}
                    />
                ))}
            </div>
        </>
    );
};

export default Projects;

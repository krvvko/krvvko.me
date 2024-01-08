import React, {useMemo, useState} from "react";
import {useServerData} from "../../../utils/ServerDataContext";
import {ProjectsData} from "../../../utils/interfaces";
import ProjectElement from "../ProjectElement";
import {usePreferences} from "../../../utils/PreferencesContext";
import {useNavigate} from "react-router-dom";

const Projects: React.FC = () => {
    const { projects } = useServerData();
    const [sortKey, setSortKey] = useState('');
    const [isAscending, setIsAscending] = useState(true);
    const {translation} = usePreferences();
    const navigate = useNavigate();
    const sortedProjects = useMemo(() => {
        if (!sortKey) return projects;

        return [...projects].sort((a, b) => {
            // Convert string to array for image count
            const aImages = a.ProjectImages.length;
            const bImages = b.ProjectImages.length;

            // Compare based on image count if sortKey is 'ProjectImages'
            if (sortKey === 'ProjectImages') {
                if (aImages < bImages) return isAscending ? -1 : 1;
                if (aImages > bImages) return isAscending ? 1 : -1;
                return 0;
            }

            // Rest of the sorting logic remains same
            if (a[sortKey] < b[sortKey]) return isAscending ? -1 : 1;
            if (a[sortKey] > b[sortKey]) return isAscending ? 1 : -1;
            return 0;
        });
    }, [projects, sortKey, isAscending]);


    const handleSort = (key: keyof ProjectsData) => {
        navigate('#experience');
        const element = document.getElementById('experience');
        if (element) {
            element.scrollIntoView();
        }
        setIsAscending(sortKey === key ? !isAscending : true);
        setSortKey(key);
    };

    const getSortLabel = (key: keyof ProjectsData) => {
        if (sortKey === key) {
            return isAscending ? 'i' : 'd';
        }
        return '';
    };

    return (
        <>
            <div className="sort-buttons projects">
                <button className="sort-project-id" onClick={() => handleSort('id')}>
                    <span>ID</span>
                    <i className={`icon arrow ${getSortLabel('id')}`}></i>
                </button>
                <button className="sort-project-name auto" onClick={() => handleSort('ProjectName')}>
                    <span>{translation.experience.projectsList.name}</span>
                    <i className={`icon arrow ${getSortLabel('ProjectName')}`}></i>
                </button>
                <span className="placeholder-project-desc auto">{translation.experience.projectsList.shortDesc}</span>
                <button className="sort-project-technologies" onClick={() => handleSort('ProjectTechnologies')}>
                    <span>{translation.experience.projectsList.technologies}</span>
                    <i className={`icon arrow ${getSortLabel('ProjectTechnologies')}`}></i>
                </button>
                <button className="sort-project-images" onClick={() => handleSort('ProjectImages')}>
                    <span>{translation.experience.projectsList.images}</span>
                    <i className={`icon arrow ${getSortLabel('ProjectImages')}`}></i>
                </button>
                <span className="sort-project-url">{translation.experience.projectsList.url}</span>
                <span className="sort-project-source">{translation.experience.projectsList.source}</span>
                <button className="sort-project-deployed" onClick={() => handleSort('ProjectDeployed')}>
                    <span>{translation.experience.projectsList.deployed}</span>
                    <i className={`icon arrow ${getSortLabel('ProjectDeployed')}`}></i>
                </button>
                <button className="sort-project-date auto"
                        onClick={() => handleSort('ProjectCreationDay')}>
                    <span>{translation.experience.projectsList.releaseDate}</span>
                    <i className={`icon arrow ${getSortLabel('ProjectCreationDay')}`}></i>
                </button>
                <button className="sort-project-difficulty auto"
                        onClick={() => handleSort('ProjectDifficulty')}>
                    <span>{translation.experience.projectsList.difficulty}</span>
                    <i className={`icon arrow ${getSortLabel('ProjectDifficulty')}`}></i>
                </button>
            </div>
            <div className="sort-data">
                {sortedProjects.map((element: ProjectsData) => (
                    <ProjectElement
                        key={element.id}
                        ProjectCreationDay={element.ProjectCreationDay}
                        ProjectDeployed={element.ProjectDeployed}
                        ProjectDifficulty={element.ProjectDifficulty}
                        ProjectImages={element.ProjectImages}
                        ProjectLongDescription={element.ProjectLongDescription}
                        ProjectName={element.ProjectName}
                        ProjectShortDescription={element.ProjectShortDescription}
                        ProjectSourceUrl={element.ProjectSourceUrl}
                        ProjectTechnologies={element.ProjectTechnologies}
                        ProjectUrl={element.ProjectUrl}
                        id={element.id}
                        onClick={() => {return}}
                    />
                ))}
            </div>
        </>
    );
}

export default Projects;
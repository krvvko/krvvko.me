import React, {createContext, useContext, useEffect, useState} from 'react';
import axios from 'axios';
import {ExperienceData, ProjectsData, ServerDataProviderProps} from "./interfaces";

export const ServerDataContext = createContext<any>(
    {
        experience: null,
        projects: null
    }
);

export const ServerDataProvider: React.FC<ServerDataProviderProps> = ({ children }) => {
    const [experience, setExperience] = useState<ExperienceData[]>(
        []
    );
    const [projects, setProjects] = useState<ProjectsData[]>(
        []
    );

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/experience`)
            .then(function (response) {
                setExperience(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
        axios.get(`${process.env.REACT_APP_API_URL}/projects`)
            .then(function (response) {
                const transformedData = response.data.map((project: any) => transformProjectData(project));
                setProjects(transformedData);
            })
            .catch(function (error) {
                console.log(error);
            });
        // eslint-disable-next-line
    }, []);

    const convertStringToArray = (str:any) => {
        if (str === null) return null;
        if (typeof str === 'string') {
            return str.replace(/^\['|'\]$/g, '').split("', '");
        }
        return str;
    };

    const transformProjectData = (project:any) => {
        project.ProjectImages = convertStringToArray(project.ProjectImages);
        project.ProjectTechnologies = convertStringToArray(project.ProjectTechnologies);
        return project;
    };


    return (
        <ServerDataContext.Provider value={{ experience, projects }}>
            {children}
        </ServerDataContext.Provider>
    );
};

export const useServerData = () => {
    return useContext(ServerDataContext);
};
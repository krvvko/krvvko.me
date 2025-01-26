import React from "react";
import Item from "@/components/ui/ExperiencePanel/ProjectList/Item/Item";
import styles from './index.module.css';

const ProjectList = ({ projects }) => {

    const sortedProjects = projects.sort((a, b) => {
        const dateA = new Date(a.creation_date);
        const dateB = new Date(b.creation_date);
        return dateB - dateA;
    })


    return (
        <>
            {sortedProjects.map((project, index) => (
                <React.Fragment key={index}>
                    <Item project={project} />
                    {index < projects.length - 1 && <div className={styles.hr}></div>}
                </React.Fragment>
            ))}
        </>
    );
};

export default ProjectList;

"use client";

import React from "react";
import Item from "@/components/ui/ExperiencePanel/ProjectList/Item/Item";
import styles from './index.module.css';

const ProjectList = ({ projects }) => {
    return (
        <>
            {projects.map((project, index) => (
                <React.Fragment key={index}>
                    <Item project={project} />
                    {index < projects.length - 1 && <div className={styles.hr}></div>}
                </React.Fragment>
            ))}

        </>
    );
};

export default ProjectList;

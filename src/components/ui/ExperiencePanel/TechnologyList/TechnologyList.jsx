"use client";
import React from "react";
import styles from "@/components/ui/ExperiencePanel/ProjectList/index.module.css";
import Item from "@/components/ui/ExperiencePanel/TechnologyList/Item/Item";

const TechnologyList = ({ technologies }) => {
    const sortedTechnologies = [...technologies].sort((a, b) => b.knowledge - a.knowledge);

    return (
        <>
            {sortedTechnologies.map((tech, index) => (
                <React.Fragment key={index}>
                    <Item tech={tech} key={index} />
                    {index < technologies.length - 1 && <div className={styles.hr}></div>}
                </React.Fragment>

            ))}
        </>
    );
};

export default TechnologyList;

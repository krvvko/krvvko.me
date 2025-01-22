"use client";

import React from "react";
import Item from "@/components/ui/ExperiencePanel/ProjectList/Item/Item";

const ProjectList = ({ projects }) => {
    return (
        <>
            {projects.map((project, index) => (
                <Item project={project} key={index} />
            ))}
        </>
    );
};

export default ProjectList;

"use client";

import React, { useState } from "react";
import styles from "./index.module.css";
import ProjectList from "@/components/ui/ExperiencePanel/ProjectList/ProjectList";
import TechnologyList from "@/components/ui/ExperiencePanel/TechnologyList/TechnologyList";
import PersonalList from "@/components/ui/ExperiencePanel/PersonalList/PersonalList";

const ExperiencePanel = ({ projects, technologies, personal }) => {
    const [selectedCategory, setSelectedCategory] = useState("projects");

    const buttonClass = (category) => {
        return `${styles.button} ${
            selectedCategory === category ? styles.active : ""
        }`;
    };

    return (
        <div className={styles.container}>
            <div className={styles.buttons}>
                <button
                    className={buttonClass("projects")}
                    onClick={() => setSelectedCategory("projects")}
                >
                    Projects
                </button>
                <button
                    className={buttonClass("technologies")}
                    onClick={() => setSelectedCategory("technologies")}
                >
                    Technologies
                </button>
                <button
                    className={buttonClass("personal")}
                    onClick={() => setSelectedCategory("personal")}
                >
                    Work
                </button>
            </div>

            <div className={styles.category}>
                {selectedCategory === "projects" && (
                    <ProjectList projects={projects} />
                )}
                {selectedCategory === "technologies" && (
                    <TechnologyList technologies={technologies} />
                )}
                {selectedCategory === "personal" && (
                    <PersonalList personal={personal} />
                )}
            </div>
        </div>
    );
};

export default ExperiencePanel;

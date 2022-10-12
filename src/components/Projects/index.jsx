import ExperienceTable from "../ExperienceTable";
import './index.css';
import React, {useState, useEffect} from "react";

import {GithubRepoDisplay} from "github-repo-display-react"
import "github-repo-display-react/dist/index.css"
import BestProjects from "../BestProjects"; // default github styling


const Projects = () => {

    let start = new Date("11/3/2020");
    let now = new Date(Date.now());

    let imProgr = Math.round((now - start) / 1000 / 60 / 60 / 24 / 365) + " Years";


    return (
        <div className="projects">

            <h1>Projects</h1>

            <span className="date">Oct 12, 2022</span>

            <p>
                How long has it been since I became a programmer? Good question, by my count (okay, not mine),
                I've been in programming for about <a href="" className="default-link">{imProgr}</a> now. All this time I have been practicing in old and new
                languages and frameworks for me. The branch of programming in which I practice is frontend development.
                Here are some of my best projects, that required effort and time:
            </p>

            <BestProjects />
            <div className="div-separator"></div>
            <p>**All the usages examples and explanations you can find <a href="" className="default-link">here</a>.</p>

            <h2>My Experience</h2>

            <div className="exp-table">
                <ExperienceTable/>
            </div>

            <h2>My GitHub</h2>
            <GithubRepoDisplay
                numOfrepos={4} // must be included
                userName='krvvko' // must be included
                showLanguage={true}
            />

        </div>
    );

}

export default Projects;
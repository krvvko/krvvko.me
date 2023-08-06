import React from 'react';
import './index.css';
import TopContainer from "./TopContainer";
import BottomContainer from "./BottomContainer";

const MyProjects = () => {
    return (
        <div className="projects-container" id="projects">
            <TopContainer />
            <BottomContainer />
        </div>
    )
}

export default MyProjects;
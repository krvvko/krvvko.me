import React from "react";

const TechStackItem = ({name, svgName}) => {
    return (
        <div className="tech-stack-item">
            <div className={`project-icon ${svgName}`}></div>
            <span>{name}</span>
        </div>
    )
}
export default TechStackItem;
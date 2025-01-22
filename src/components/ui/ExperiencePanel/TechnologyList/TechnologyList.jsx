"use client";

import React from "react";

const TechnologyList = ({ technologies }) => {
    return (
        <div>
            {technologies.map((tech, index) => (
                <div key={index} style={{ marginBottom: "1rem" }}>
                    <pre>{JSON.stringify(tech, null, 2)}</pre>
                </div>
            ))}
        </div>
    );
};

export default TechnologyList;

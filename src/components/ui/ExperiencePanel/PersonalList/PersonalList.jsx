"use client";

import React from "react";

const PersonalList = ({ personal }) => {
    return (
        <div>
            {personal.experience.map((item, index) => (
                <div key={index} style={{ marginBottom: "1rem" }}>
                    <pre>{JSON.stringify(item, null, 2)}</pre>
                </div>
            ))}
        </div>
    );
};

export default PersonalList;

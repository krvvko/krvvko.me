import React from "react";
import './index.css';
import links from "../../../../links";
const WalkingShrimp = () => {
    return(
        <>
            <div className="shrimp-donate">
                <div className="shrimp-gif"></div>
                <div className="shrimp-donate-buttons">
                    <a href="#contact">Get Shrimp a job</a>
                    <a rel="noreferrer" target="_blank" href={links.donationAlerts}>Feed Shrimp</a>
                </div>
            </div>
            <div className="shrimp-donate-buttons-mobile mobile">
                <a href="#contact">Get Shrimp a job</a>
                <a rel="noreferrer" target="_blank" href={links.donationAlerts}>Feed Shrimp</a>
            </div>
        </>
    )
}

export default WalkingShrimp;
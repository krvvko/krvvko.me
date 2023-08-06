import React from "react";
import './index.css';
import BottomContainerLeft from "./BottomContainerLeft";
import BottomContainerRight from "./BottomContainerRight";

const BottomContainer = () => {
    return (
        <div className="projects-bottom-container">
            <BottomContainerLeft/>
            <BottomContainerRight />
        </div>
    )
}
export default BottomContainer;
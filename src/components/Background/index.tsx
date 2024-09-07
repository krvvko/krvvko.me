import React from "react";
import './index.css';
import {usePreferences} from "../../utils/PreferencesContext";
const Background = () => {
    const {reducedMotion} = usePreferences()
    return(
        <>
            <div className={`background-lines ${reducedMotion ? 'reduced' : ''}`}></div>
        </>
    )
}

export default Background;
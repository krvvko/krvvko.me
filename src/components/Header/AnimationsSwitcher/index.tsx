import React from "react";
import './index.css';
import {usePreferences} from "../../../utils/PreferencesContext";

const AnimationsSwitcher: React.FC = () => {
    const {reducedMotion, setReducedMotion} = usePreferences();
    const {language, translation} = usePreferences();

    const handleClick = () => {
        setReducedMotion(!reducedMotion);
    }

    return (
        <div className="reduced-motion-container">
            <button onClick={handleClick} className={`reduced-motion-button ${language}`}>
                <span className={reducedMotion ? 'active' : ''}>
                    {translation.header.staticButton}
                </span>
                <span className={reducedMotion ? '' : 'active'}>
                    {translation.header.animatedButton}
                </span>
                <div className={`reduced-motion-absolute ${reducedMotion ? 'left' : 'right'}`}></div>
            </button>
        </div>
    )
}

export default AnimationsSwitcher;
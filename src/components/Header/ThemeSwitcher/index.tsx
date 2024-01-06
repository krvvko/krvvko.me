import React from "react";
import './index.css';
import {usePreferences} from "../../../utils/PreferencesContext";

const ThemeSwitcher: React.FC = () => {
    const {theme, setTheme} = usePreferences();

    const themeHandler = () => {
        theme === 'theme-light' ? setTheme('theme-dark') : setTheme('theme-light')
    }

    return (
        <div className="theme-switcher-container">
            <button onClick={themeHandler}>
                <i className={`icon ${theme === 'theme-light' ? 'sun' : 'moon'}`}></i>
            </button>
        </div>
    )
}

export default ThemeSwitcher;
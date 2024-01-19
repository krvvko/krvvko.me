import React from "react";
import './index.css';
import AnimatedLink from "../AnimatedLink";
import Logo from "./Logo";
import AnimationsSwitcher from "./AnimationsSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";
import LanguageSwitcher from "./LanguageSwitcher";
import {usePreferences} from "../../utils/PreferencesContext";

const Header:React.FC = () => {
    const {translation} = usePreferences();

    return(
        <header>
            <div className="header-left">
                <Logo />
            </div>
            <div className="header-middle">
                <AnimatedLink linkClass="header-link" to="/">{translation.header.homeLink}</AnimatedLink>
                <AnimatedLink linkClass="header-link" to="/contact">{translation.header.contactLink}</AnimatedLink>
            </div>
            <div className="header-right">
                <AnimationsSwitcher />
                <ThemeSwitcher />
                <LanguageSwitcher />
            </div>
        </header>
    )
}

export default Header;
import React, {useEffect, useState} from 'react';
import {useAnimation} from "../../utils/AnimationContext";
import './index.css';
import {AnimatedLinkProps} from "../../utils/interfaces";
import {usePreferences} from "../../utils/PreferencesContext";
import {useNavigate} from "react-router-dom";


const AnimatedLink: React.FC<AnimatedLinkProps> = ({ to, children, linkClass }) => {
    const { startAnimation, isInProcess } = useAnimation();
    const { reducedMotion } = usePreferences();
    const [isActive, setIsActive] = useState<boolean>(false);
    const navigate = useNavigate();

    useEffect(() => {
        window.location.pathname === to ? setIsActive(true) : setIsActive(false)
    }, [window.location.pathname, to]);
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        if(!isInProcess && !isActive) {
            reducedMotion ? navigate(to) : startAnimation(to);
        }
    };

    return <a href={to} className={`animate-button ${isActive ? 'active' : ''} ${linkClass}`} onClick={handleClick}>{children}</a>;
};

export default AnimatedLink;
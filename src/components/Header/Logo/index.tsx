import React, {useEffect, useRef, useState} from 'react';
import './index.css';
import AnimatedLink from "../../AnimatedLink";
import {usePreferences} from "../../../utils/PreferencesContext";
const Logo: React.FC = () => {
    const logoRef = useRef<HTMLImageElement>(null);
    const [rotation, setRotation] = useState(0);
    const rotationSensitivity = 0.5; // Control the sensitivity of rotation
    const { reducedMotion } = usePreferences();

    const updateRotation = (event: MouseEvent) => {
        if (logoRef.current) {
            const logoRect = logoRef.current.getBoundingClientRect();
            const logoCenterX = logoRect.left + logoRect.width / 2;
            const logoCenterY = logoRect.top + logoRect.height / 2;
            const angleDeg = Math.atan2(event.clientY - logoCenterY, event.clientX - logoCenterX) * 180 / Math.PI;

            setRotation(angleDeg * rotationSensitivity);
        }
    };

    useEffect(() => {
        if(!reducedMotion) {
            window.addEventListener('mousemove', updateRotation);

            return () => {
                window.removeEventListener('mousemove', updateRotation);
            };
        }
    }, [reducedMotion]);

    return (
        <AnimatedLink to="/" linkClass="logo">
            <div className="logo-box">
                <i ref={logoRef} className="icon shrimp logo-img" style={{ transform: `scaleX(-1) rotate(-${rotation}deg)` }}></i>
                <span>krvvko.me</span>
            </div>
        </AnimatedLink>
    );
}

export default Logo;

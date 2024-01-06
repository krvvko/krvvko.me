import React, { createContext, useState, useContext, useCallback } from 'react';
import { useNavigate } from "react-router-dom";
import './css/RedirectAnimation.css'
import {AnimationContextType, AnimationProviderProps} from "./interfaces";
import {usePreferences} from "./PreferencesContext";

const AnimationContext = createContext<AnimationContextType>({
    startAnimation: (): void => {},
    isInProcess: false
});

export const useAnimation = () => useContext(AnimationContext);

export const AnimationProvider: React.FC<AnimationProviderProps> = ({ children }) => {
    const [animationClass, setAnimationClass] = useState<string>('');
    const [isInProcess, setIsInProcess] = useState<boolean>(false);
    const { reducedMotion } = usePreferences()
    const navigate = useNavigate();

    const startAnimation = useCallback((to: string) => {
        setAnimationClass('start');
        setIsInProcess(true);
        setTimeout(() => {
            navigate(to);
            window.scrollTo(0, 0);
            setAnimationClass('end');
            setTimeout(()=> {
                setAnimationClass('');
                setIsInProcess(false);
            }, 1000)
        }, 1000);
    }, [navigate]);

    return (
        <AnimationContext.Provider value={{ startAnimation, isInProcess }}>
            <div className={`animation ${animationClass} ${reducedMotion ? 'reduced-motion' : ''}`}>
                <div className="animation-wrapper">
                    <div className="animation-white"></div>
                    <div className="animation-grey"></div>
                    <div className="animation-black"></div>
                    <div className="animation-grey"></div>
                    <div className="animation-white"></div>
                </div>
            </div>
            {children}
        </AnimationContext.Provider>
    );
};
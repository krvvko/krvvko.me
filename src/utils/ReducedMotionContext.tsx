import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { ReducedMotionContextType, ReducedMotionProviderProps } from "./interfaces";

const ReducedMotionContext = createContext<ReducedMotionContextType>({
    reducedMotion: false,
    setReducedMotion: (): void => {},
});

export const useReducedMotion = () => useContext(ReducedMotionContext);

export const ReducedMotionProvider: React.FC<ReducedMotionProviderProps> = ({ children }) => {
    const [reducedMotion, setReducedMotion] = useState<boolean>(() => {
        const storedValue = localStorage.getItem('reducedMotion');
        return storedValue !== null ? JSON.parse(storedValue) : true;
    });

    useEffect(() => {
        localStorage.setItem('reducedMotion', JSON.stringify(reducedMotion));
    }, [reducedMotion]);

    return (
        <ReducedMotionContext.Provider value={{ reducedMotion, setReducedMotion }}>
            {children}
        </ReducedMotionContext.Provider>
    );
};

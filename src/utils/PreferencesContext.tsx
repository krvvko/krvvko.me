import React, { createContext, useState, useContext, useEffect } from 'react';
import {PreferencesContextType, PreferencesProviderProps} from "./interfaces";
import translations from "./translations";

const PreferencesContext = createContext<PreferencesContextType>({
    language: 'en',
    setLanguage: () => {},
    reducedMotion: true,
    setReducedMotion: () => {},
    theme: 'theme-dark',
    setTheme: () => {},
    translation: translations['en'],
});

export const usePreferences = () => useContext(PreferencesContext);

export const PreferencesProvider: React.FC<PreferencesProviderProps> = ({ children }) => {
    const [language, setLanguage] = useState<string>(() => {
        return localStorage.getItem('language') || 'en';
    });

    const [reducedMotion, setReducedMotion] = useState<boolean>(() => {
        const storedValue = localStorage.getItem('reducedMotion');
        return storedValue !== null ? JSON.parse(storedValue) : true;
    });

    const [theme, setTheme] = useState<string>(() => {
        return localStorage.getItem('theme') || 'theme-dark';
    });

    useEffect(() => {
        localStorage.setItem('language', language);
        localStorage.setItem('reducedMotion', JSON.stringify(reducedMotion));
        localStorage.setItem('theme', theme);
    }, [language, reducedMotion, theme]);

    useEffect(() => {
        document.documentElement.className = theme;
    }, [theme]);

    const translation: any = translations[language] || translations.en;

    return (
        <PreferencesContext.Provider value={{ language, setLanguage, reducedMotion, setReducedMotion, theme, setTheme, translation }}>
            {children}
        </PreferencesContext.Provider>
    );
};
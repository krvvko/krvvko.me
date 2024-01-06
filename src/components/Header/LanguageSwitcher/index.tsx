import React, {useState} from "react";
import './index.css';
import {usePreferences} from "../../../utils/PreferencesContext";

const LanguageSwitcher: React.FC = () => {
    const {language, setLanguage} = usePreferences()
    const [isLanguageModalOpen, setIsLanguageModalOpen] = useState<boolean>(false);
    const languageModalOpen = () => {
        setIsLanguageModalOpen(!isLanguageModalOpen)
    }

    return (
        <div className="language-switcher-container">
            <button className="active-lang-button" onClick={languageModalOpen}>{language === 'ru' ? 'Русский' : 'English'}</button>
            <div className={`languages-modal-absolute ${isLanguageModalOpen ? 'open' : ''}`}>
                <button className={`language-button ${language === 'ru' ? 'active' : ''}`} onClick={() => setLanguage('ru')}>Русский</button>
                <button className={`language-button ${language === 'en' ? 'active' : ''}`} onClick={() => setLanguage('en')}>English</button>
            </div>
        </div>
    )
}

export default LanguageSwitcher;
import React, {ReactNode} from "react";

export interface AnimatedLinkProps {
    to: string;
    linkClass?: string;
    children: React.ReactNode;
}
export interface ReducedMotionProviderProps {
    children: ReactNode;
}
export interface AnimationContextType {
    startAnimation: (to: string) => void;
    isInProcess: boolean;
}
export interface AnimationProviderProps {
    children: ReactNode;
}
export interface ReducedMotionContextType {
    reducedMotion: boolean;
    setReducedMotion: (value: boolean) => void;
}

export interface ExperienceData {
    id: string;
    name: string;
    language: string;
    description_ru: string;
    description_en: string;
    start_date: Date | string | number;
    knowledge: number;
    [key: string]: any;
}
export interface ProjectsData {
    id: string;
    name_en: string;
    name_ru: string;
    full_description_ru: string | null;
    full_description_en: string | null;
    short_description_ru: string | null;
    short_description_en: string | null;
    type: string;
    tags: string[] | null;
    creation_date: Date;
    deployed: boolean;
    difficulty: number;
    images: string[] | null;
    source: string | null;
    technologies: string[] | null;
    url: string | null;
    [key: string]: any;
}
export interface ExperienceButtonProps {
    name: string;
    displayedName: string;
    currentActive: string;
    amount: number;
    onClick: () => void;
}
export interface ExperienceElementProps {
    id: number;
    name: string;
    language: string;
    knowledgeLevel: number;
    description: string;
    startDate: Date | string | number;
}
export interface ProjectElementProps {
    id: string;
    index: number;
    name_en: string;
    name_ru: string;
    full_description_ru: string | null;
    full_description_en: string | null;
    short_description_ru: string | null;
    short_description_en: string | null;
    type: string;
    tags: string[] | null;
    creation_date: Date;
    deployed: boolean;
    difficulty: number;
    images: string[] | null;
    source: string | null;
    technologies: string[] | null;
    url: string | null;
    onClick: () => void;
}
export interface TechProps {
    data: ExperienceData[];
}
export interface ServerDataProviderProps {
    children: ReactNode;
}

export interface PreferencesProviderProps {
    children: ReactNode;
}

export interface PreferencesContextType {
    language: string;
    setLanguage: (language: string) => void;
    reducedMotion: boolean;
    setReducedMotion: (reducedMotion: boolean) => void;
    theme: string;
    setTheme: (theme: string) => void;
    translation: any;
}
export interface ProjectServerData {
    id: number;
    name_en: string;
    name_ru: string;
    full_description_ru: string | null;
    full_description_en: string | null;
    short_description_ru: string | null;
    short_description_en: string | null;
    type: string;
    tags: string[] | null;
    creation_date: Date;
    deployed: boolean;
    difficulty: number;
    images: string[] | null;
    source: string | null;
    technologies: string[] | null;
    url: string | null;
    [key: string]: any;
}
export interface LinkElementProps {
    link: string;
    title: string;
    username: string;
    icon: string;
}

export interface ContactDescriptionElementProps {
    title: string;
    amount: number;
    suffix?: string | null;
}
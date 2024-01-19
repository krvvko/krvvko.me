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
    id: number;
    TechnologyName: string;
    Language: string;
    Description: string;
    StartDate: Date | string | number;
    KnowledgeLevel: number;
}
export interface ProjectsData {
    ProjectCreationDay: Date;
    ProjectDeployed: boolean;
    ProjectDifficulty: number;
    ProjectImages: string[] | null;
    ProjectLongDescription: string;
    ProjectName: string;
    ProjectShortDescription: string;
    ProjectSourceUrl: string | null;
    ProjectTechnologies: string[];
    ProjectUrl: string;
    id: number;
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
    ProjectCreationDay: Date;
    ProjectDeployed: boolean;
    ProjectDifficulty: number;
    ProjectImages: string[] | null;
    ProjectLongDescription: string;
    ProjectName: string;
    ProjectShortDescription: string;
    ProjectSourceUrl: string | null;
    ProjectTechnologies: string[];
    ProjectUrl: string;
    id: number;
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
    ProjectName: string;
    ProjectShortDescription: string | null;
    ProjectLongDescription: string | null;
    ProjectCreationDate: Date;
    ProjectDeployed: boolean;
    ProjectDifficulty: number;
    ProjectImages: string[] | null;
    ProjectSourceUrl: string | null;
    ProjectTechnologies: string[] | null;
    ProjectUrl: string | null;
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
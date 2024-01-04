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
    StartDate: string;
    KnowledgeLevel: number;
};

export interface ExperienceButtonProps {
    name: string;
    currentActive: string;
    amount: number;
    onClick: () => void;
}
export interface Project {
    id: string;
    name_en: string;
    name_ru: string;
    full_description_en: string;
    full_description_ru: string;
    short_description_en: string;
    short_description_ru: string;
    type: string;
    technologies: string[];
    images: string[];
    tags: string[];
    deployed: boolean;
    url: string | null;
    source: string | null;
    difficulty: number;
    creation_date: Date;
}

export interface ProjectStoreState {
    projects: Project[]
    loading: boolean
    error: string | null
}
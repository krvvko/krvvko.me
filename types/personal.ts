export interface Personal {
    links: {
        portfolio: string;
        github: string;
        linkedIn: string;
    };
    contacts: {
        email: string;
    };
    developer_since: string;
    username: string;
    position: string;
    status: string;
    location: string;
    experience: Experience[];
}

export interface Experience {
    role: string;
    company_name: string;
    company_description_ru: string;
    company_description_en: string;
    stack: string[];
    start_date: string;
    end_date: string | null;
    responsibilities: string[];
}
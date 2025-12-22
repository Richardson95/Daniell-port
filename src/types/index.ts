export interface Experience {
    year: string;
    title: string;
    company: string;
    description?: string;
    responsibilities?: string[];
}

export interface Project {
    icon: string;
    title: string;
    type: string;
    description: string;
    impact: string[];
}

export interface Engagement {
    title: string;
    date: string;
    topic: string;
    audience?: string;
}

export interface Service {
    icon: string;
    title: string;
    description: string;
}

export interface ContactInfo {
    whatsapp: string;
    phone: string;
    email: string;
    location: string;
}

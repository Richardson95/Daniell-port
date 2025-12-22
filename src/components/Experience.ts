import { createElement, appendChildren } from '../utils/dom';
import type { Experience } from '../types';

export class ExperienceSection {
    private experiences: Experience[] = [
        {
            year: '2025',
            title: 'Chief Growth Officer (CGO)',
            company: 'AfrikHands Limited via Anidela',
            description: 'Responsible for building and executing growth strategy across a Pan-African brand holding company, including brand architecture, social media systems, team management, and international expansion initiatives, with a focus on measurable traction and scalability.'
        },
        {
            year: 'Sept 2025 - Present',
            title: 'Growth Consultant',
            company: 'FluxCreative Solutions',
            responsibilities: [
                'Supports growth strategy and execution planning',
                'Contributes to brand positioning and clarity',
                'Oversee social media platforms, talent recruitment and onboarding process'
            ]
        },
        {
            year: 'Dec 2025',
            title: 'Growth Consultant',
            company: 'WECare Workplace Foundation (Canada)',
            responsibilities: [
                'Supported grant application screening',
                'Contributed to growth and strategy discussions',
                'Oversaw digital presence and brand communication'
            ]
        },
        {
            year: '2025',
            title: 'Content Director / Multimedia Content Creator',
            company: 'Project Return 50 Million',
            responsibilities: [
                'Led content strategy for global virtual campaigns',
                'Created multimedia assets for events and discipleship programs',
                'Managed timelines and delivery across teams'
            ]
        },
        {
            year: 'June - Aug 2025',
            title: 'Content & Media Intern',
            company: 'FeniSaaS',
            responsibilities: [
                'Created content calendars',
                'Improved digital media graphics and brand presence',
                'Collaborated with technical and product teams'
            ]
        },
        {
            year: 'Oct 2024 - Present',
            title: 'Media Manager & Social Media Manager',
            company: 'The STEMite-Zone',
            responsibilities: [
                'Oversaw event video coverage',
                'Supported staff coordination and leadership',
                'Managed digital presence post-event'
            ]
        },
        {
            year: '2024',
            title: 'Social Media Manager',
            company: 'Yoruba Roots',
            responsibilities: [
                'Managed digital presence for a Yoruba language learning platform',
                'Created culturally relevant, educational content',
                'Supported engagement for diaspora audiences'
            ]
        },
        {
            year: '2023',
            title: 'Web Content Creator & Social Media Manager',
            company: 'DotHost & ATC Africa',
            responsibilities: [
                'Created content for websites and social media platforms',
                'Managed social media platforms and content calendars',
                'Improved content clarity and audience engagement'
            ]
        },
        {
            year: '2022',
            title: 'Content Creator Intern',
            company: 'JoyGivas',
            responsibilities: [
                'Supported senior content leads in ideation and execution',
                'Coordinated between content, graphics, and leadership teams',
                'Built foundational experience in structured content workflows'
            ]
        }
    ];

    create(): HTMLElement {
        const section = createElement('section', 'experience-section');
        section.id = 'experience';

        const container = createElement('div', 'container');

        const label = createElement('span', 'section-label', 'Professional Journey');
        label.setAttribute('data-aos', 'fade-up');

        const title = createElement('h2', 'section-title-center', 'Experience & Impact');
        title.setAttribute('data-aos', 'fade-up');

        const experienceGrid = createElement('div', 'experience-grid');

        this.experiences.forEach((exp, index) => {
            const card = createElement('div', 'experience-card');
            card.setAttribute('data-aos', 'fade-up');
            if (index > 0) {
                card.setAttribute('data-aos-delay', (index * 50).toString());
            }

            const header = createElement('div', 'experience-header');
            const year = createElement('span', 'experience-year', exp.year);
            header.appendChild(year);

            const body = createElement('div', 'experience-body');
            const titleEl = createElement('h3', 'experience-title', exp.title);
            const company = createElement('p', 'experience-company', exp.company);

            appendChildren(body, [titleEl, company]);

            if (exp.description) {
                const desc = createElement('p', 'experience-description', exp.description);
                body.appendChild(desc);
            }

            if (exp.responsibilities && exp.responsibilities.length > 0) {
                const list = createElement('ul', 'experience-list');
                exp.responsibilities.forEach(resp => {
                    const li = createElement('li', '', resp);
                    list.appendChild(li);
                });
                body.appendChild(list);
            }

            appendChildren(card, [header, body]);
            experienceGrid.appendChild(card);
        });

        appendChildren(container, [label, title, experienceGrid]);
        section.appendChild(container);

        return section;
    }
}

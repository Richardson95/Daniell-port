import { createElement, appendChildren } from '../utils/dom';
import type { Service } from '../types';

export class Services {
    private services: Service[] = [
        {
            icon: 'fa-solid fa-chart-line',
            title: 'Growth & Identity Strategy',
            description: 'Strategic consulting for brands and individuals seeking clarity and sustainable growth'
        },
        {
            icon: 'fa-solid fa-mobile-screen-button',
            title: 'Digital Media & Content Management',
            description: 'Comprehensive social media management and content strategy that drives engagement'
        },
        {
            icon: 'fa-solid fa-bullseye',
            title: 'Strategy & Execution',
            description: 'Transform ideas into actionable plans for businesses, events, and personal brands'
        },
        {
            icon: 'fa-solid fa-microphone-lines',
            title: 'Public Speaking & Facilitation',
            description: 'Engaging keynotes and facilitation for events, conferences, and educational programs'
        },
        {
            icon: 'fa-solid fa-people-group',
            title: 'Youth Development Programs',
            description: 'Mentorship and educational initiatives focused on identity and skills development'
        },
        {
            icon: 'fa-solid fa-briefcase',
            title: 'Consulting & Project Management',
            description: 'End-to-end project leadership and strategic consulting for impactful execution'
        }
    ];

    create(): HTMLElement {
        const section = createElement('section', 'services-section');

        const container = createElement('div', 'container');

        const label = createElement('span', 'section-label', 'Services');
        label.setAttribute('data-aos', 'fade-up');

        const title = createElement('h2', 'section-title-center', 'How You Can Work With Me');
        title.setAttribute('data-aos', 'fade-up');

        const grid = createElement('div', 'services-grid');

        this.services.forEach((service, index) => {
            const card = createElement('div', 'service-card');
            card.setAttribute('data-aos', 'flip-left');
            if (index > 0) {
                card.setAttribute('data-aos-delay', (index * 100).toString());
            }

            const iconDiv = createElement('div', 'service-icon');
            const icon = createElement('i');
            icon.className = service.icon;
            iconDiv.appendChild(icon);

            const serviceTitle = createElement('h3', '', service.title);
            const desc = createElement('p', '', service.description);

            appendChildren(card, [iconDiv, serviceTitle, desc]);
            grid.appendChild(card);
        });

        appendChildren(container, [label, title, grid]);
        section.appendChild(container);

        return section;
    }
}

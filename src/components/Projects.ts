import { createElement, appendChildren } from '../utils/dom';
import type { Project } from '../types';

export class Projects {
    private projects: Project[] = [
        {
            icon: 'fa-solid fa-users',
            title: 'EMERGE 2024',
            type: 'Youth Development Event',
            description: 'Physical youth-focused event with 150+ teenagers and young adults. Led strategy, planning, execution, and media coordination.',
            impact: ['150+ Attendees', 'Identity & Growth']
        },
        {
            icon: 'fa-solid fa-handshake',
            title: 'FITS Mentorship Community',
            type: 'Mentorship Program',
            description: 'Multi-phase mentorship program focused on identity discovery, skills acquisition, and project launch. Led strategy design, community coordination, and execution.',
            impact: ['Multi-Phase', 'Skills Development']
        },
        {
            icon: 'fa-solid fa-graduation-cap',
            title: 'The OPEN Students',
            type: 'Educational Initiative',
            description: 'Educational and youth development initiative. Led strategy, planning, and rollout preparation.',
            impact: ['Education', 'Youth Development']
        },
        {
            icon: 'fa-solid fa-microphone',
            title: 'Virtual Conferences',
            type: 'Event Hosting',
            description: 'Hosted impactful virtual events including "Visualization: The Music of Leadership" (2022) and "Footprints" (2023).',
            impact: ['Virtual Events', 'Leadership']
        }
    ];

    create(): HTMLElement {
        const section = createElement('section', 'projects-section');
        section.id = 'projects';

        const container = createElement('div', 'container');

        const label = createElement('span', 'section-label', 'Initiatives');
        label.setAttribute('data-aos', 'fade-up');

        const title = createElement('h2', 'section-title-center', 'Projects & Impact');
        title.setAttribute('data-aos', 'fade-up');

        const grid = createElement('div', 'projects-grid');

        this.projects.forEach((project, index) => {
            const card = createElement('div', 'project-card');
            card.setAttribute('data-aos', 'zoom-in');
            if (index > 0) {
                card.setAttribute('data-aos-delay', (index * 100).toString());
            }

            const iconDiv = createElement('div', 'project-icon');
            const icon = createElement('i');
            icon.className = project.icon;
            iconDiv.appendChild(icon);

            const projectTitle = createElement('h3', 'project-title', project.title);
            const type = createElement('p', 'project-type', project.type);
            const desc = createElement('p', 'project-description', project.description);

            const impactDiv = createElement('div', 'project-impact');
            project.impact.forEach(tag => {
                const tagEl = createElement('span', 'impact-tag', tag);
                impactDiv.appendChild(tagEl);
            });

            appendChildren(card, [iconDiv, projectTitle, type, desc, impactDiv]);
            grid.appendChild(card);
        });

        appendChildren(container, [label, title, grid]);
        section.appendChild(container);

        return section;
    }
}

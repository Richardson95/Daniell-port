import { createElement, appendChildren } from '../utils/dom';

export class Certifications {
    create(): HTMLElement {
        const section = createElement('section', 'certifications-section');

        const container = createElement('div', 'container');

        const label = createElement('span', 'section-label', 'Training & Teaching');
        label.setAttribute('data-aos', 'fade-up');

        const title = createElement('h2', 'section-title-center', 'Certifications & Community Impact');
        title.setAttribute('data-aos', 'fade-up');

        const grid = createElement('div', 'cert-grid');

        // Certifications Column
        const certColumn = createElement('div', 'cert-column');
        certColumn.setAttribute('data-aos', 'fade-right');

        const certTitle = createElement('h3', 'cert-column-title', 'Certifications & Training');
        const certList = createElement('ul', 'cert-list');

        const certs = [
            'Public Speaking & Communication',
            'Digital Media & Content Creation',
            'Leadership & Personal Development',
            'Strategy & Growth'
        ];

        certs.forEach(cert => {
            const li = createElement('li', '', cert);
            certList.appendChild(li);
        });

        appendChildren(certColumn, [certTitle, certList]);

        // Teaching Column
        const teachingColumn = createElement('div', 'cert-column');
        teachingColumn.setAttribute('data-aos', 'fade-left');

        const teachingTitle = createElement('h3', 'cert-column-title', 'Teaching & Facilitation');

        // Digital Skills Tutor
        const teachingItem1 = createElement('div', 'teaching-item');
        const item1Title = createElement('h4', '', 'Digital Skills Tutor');
        const item1Subtitle = createElement('p', '', 'Teenagers & Youth Camp, 2023');
        const item1Details = createElement('p', 'teaching-details',
            'Taught writing, graphic design, video editing using Grammarly, ChatGPT, Canva, InShot, CapCut to 3,000 participants.'
        );
        appendChildren(teachingItem1, [item1Title, item1Subtitle, item1Details]);

        // Academic Tutoring
        const teachingItem2 = createElement('div', 'teaching-item');
        const item2Title = createElement('h4', '', 'Academic Tutoring');
        const item2Details = createElement('p', '', 'Coached a public school student to achieve 8 A\'s in Junior WAEC');
        appendChildren(teachingItem2, [item2Title, item2Details]);

        // Community Volunteer
        const teachingItem3 = createElement('div', 'teaching-item');
        const item3Title = createElement('h4', '', 'Community Volunteer');
        const volunteerList = createElement('ul', 'volunteer-list');

        const volunteers = [
            'Village Outreach Volunteer - Ogun & Oyo States',
            'Protocol Volunteer - ICC 2024',
            'Event Volunteer - Groovy Monoshow & Runway Jazz'
        ];

        volunteers.forEach(vol => {
            const li = createElement('li', '', vol);
            volunteerList.appendChild(li);
        });

        appendChildren(teachingItem3, [item3Title, volunteerList]);
        appendChildren(teachingColumn, [teachingTitle, teachingItem1, teachingItem2, teachingItem3]);
        appendChildren(grid, [certColumn, teachingColumn]);
        appendChildren(container, [label, title, grid]);
        section.appendChild(container);

        return section;
    }
}

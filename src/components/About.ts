import { createElement, appendChildren, setAttributes } from '../utils/dom';

export class About {
    create(): HTMLElement {
        const section = createElement('section', 'about-section');
        section.id = 'about';

        const container = createElement('div', 'container');
        const content = createElement('div', 'about-content');

        // Image
        const aboutImage = createElement('div', 'about-image');
        aboutImage.setAttribute('data-aos', 'fade-right');

        const imgWrapper = createElement('div', 'about-img-wrapper');
        const img = createElement('img');
        setAttributes(img, {
            'src': '/images/profile/daniellaimage1.jpg',
            'alt': 'Daniella Williams'
        });

        const decoration = createElement('div', 'about-decoration');
        appendChildren(imgWrapper, [img, decoration]);
        aboutImage.appendChild(imgWrapper);

        // Text Content
        const aboutText = createElement('div', 'about-text');
        aboutText.setAttribute('data-aos', 'fade-left');

        const label = createElement('span', 'section-label', 'About Me');
        const title = createElement('h2', 'section-title', 'Professional Story');

        const paragraphs = [
            'I began my professional journey in 2020, working across content creation, media coordination, and digital strategy. My work spans social media management, growth strategy, event coordination, public speaking, mentorship, and consulting.',
            'I currently balance hands-on consulting and project leadership across education, nonprofit, faith-based, and creative initiatives, while pursuing academic training in Computer Science and Biotechnology.'
        ];

        const paragraphElements = paragraphs.map(text =>
            createElement('p', 'about-paragraph', text)
        );

        // Highlights
        const highlights = createElement('div', 'about-highlights');

        const highlightsData = [
            'Growth & Identity Consultant',
            'Digital Media & Content Strategist',
            'Event Strategist & Speaker',
            'Nigeria & Canada-based Engagements'
        ];

        highlightsData.forEach(text => {
            const item = createElement('div', 'highlight-item');
            const icon = createElement('div', 'highlight-icon', '✓');
            const span = createElement('span', '', text);
            appendChildren(item, [icon, span]);
            highlights.appendChild(item);
        });

        appendChildren(aboutText, [label, title, ...paragraphElements, highlights]);
        appendChildren(content, [aboutImage, aboutText]);
        container.appendChild(content);
        section.appendChild(container);

        return section;
    }
}

import { createElement, appendChildren, setAttributes } from '../utils/dom';

export class FitsMentorship {
    create(): HTMLElement {
        const section = createElement('section', 'fits-section');
        section.id = 'fits-mentorship';

        const container = createElement('div', 'container');

        // Section Header
        const label = createElement('span', 'section-label', 'Mentorship Program');
        label.setAttribute('data-aos', 'fade-up');

        const title = createElement('h2', 'section-title-center', 'FITS Mentorship Program');
        title.setAttribute('data-aos', 'fade-up');

        const description = createElement('p', 'section-description-center');
        description.textContent = 'Empowering young women through structured mentorship, guidance, and community building. FITS (Faithful, Intentional, Teachable, Surrendered) is a transformative program focused on identity, purpose, and personal growth.';
        description.setAttribute('data-aos', 'fade-up');
        description.setAttribute('data-aos-delay', '100');

        // Content Grid
        const content = createElement('div', 'fits-content');

        // Left - Program Details
        const details = createElement('div', 'fits-details');
        details.setAttribute('data-aos', 'fade-right');

        const highlightsTitle = createElement('h3', 'fits-subtitle', 'Program Highlights');
        const highlightsList = createElement('ul', 'fits-highlights-list');

        const highlights = [
            'Weekly mentorship sessions',
            'Identity and purpose development',
            'Faith-based guidance and support',
            'Community building among young women',
            'Practical life skills training',
            'Goal setting and accountability'
        ];

        highlights.forEach(highlight => {
            const li = createElement('li', 'fits-highlight-item');
            const icon = createElement('span', 'highlight-icon', '✓');
            const text = createElement('span', '', highlight);
            appendChildren(li, [icon, text]);
            highlightsList.appendChild(li);
        });

        // Impact Stats
        const stats = createElement('div', 'fits-stats');

        const statsData = [
            { number: '20+', label: 'Mentees' },
            { number: '6', label: 'Months' },
            { number: '100%', label: 'Commitment' }
        ];

        statsData.forEach(stat => {
            const statBox = createElement('div', 'fits-stat-box');
            const number = createElement('div', 'fits-stat-number', stat.number);
            const label = createElement('div', 'fits-stat-label', stat.label);
            appendChildren(statBox, [number, label]);
            stats.appendChild(statBox);
        });

        appendChildren(details, [highlightsTitle, highlightsList, stats]);

        // Right - Image Showcase
        const showcase = createElement('div', 'fits-showcase');
        showcase.setAttribute('data-aos', 'fade-left');

        const showcaseTitle = createElement('h3', 'fits-subtitle', 'Program in Action');

        const imageGrid = createElement('div', 'fits-image-grid');

        // Add 3-4 featured images from profile folder
        const featuredImages = [
            '/images/profile/daniellaimage2.jpg',
            '/images/profile/daniellaimage4.jpeg',
            '/images/profile/daniellaimage.jpg'
        ];

        featuredImages.forEach((imgSrc, index) => {
            const imgWrapper = createElement('div', 'fits-image-wrapper');
            const img = createElement('img', 'fits-image');
            setAttributes(img, {
                'src': imgSrc,
                'alt': `FITS Mentorship Program ${index + 1}`,
                'loading': 'lazy'
            });
            imgWrapper.appendChild(img);
            imageGrid.appendChild(imgWrapper);
        });

        appendChildren(showcase, [showcaseTitle, imageGrid]);

        appendChildren(content, [details, showcase]);

        // CTA Button
        const ctaContainer = createElement('div', 'fits-cta');
        ctaContainer.setAttribute('data-aos', 'fade-up');

        const ctaBtn = createElement('a', 'btn btn-primary');
        ctaBtn.textContent = 'Learn More About FITS';
        ctaBtn.href = '#contact';

        ctaContainer.appendChild(ctaBtn);

        appendChildren(container, [label, title, description, content, ctaContainer]);
        section.appendChild(container);

        return section;
    }
}

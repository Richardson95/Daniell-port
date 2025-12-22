import { createElement, appendChildren, setAttributes } from '../utils/dom';

export class Hero {
    create(): HTMLElement {
        const section = createElement('section', 'hero');
        section.id = 'home';

        // Content Container
        const container = createElement('div', 'container');
        const content = createElement('div', 'hero-content');

        // Left Content
        const leftContent = createElement('div', 'hero-left');

        const greeting = createElement('div', 'hero-greeting');
        greeting.innerHTML = '<span class="wave">👋</span> Hello, I\'m';
        greeting.setAttribute('data-aos', 'fade-down');

        const name = createElement('h1', 'hero-name');
        name.innerHTML = 'Daniella<br><span class="highlight">WILLIAMS</span>';
        name.setAttribute('data-aos', 'fade-right');

        const tagline = createElement('h2', 'hero-tagline');
        tagline.textContent = 'Growth & Identity Consultant';
        tagline.setAttribute('data-aos', 'fade-right');
        tagline.setAttribute('data-aos-delay', '100');

        const description = createElement('p', 'hero-description');
        description.textContent = 'Transforming ideas into impactful execution across media, strategy, events, and education. With 6+ years of experience building clarity and structure for brands and individuals.';
        description.setAttribute('data-aos', 'fade-up');
        description.setAttribute('data-aos-delay', '200');

        // Stats Row
        const statsRow = createElement('div', 'hero-stats-row');
        statsRow.setAttribute('data-aos', 'fade-up');
        statsRow.setAttribute('data-aos-delay', '300');

        const stats = [
            { number: '6+', label: 'Years' },
            { number: '15+', label: 'Brands' },
            { number: '3,000+', label: 'Lives Impacted' }
        ];

        stats.forEach((stat) => {
            const statItem = createElement('div', 'stat-box');
            const number = createElement('div', 'stat-number');
            number.textContent = stat.number;
            const label = createElement('div', 'stat-label');
            label.textContent = stat.label;
            appendChildren(statItem, [number, label]);
            statsRow.appendChild(statItem);
        });

        // CTA Buttons
        const ctaButtons = createElement('div', 'hero-cta-buttons');
        ctaButtons.setAttribute('data-aos', 'fade-up');
        ctaButtons.setAttribute('data-aos-delay', '400');

        const primaryBtn = createElement('a', 'btn btn-primary');
        primaryBtn.innerHTML = '<span>Let\'s Work Together</span><span class="arrow">→</span>';
        primaryBtn.href = '#contact';

        const secondaryBtn = createElement('a', 'btn btn-secondary');
        secondaryBtn.innerHTML = '<span>View My Work</span>';
        secondaryBtn.href = '#experience';

        appendChildren(ctaButtons, [primaryBtn, secondaryBtn]);

        appendChildren(leftContent, [greeting, name, tagline, description, statsRow, ctaButtons]);

        // Right Content - Image
        const rightContent = createElement('div', 'hero-right');
        rightContent.setAttribute('data-aos', 'fade-left');
        rightContent.setAttribute('data-aos-delay', '200');

        const imageContainer = createElement('div', 'hero-image-container');

        // Main Image
        const mainImage = createElement('img', 'hero-main-image');
        setAttributes(mainImage, {
            'src': '/images/profile/daniellaimage3.jpeg',
            'alt': 'Daniella Williams'
        });

        appendChildren(imageContainer, [mainImage]);
        rightContent.appendChild(imageContainer);

        appendChildren(content, [leftContent, rightContent]);
        container.appendChild(content);

        // Scroll Indicator
        const scrollIndicator = createElement('div', 'scroll-indicator');
        scrollIndicator.innerHTML = '<div class="mouse"><div class="wheel"></div></div><p>Scroll Down</p>';

        appendChildren(section, [container, scrollIndicator]);

        return section;
    }
}

import { createElement, appendChildren } from '../utils/dom';

export class Brands {
    create(): HTMLElement {
        const section = createElement('section', 'brands-section');

        const container = createElement('div', 'container');

        const title = createElement('h2', 'section-title-center', 'Trusted By Leading Brands');
        title.setAttribute('data-aos', 'fade-up');

        // Carousel
        const carousel = createElement('div', 'brands-slider');
        const track = createElement('div', 'brands-track');

        const brandImages = [
            'brandworkwith.PNG',
            'brandworkwith1.PNG',
            'brandworkwith2.PNG',
            'brandworkwith3.PNG',
            'brandworkwith4.PNG',
            'brandworkwith5.PNG',
            'brandworkwith6.PNG',
            'brandworkwith7.PNG'
        ];

        // Add images twice for seamless loop
        [...brandImages, ...brandImages].forEach(brand => {
            const item = createElement('div', 'brand-logo');
            const img = createElement('img');
            img.src = `/images/brands/${brand}`;
            img.alt = 'Brand';
            item.appendChild(img);
            track.appendChild(item);
        });

        carousel.appendChild(track);
        appendChildren(container, [title, carousel]);
        section.appendChild(container);

        return section;
    }
}

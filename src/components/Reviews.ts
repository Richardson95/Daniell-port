import { createElement, appendChildren, setAttributes } from '../utils/dom';

export class Reviews {
    create(): HTMLElement {
        const section = createElement('section', 'reviews-section');
        section.id = 'reviews';

        const container = createElement('div', 'container');

        // Section Header
        const label = createElement('span', 'section-label', 'Testimonials');
        label.setAttribute('data-aos', 'fade-up');

        const title = createElement('h2', 'section-title-center', 'FITS Mentorship Reviews');
        title.setAttribute('data-aos', 'fade-up');

        const subtitle = createElement('p', 'section-description-center');
        subtitle.textContent = 'Hear from the youths whose lives have been transformed through the FITS Mentorship Program.';
        subtitle.setAttribute('data-aos', 'fade-up');
        subtitle.setAttribute('data-aos-delay', '100');

        // Reviews Grid
        const reviewsGrid = createElement('div', 'reviews-grid');
        reviewsGrid.setAttribute('data-aos', 'fade-up');
        reviewsGrid.setAttribute('data-aos-delay', '200');

        // Add all review images
        const reviewImages = [
            'Review.jpg',
            'Review1.jpg',
            'Review2.jpg',
            'Review3.jpg',
            'Review4.jpg',
            'Review5.PNG',
            'Review6.PNG',
            'Review7.PNG',
            'Review8.jpg',
            'Review9.jpg',
            'Review10.jpg',
            'Review11.jpg'
        ];

        reviewImages.forEach((img, index) => {
            const reviewCard = createElement('div', 'review-card');
            reviewCard.setAttribute('data-aos', 'zoom-in');
            reviewCard.setAttribute('data-aos-delay', `${100 + (index % 6) * 50}`);

            const imgWrapper = createElement('div', 'review-image-wrapper');
            const reviewImg = createElement('img', 'review-image');
            setAttributes(reviewImg, {
                'src': `/images/reviews/${img}`,
                'alt': `FITS Mentorship Review ${index + 1}`,
                'loading': 'lazy'
            });

            imgWrapper.appendChild(reviewImg);
            reviewCard.appendChild(imgWrapper);
            reviewsGrid.appendChild(reviewCard);
        });

        appendChildren(container, [label, title, subtitle, reviewsGrid]);
        section.appendChild(container);

        return section;
    }
}

import { createElement, appendChildren, setAttributes } from '../utils/dom';
import type { Engagement } from '../types';

export class Speaking {
    private engagements: Engagement[] = [
        {
            title: "St. Michael's Public School",
            date: 'February 14, 2025',
            topic: 'Topic: Digital Media & Identity: Harnessing Influence as a Young Person',
            audience: '200+ students'
        },
        {
            title: 'Joshua Generation Bootcamp (KBRNI)',
            date: '2022',
            topic: 'Leadership and Youth Development'
        },
        {
            title: 'Cameroon Radio Interview',
            date: '2022',
            topic: 'Growth, Strategy, and Digital Influence'
        },
        {
            title: 'Multiple Virtual Conferences & Panels',
            date: '',
            topic: 'Various topics on leadership, strategy, and youth development'
        }
    ];

    create(): HTMLElement {
        const section = createElement('section', 'speaking-section');
        section.id = 'speaking';

        const container = createElement('div', 'container');

        const label = createElement('span', 'section-label', 'Speaking & Events');
        label.setAttribute('data-aos', 'fade-up');

        const title = createElement('h2', 'section-title-center', 'Empowering Through Words');
        title.setAttribute('data-aos', 'fade-up');

        const content = createElement('div', 'speaking-content');

        // Speaking Gallery
        const speakingGallery = createElement('div', 'speaking-gallery');
        speakingGallery.setAttribute('data-aos', 'fade-up');

        const speakingImages = [
            '/images/speaking/Speaking.jpg',
            '/images/speaking/Speaking1.PNG',
            '/images/speaking/Speaking2.jpg',
            '/images/speaking/Speaking3.jpg'
        ];

        speakingImages.forEach((imgSrc, index) => {
            const imgWrapper = createElement('div', 'speaking-image-wrapper');
            imgWrapper.setAttribute('data-aos', 'zoom-in');
            imgWrapper.setAttribute('data-aos-delay', `${index * 100}`);

            const img = createElement('img', 'speaking-image');
            setAttributes(img, {
                'src': imgSrc,
                'alt': `Speaking Engagement ${index + 1}`,
                'loading': 'lazy'
            });

            imgWrapper.appendChild(img);
            speakingGallery.appendChild(imgWrapper);
        });

        // Speaking Info
        const speakingInfo = createElement('div', 'speaking-info');
        speakingInfo.setAttribute('data-aos', 'fade-right');

        const statBox = createElement('div', 'speaking-stat-box');
        const stat = createElement('h3', 'speaking-stat', '50 - 3,000+');
        const statLabel = createElement('p', 'speaking-stat-label', 'Audience Range');
        appendChildren(statBox, [stat, statLabel]);

        // Topics
        const topicsDiv = createElement('div', 'speaking-topics');
        const topicsHeading = createElement('h4', 'topics-heading', 'Speaking Topics');
        const topicsList = createElement('ul', 'topics-list');

        const topics = [
            'Growth & Strategy',
            'Digital Media & Influence',
            'Leadership & Identity',
            'Youth Development',
            'Faith and Purpose'
        ];

        topics.forEach(topic => {
            const li = createElement('li', '', topic);
            topicsList.appendChild(li);
        });

        appendChildren(topicsDiv, [topicsHeading, topicsList]);

        // Venues
        const venuesDiv = createElement('div', 'speaking-venues');
        const venuesHeading = createElement('h4', 'venues-heading', 'Speaking Experience');
        const venuesList = createElement('ul', 'venues-list');

        const venues = [
            'Public Schools',
            'Youth Camps',
            'Conferences & Bootcamps',
            'Faith-based Gatherings',
            'Virtual and Physical Events'
        ];

        venues.forEach(venue => {
            const li = createElement('li', '', venue);
            venuesList.appendChild(li);
        });

        appendChildren(venuesDiv, [venuesHeading, venuesList]);
        appendChildren(speakingInfo, [statBox, topicsDiv, venuesDiv]);

        // Speaking Engagements
        const engagementsDiv = createElement('div', 'speaking-engagements');
        engagementsDiv.setAttribute('data-aos', 'fade-left');

        const engagementsHeading = createElement('h4', 'engagements-heading', 'Notable Engagements');
        engagementsDiv.appendChild(engagementsHeading);

        this.engagements.forEach(engagement => {
            const item = createElement('div', 'engagement-item');
            const marker = createElement('div', 'engagement-marker');
            const engContent = createElement('div', 'engagement-content');

            const engTitle = createElement('h5', '', engagement.title);
            engContent.appendChild(engTitle);

            if (engagement.date) {
                const date = createElement('p', 'engagement-date', engagement.date);
                engContent.appendChild(date);
            }

            const topicEl = createElement('p', 'engagement-topic', engagement.topic);
            engContent.appendChild(topicEl);

            if (engagement.audience) {
                const audience = createElement('p', 'engagement-audience', engagement.audience);
                engContent.appendChild(audience);
            }

            appendChildren(item, [marker, engContent]);
            engagementsDiv.appendChild(item);
        });

        const speakingBtn = createElement('a', 'btn btn-primary btn-speaking', 'Invite Me to Speak');
        setAttributes(speakingBtn, { 'href': '#contact' });
        engagementsDiv.appendChild(speakingBtn);

        appendChildren(content, [speakingInfo, engagementsDiv]);

        // Add gallery at the end
        content.appendChild(speakingGallery);
        appendChildren(container, [label, title, content]);
        section.appendChild(container);

        return section;
    }
}

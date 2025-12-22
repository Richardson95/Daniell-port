import { createElement, appendChildren, setAttributes, createElementWithHTML } from '../utils/dom';

export class Contact {
    create(): HTMLElement {
        const section = createElement('section', 'contact-section');
        section.id = 'contact';

        const container = createElement('div', 'container');

        const label = createElement('span', 'section-label', 'Get In Touch');
        label.setAttribute('data-aos', 'fade-up');

        const title = createElement('h2', 'section-title-center', "Let's Work Together");
        title.setAttribute('data-aos', 'fade-up');

        const intro = createElement('p', 'contact-intro',
            'Ready to bring clarity, strategy, and impactful execution to your next project? Let\'s connect and make it happen.'
        );
        intro.setAttribute('data-aos', 'fade-up');

        const cards = createElement('div', 'contact-cards');

        // WhatsApp Card
        const whatsappCard = createElement('a', 'contact-card whatsapp-card');
        setAttributes(whatsappCard, {
            'href': 'https://wa.me/2349160404063',
            'target': '_blank',
            'rel': 'noopener',
            'data-aos': 'zoom-in'
        });

        const whatsappIcon = createElementWithHTML('div', 'contact-icon', `
            <i class="fa-brands fa-whatsapp"></i>
        `);
        const whatsappTitle = createElement('h3', '', 'WhatsApp');
        const whatsappText = createElement('p', '', '+234 916 040 4063');
        appendChildren(whatsappCard, [whatsappIcon, whatsappTitle, whatsappText]);

        // Phone Card
        const phoneCard = createElement('a', 'contact-card phone-card');
        setAttributes(phoneCard, {
            'href': 'tel:+2349160404063',
            'data-aos': 'zoom-in',
            'data-aos-delay': '100'
        });

        const phoneIcon = createElementWithHTML('div', 'contact-icon', `
            <i class="fa-solid fa-phone"></i>
        `);
        const phoneTitle = createElement('h3', '', 'Call Me');
        const phoneText = createElement('p', '', '09160404063');
        appendChildren(phoneCard, [phoneIcon, phoneTitle, phoneText]);

        // Email Card
        const emailCard = createElement('a', 'contact-card email-card');
        setAttributes(emailCard, {
            'href': 'mailto:sheisdaniellawilliams@gmail.com',
            'data-aos': 'zoom-in',
            'data-aos-delay': '200'
        });

        const emailIcon = createElementWithHTML('div', 'contact-icon', `
            <i class="fa-solid fa-envelope"></i>
        `);
        const emailTitle = createElement('h3', '', 'Email');
        const emailText = createElement('p', '', 'sheisdaniellawilliams@gmail.com');
        appendChildren(emailCard, [emailIcon, emailTitle, emailText]);

        appendChildren(cards, [whatsappCard, phoneCard, emailCard]);

        // Location
        const location = createElement('div', 'contact-location');
        location.setAttribute('data-aos', 'fade-up');

        const locationIcon = createElement('i', 'location-icon');
        locationIcon.className = 'fa-solid fa-location-dot location-icon';

        const locationText = createElement('p', '', 'Based in Nigeria | Available for Global Engagements');
        location.appendChild(locationIcon);
        location.appendChild(locationText);

        appendChildren(container, [label, title, intro, cards, location]);
        section.appendChild(container);

        return section;
    }
}

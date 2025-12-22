import { createElement, appendChildren } from '../utils/dom';

export class Footer {
    create(): HTMLElement {
        const footer = createElement('footer', 'footer');
        const container = createElement('div', 'container');
        const content = createElement('div', 'footer-content');

        // Footer brand
        const brand = createElement('div', 'footer-brand');
        const logo = createElement('h3', 'footer-logo', 'Daniella Williams');
        const tagline = createElement('p', 'footer-tagline', 'Strategy • Management • Media • Events');
        appendChildren(brand, [logo, tagline]);

        // Quick links
        const links = createElement('div', 'footer-links');
        const linksTitle = createElement('h4', '', 'Quick Links');
        const linksList = createElement('ul', '');

        const navLinks = [
            { text: 'About', href: '#about' },
            { text: 'Experience', href: '#experience' },
            { text: 'Projects', href: '#projects' },
            { text: 'Speaking', href: '#speaking' },
            { text: 'Contact', href: '#contact' }
        ];

        navLinks.forEach(link => {
            const li = createElement('li', '');
            const a = createElement('a', '');
            a.href = link.href;
            a.textContent = link.text;
            li.appendChild(a);
            linksList.appendChild(li);
        });

        appendChildren(links, [linksTitle, linksList]);

        // Contact info
        const contactInfo = createElement('div', 'footer-contact');
        const contactTitle = createElement('h4', '', 'Contact');
        const contactList = createElement('div', 'footer-contact-list');

        const email = createElement('a', 'footer-contact-item');
        email.href = 'mailto:sheisdaniellawilliams@gmail.com';
        email.innerHTML = '<i class="fa-solid fa-envelope"></i> sheisdaniellawilliams@gmail.com';

        const phone = createElement('a', 'footer-contact-item');
        phone.href = 'tel:+2349160404063';
        phone.innerHTML = '<i class="fa-solid fa-phone"></i> +234 916 040 4063';

        const whatsapp = createElement('a', 'footer-contact-item');
        whatsapp.href = 'https://wa.me/2349160404063';
        whatsapp.target = '_blank';
        whatsapp.innerHTML = '<i class="fa-brands fa-whatsapp"></i> WhatsApp';

        const location = createElement('div', 'footer-contact-item');
        location.innerHTML = '<i class="fa-solid fa-location-dot"></i> Nigeria';

        appendChildren(contactList, [email, phone, whatsapp, location]);
        appendChildren(contactInfo, [contactTitle, contactList]);

        appendChildren(content, [brand, links, contactInfo]);

        // Copyright
        const copyright = createElement('div', 'footer-copyright');
        copyright.innerHTML = `© ${new Date().getFullYear()} Daniella Williams. All rights reserved.`;

        appendChildren(container, [content, copyright]);
        footer.appendChild(container);

        return footer;
    }
}

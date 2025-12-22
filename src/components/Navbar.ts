import { createElement, appendChildren, setAttributes } from '../utils/dom';

export class Navbar {
    private nav: HTMLElement;
    private isScrolled = false;

    constructor() {
        this.nav = this.createNavbar();
        this.initScrollBehavior();
        this.initMobileMenu();
    }

    private createNavbar(): HTMLElement {
        const nav = createElement('nav', 'navbar');
        nav.id = 'navbar';

        const container = createElement('div', 'nav-container');

        // Logo
        const logo = createElement('div', 'logo');
        logo.id = 'logo';
        logo.style.cursor = 'pointer';

        const logoImg = createElement('img');
        setAttributes(logoImg, {
            'src': '/TDW Brand - 10.PNG',
            'alt': 'Daniella Williams Logo',
            'style': 'height: 50px; width: auto;'
        });

        // Click logo to WhatsApp
        logo.addEventListener('click', () => {
            window.open('https://wa.me/2349160404063', '_blank');
        });

        logo.appendChild(logoImg);

        // Menu Toggle Button
        const menuToggle = createElement('button', 'mobile-menu-btn');
        menuToggle.id = 'menuToggle';
        appendChildren(
            menuToggle,
            [createElement('span'),
            createElement('span'),
            createElement('span')]
        );

        // Navigation Menu
        const navMenu = createElement('ul', 'nav-links');
        navMenu.id = 'navMenu';

        const menuItems = [
            { text: 'Home', href: '#home' },
            { text: 'About', href: '#about' },
            { text: 'Experience', href: '#experience' },
            { text: 'Projects', href: '#projects' },
            { text: 'Speaking', href: '#speaking' },
            { text: 'Work With Me', href: '#contact' }
        ];

        menuItems.forEach(item => {
            const li = createElement('li');
            const link = createElement('a', '', item.text);
            setAttributes(link, { 'href': item.href });
            li.appendChild(link);
            navMenu.appendChild(li);
        });

        appendChildren(container, [logo, menuToggle, navMenu]);
        nav.appendChild(container);

        return nav;
    }

    private initScrollBehavior(): void {
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY > 50;
            if (scrolled !== this.isScrolled) {
                this.isScrolled = scrolled;
                this.nav.classList.toggle('scrolled', scrolled);
            }
        });
    }

    private initMobileMenu(): void {
        const menuToggle = this.nav.querySelector('#menuToggle');
        const navMenu = this.nav.querySelector('#navMenu');

        menuToggle?.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navMenu?.classList.toggle('active');
        });

        // Close menu when clicking nav links
        navMenu?.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle?.classList.remove('active');
                navMenu?.classList.remove('active');
            });
        });
    }

    render(): HTMLElement {
        return this.nav;
    }

    create(): HTMLElement {
        return this.nav;
    }
}

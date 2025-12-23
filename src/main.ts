import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Brands } from './components/Brands';
import { About } from './components/About';
import { ExperienceSection } from './components/Experience';
import { Projects } from './components/Projects';
import { FitsMentorship } from './components/FitsMentorship';
import { Reviews } from './components/Reviews';
import { Speaking } from './components/Speaking';
import { Certifications } from './components/Certifications';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AnimationObserver } from './utils/animations';

class App {
    private animationObserver: AnimationObserver;

    constructor() {
        this.animationObserver = new AnimationObserver();
        this.init();
    }

    private init(): void {
        const app = document.getElementById('app');
        if (!app) return;

        // Create navbar
        const navbar = new Navbar();
        document.body.insertBefore(navbar.create(), app);

        // Create all sections
        const hero = new Hero();
        const brands = new Brands();
        const about = new About();
        const experience = new ExperienceSection();
        const projects = new Projects();
        const fitsMentorship = new FitsMentorship();
        const reviews = new Reviews();
        const speaking = new Speaking();
        const certifications = new Certifications();
        const services = new Services();
        const contact = new Contact();
        const footer = new Footer();

        // Append all sections
        app.appendChild(hero.create());
        app.appendChild(brands.create());
        app.appendChild(about.create());
        app.appendChild(experience.create());
        app.appendChild(projects.create());
        app.appendChild(fitsMentorship.create());
        app.appendChild(reviews.create());
        app.appendChild(speaking.create());
        app.appendChild(certifications.create());
        app.appendChild(services.create());
        app.appendChild(contact.create());
        app.appendChild(footer.create());

        // Initialize animations
        const animatedElements = document.querySelectorAll('[data-aos]');
        this.animationObserver.observeMultiple(Array.from(animatedElements));

        // Add smooth scroll behavior
        this.initSmoothScroll();

        // Add cursor effects
        this.initCursorEffects();

        // Add floating particles
        this.addFloatingParticles();
    }

    private initSmoothScroll(): void {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const href = anchor.getAttribute('href');
                if (href && href !== '#') {
                    const target = document.querySelector(href);
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }
            });
        });
    }

    private initCursorEffects(): void {
        const cursor = document.createElement('div');
        cursor.className = 'custom-cursor';
        document.body.appendChild(cursor);

        const cursorFollower = document.createElement('div');
        cursorFollower.className = 'custom-cursor-follower';
        document.body.appendChild(cursorFollower);

        let mouseX = 0, mouseY = 0;
        let followerX = 0, followerY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            cursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
        });

        const animateFollower = () => {
            followerX += (mouseX - followerX) * 0.1;
            followerY += (mouseY - followerY) * 0.1;
            cursorFollower.style.transform = `translate(${followerX}px, ${followerY}px)`;
            requestAnimationFrame(animateFollower);
        };
        animateFollower();

        // Add hover effects
        document.querySelectorAll('a, button').forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.classList.add('cursor-hover');
                cursorFollower.classList.add('cursor-hover');
            });
            el.addEventListener('mouseleave', () => {
                cursor.classList.remove('cursor-hover');
                cursorFollower.classList.remove('cursor-hover');
            });
        });
    }

    private addFloatingParticles(): void {
        const particlesContainer = document.createElement('div');
        particlesContainer.className = 'floating-particles';
        document.body.appendChild(particlesContainer);

        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.animationDelay = `${Math.random() * 5}s`;
            particle.style.animationDuration = `${10 + Math.random() * 10}s`;
            particlesContainer.appendChild(particle);
        }
    }
}

// Initialize the app
new App();

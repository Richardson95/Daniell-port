export class AnimationObserver {
    private observer: IntersectionObserver;

    constructor() {
        this.observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in');
                    }
                });
            },
            { threshold: 0.1 }
        );
    }

    observe(element: Element): void {
        this.observer.observe(element);
    }

    observeMultiple(elements: Element[]): void {
        elements.forEach(el => this.observe(el));
    }
}

export function addScrollAnimation(element: HTMLElement, animation: string, delay: number = 0): void {
    element.setAttribute('data-aos', animation);
    if (delay > 0) {
        element.setAttribute('data-aos-delay', delay.toString());
    }
}

export function initSmoothScroll(): void {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
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

export function initParallax(): void {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll<HTMLElement>('.parallax');

        parallaxElements.forEach(element => {
            const speed = parseFloat(element.getAttribute('data-speed') || '0.5');
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

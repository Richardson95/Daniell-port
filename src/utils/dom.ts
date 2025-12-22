export function createElement<K extends keyof HTMLElementTagNameMap>(
    tag: K,
    className?: string,
    textContent?: string
): HTMLElementTagNameMap[K] {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (textContent) element.textContent = textContent;
    return element;
}

export function createElementWithHTML(
    tag: keyof HTMLElementTagNameMap,
    className: string,
    html: string
): HTMLElement {
    const element = createElement(tag, className);
    element.innerHTML = html;
    return element;
}

export function appendChildren(parent: HTMLElement, children: (HTMLElement | string)[] | HTMLElement | string): void {
    const childArray = Array.isArray(children) ? children : [children];
    childArray.forEach(child => {
        if (typeof child === 'string') {
            parent.appendChild(document.createTextNode(child));
        } else {
            parent.appendChild(child);
        }
    });
}

export function setAttributes(element: HTMLElement, attributes: Record<string, string>): void {
    Object.entries(attributes).forEach(([key, value]) => {
        element.setAttribute(key, value);
    });
}

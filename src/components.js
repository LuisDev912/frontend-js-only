export function createTitle(text) {
    const h1 = document.createElement('h1');
    h1.innerText = text;
    return h1;
}

export function createButton(text, onClick) {
    const btn = document.createElement('button');
    btn.innerText = text;
    btn.addEventListener('click', onClick);
    btn.style.padding = "0.5rem, 1rem";
    btn.style.borderRadius = "5px";
    return btn;
}

export function createInput(placeholder) {
    const input = document.createElement('input');
    input.setAttribute('placeholder', placeholder);
    input.style.borderRadius = "5px";
    input.style.border = "1px solid #ccc";
    input.style.padding = "0.5rem";
    return input;
}

export class Task{
    constructor(text) {
        this.element = document.createElement('li');
        this.element.style.display = 'flex';
        this.element.style.alignItems = 'center';
        this.element.style.gap = '0.5rem';

        // checkbox
        this.checkbox = document.createElement('input');
        this.checkbox.type = 'checkbox';

        // label with text
        this.label = document.createElement('label');
        this.label.innerText = text;

        // checkbox styles
        this.checkbox.addEventListener('change', () => {
            if (this.checkbox.checked) {
                this.label.style.textDecoration = 'line-through';
            } else {
                this.label.style.textDecoration = 'none';
            }
        });

        this.element.appendChild(this.checkbox);
        this.element.appendChild(this.label);
    }

    render(parent) {
        parent.appendChild(this.element);
    }
}
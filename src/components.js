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
    input.style.placeholder = placeholder;
    input.style.borderRadius = "5px";
    input.style.border = "1px solid #ccc";
    input.style.padding = "0.5rem";
    return input;
}

// class Task below
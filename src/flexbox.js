export class Flexbox {
    constructor(direction = 'row') {
        this.element = document.createElement('div');
        this.element.style.display = "flex";
        this.element.style.flexDirection = direction;
        this.element.style.gap = "0.5rem";
    }

    //justifyContent, alignItems, ...

    append(child) {
        this.element.appendChild(child);
        return this; 
    }
}
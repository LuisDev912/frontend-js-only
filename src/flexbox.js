export class FlexBox {
    constructor(direction = 'row') {
        this.element = document.createElement('div');
        this.element.style.display = "flex";
        this.element.style.flexDirection = direction;
        this.element.style.gap = "0.5rem";
    }

    justifyContent(value) {
        this.element.style.justifyContent = value;
        return this;
    }

    alignItems(value) {
        this.element.style.alignItems = value;
        return this;
    }

    append(child) {
        this.element.appendChild(child);
        return this; 
    }

    render(parent = document.body) {
        parent.appendChild(this.element);
    }
}


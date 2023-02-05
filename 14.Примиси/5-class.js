'use strict';

const Rect = class {
    constructor(x, y, wigth, height) {
        this.x = x;
        this.y = y;
        this.wigth = wigth;
        this.height = height;
    }

    toString() {
        return `[${this.x}, ${this.y}, ${this.height}, ${this.wigth}]`
    }
};

const equilateral = Category => class extends Category {      // Спомощбю этой функции будет переопределяться конструктор
    constructor(x, y, side) {
        super(x, y, side, side);
    }
};

const Square = equilateral(Rect);

const p1 = new Square(10, 20, 50);
console.log(p1.toString());
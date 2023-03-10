'use strict';

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    move() {
        this.x += x;
        this.y += y;
    }

    toString() {
        return `[${this.x}, ${this.y}]`;
    }

    static from(obj) {
        const { x , y } = obj;
        return new Point(x, y)
    }
}

console.log('Point prototype: ', Point.prototype);
console.log('move prototype: ', Point.prototype.move.prototype);
console.log('prototype constructor prototype: ', Point.prototype.constructor.prototype);

const p1 = new Point(10, 20);

console.log(p1);
console.log(p1.toString());
console.log(p1 + '');
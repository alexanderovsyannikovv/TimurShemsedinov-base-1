'use strict';

function move(x, y) {
    this.x += x;
    this.y += y;
}

function toString() {
    return `[${this.x}, ${this.y}]`;
}

const p1 = { x: 20, y: 20};
const p1AfterMove = move.bind(p1);
const p1AfterToString = toString.bind(p1);


console.log(p1)
console.log(p1AfterToString())
console.log(p1AfterMove)
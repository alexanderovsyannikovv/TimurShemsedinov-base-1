'use strict';
// Когда мы пишем через прототипный подход мы можем методы присваивать внутри коструктора.
// Метод примешивается к объекту.

function Rect(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.toString = function() {
        return `[${this.x}, ${this.y}, ${this.width}, ${this.height}]`;
    };

    // или можно сделать так:
    // if () this.toString = function() {                                   -Добавить условие к подключению метода. или примешивать другой метод
    //     return `[${this.x}, ${this.y}, ${this.width}, ${this.height}]`;                     в зависимости что передали в комтруктор.
    // };
}

const p1 = new Rect(10, 20, 50, 50);

console.log(p1);
console.log(p1.toString());
console.log(`${p1}`);
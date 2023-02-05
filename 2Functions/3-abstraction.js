'use strict';
// О функияю можно думать как об абстрацкциях (более высокого уровная или более низкого)
// С помощью функции power уснаследовали еще две функции

const power = Math.pow;
const square = x => power(x, 2);
const cube = x => power(x, 3);

console.log(power(10, 2));
console.log(square(10));
console.log(cube(10));
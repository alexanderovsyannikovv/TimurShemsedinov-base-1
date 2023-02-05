'use strict';

const { sin, PI } = Math;
const inverse = f => x => 1 / f(x);   // - функция высшего порядка
const cosecant = inverse(sin);

const a = cosecant(5);

console.log(a);
console.log(PI);
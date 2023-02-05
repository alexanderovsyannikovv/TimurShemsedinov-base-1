'use strict';

// Аргументы функции могут принимать другие функции, и функции мгут возвращать функции.
const partial = (fn, x) => (...args) => fn(x, ...args);

// Usage.
const sum4 = (a, b, c, d) => (a + b + c + d);

const f11 = partial(sum4, 1);  // поочередно передаем значения в аргументы функции.
const f12 = partial(f11, 2);
const f13 = partial(f12, 3);
const y1 = f13(4);
console.log(y1);

const f21 = partial(sum4, 1, 2);   // Двойка теряется потому что в функция ожитает только одно значение во втором аргументе.
const f22 = partial(f21, 3);
const y2 = f22(4);
console.log(y2);
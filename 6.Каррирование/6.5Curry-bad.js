'use strict';

const curry = (fn) => (...args) => (
  fn.length > args.length ? curry(         // Если длина функции fn больше чем кол-во пепеланных аргументов, то РЕКУРСИВНО вызываем каррирование.
    ((fn, ...args1) => (...args2) => (
      fn(...args1.concat(args2))
    ))(fn, ...args)
  ) : fn(...args)                          // Если условие не выполнено, то сразу вызывает функция fn и каррирование не нужно.
);

// Usage

const sum4 = (a, b, c, d) => (a + b + c + d);

const f = curry(sum4);
const y1 = sum4(1, 2, 3, 4);
const y2 = f(1, 2, 3, 4);
const y3 = f(1, 2, 3)(4);
//const y4 = f(1, 2)(3)(4);
//const y5 = f(1)(2)(3)(4);
const y6 = f(1)(2, 3, 4);
//const y7 = f(1)(2)(3, 4);
const y8 = f(1, 2)(3, 4);
console.log(y1, y2, y3, y6, y8);
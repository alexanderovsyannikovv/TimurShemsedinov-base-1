'use strict';

const fn = a => b => c => a + b + c;

const result = fn(3)(2)(1);

console.log(`a + b + c = ${result}`);
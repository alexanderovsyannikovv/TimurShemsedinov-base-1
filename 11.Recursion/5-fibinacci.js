'use strict';

const fibinacci = n => (n <= 2 ? 1 : fibinacci(n - 1) + fibinacci(n - 2));

console.log(fibinacci(10));
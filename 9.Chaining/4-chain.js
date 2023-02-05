'use strict';

function fn(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}

// const fn = a => b => c => a + b + c;

const f1 = fn(2)
const f2 = f1(1)
const result1 = f2(3);
const result2 = fn(1)(2)(3)

if (result1 === result2) {
    console.log(`a + b + c = ${result1}`);
}
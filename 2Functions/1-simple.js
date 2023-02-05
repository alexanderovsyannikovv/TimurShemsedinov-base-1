'use strict'
// https://github.com/HowProgrammingWorks/Function/tree/master/JavaScript

// Function Declaration - Виден во всех частях файла(Hoisting)
function inc(a) {
    return a + 1;
}

// Function expression
const sum = function(a, b) {
    return a + b;
};

// Лямбда expresion или стрелочная фнкция
const max = (a, b) => (a > b ? a : b);

const avg = (a, b) => {
    const s = sum(a, b);
    return s / 2;
}
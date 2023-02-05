'use strict';

// forEach - метод массивов. В метод преедается функция колл-бэк, которая будет вызываться для каждого элемента массива.

const numbers = [7, 10, 1, 5, 2];
numbers.forEach((item, i, arr) => {
    console.log(i, arr, item);
});

[7, 10, 1].forEach(x => {
    console.log(x);
});

[7, 10, 1].forEach(x => console.log(x));



const print = x => console.log(x);
[7, 10, 1].forEach(print);
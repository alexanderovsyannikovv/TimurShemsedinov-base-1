'use strict';

// Метод flat() возвращает новый массив, в котором все элементы вложенных подмассивов были рекурсивно "подняты" на указанный уровень depth.
// var newArray = arr.flat(depth);
let array1 = [2, 3, 4, [5, 6]];
let array2 = array1.flat();

console.log(array2);


// Метод fill() - созадет новый массив по указанным параметрам и заполняет указанными значениями.
// arr.fill(value[, start = 0[, end = this.length]])
// value - Значение, заполняющее массив.
// start - (необязательный параметр) Начальный индекс.
// end - (необязательный параметр) Конечный индекс.
let c = [1, 1, 1, 1, 1, 1];   // fill() - изменяет исходный массив.
let d = c.fill(2, 3, 5);
console.log(c);
console.log(d);


// Метод keys() возвращает новый итератор массива Array Iterator, содержащий ключи каждого индекса в массиве.
// (метод позволяет вытянуть ключи из массиво-подобых объектов или массивов)
// arr.keys()
let arrayToKeys = [1, 2, 3, 4, 5];
let objectToKeys = {name: 'Hannah', age: 33};

console.log(Object.keys(arrayToKeys));
console.log(Object.keys(objectToKeys));
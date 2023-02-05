'use strict';

// Метод map() - Метод перебирает каждый элемент объекта и применяет к ему переданную функцию (возвращает новый массив)

// const new_array = arr.map(function callback( currentValue[, index[, array]]) {
//     // Возвращает элемент для new_array
// }[, thisArg])

const array = [3, 4, 5];
const newArray = array.map((item, index, arr) => {
    console.log(item, index, arr);
    return item * 3;
});
console.log(newArray);



// Метод filter() - создаёт новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции.
// filter(function callbackFn(element, index, array) { ... }, thisArg)
// callbackFn - Функция-предикат, которая будет вызвана для проверки каждого элемента массива. Если функция возвращает true, то элемент остаётся в массиве, если false, то удаляется.
// thisArg - Значение, используемое в качестве this при вызове колбэк-функции callbackFn.
let arrayForFilter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

let result = arrayForFilter.filter(item => {
    if (item > 7) {
        return true;   // return ВОЗВРАЩАЕТ TRUE or FALSE (сделать как в map() НЕЛЬЗЯ)
    }
});
console.log(result);
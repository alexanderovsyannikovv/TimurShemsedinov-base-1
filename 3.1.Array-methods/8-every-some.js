'use strict';

// Метод every() - проверяет, удовлетворяют ли ВСЕ ЭЛЕМЕНТЫ массива условию, заданному в передаваемой колл-бэк функции.
// Возвращает true or false.
const array = [4, 5, 6, 7, 8];

let result1 = array.every(item => {
    if (item > 5) {
        return true;
    }
});
console.log(result1);


// Метод some() - проверяет, удовлетворяет ли КАКОЙ-ЛИБО ОДИН ЭЛЕМЕНТ массива условию, заданному в передаваемой колл-бэк функции.
let result2 = array.some(item => {
    if (item > 5) {
        return true;
    }
});
console.log(result2);
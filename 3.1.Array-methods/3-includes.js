'use strict';

// includes() - замена indexOf - возвращает true or false.
// arr.includes(searchElement, fromIndex = 0) - аргумент fromIndex определяет с какой позиции начнется поиск элемента массива.
// Спомощью этого метода можно искать строки по символам, из которых состоит строка.

const transaction = ['571a319c8c', 'bd326c05', '1c28a0c411', '9b425707b3'];
const test = [44, 55, 66, 77, 88, 44, 2, 3, 4];

if (test.includes(44)) {
    console.log('Элемент есть')
} else {
    console.log('Элемента нет')
}

if (test.includes(44, 4)) {
    console.log('Элемент есть')
} else {
    console.log('Элемента нет')
}


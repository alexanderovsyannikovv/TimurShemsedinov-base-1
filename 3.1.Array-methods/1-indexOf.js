'use strict';
// arr.indexOf(searchElement[, fromIndex = 0])
// IndexOf  позволяет искать значение в массиве. Если значение не будет найдено он вернет -1. Если найдет, то вернет первую найденную позицию.
// Метод indexOf() сравнивает искомый элемент searchElement с элементами в массиве, используя строгое ставнение (===)

const a = [9, 8, 7, 5];

console.log(a.indexOf(4));
console.log(a.indexOf(7));

if (a.indexOf(7) !== -1) {
    console.log('Елемент в массиве присутствует');
} else {
    console.log('Елемента в массиве нет');
}

const b = [1, 2, 3, 4, 5, 2];
console.log(b.indexOf(2));
console.table(b);

// Второй аргумент методы IndexOf указывает с какой позиции начинать поиск по массиву.
console.log(b.indexOf(2, 2));

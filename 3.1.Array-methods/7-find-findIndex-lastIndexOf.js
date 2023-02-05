'use strict';

// Метод find() - запускает на каждом элементе массива функицю; если функия вернет true,
// то find будет остановлен и будет возвращено ЗНАЧЕНИЕ массива, на котором true сработало.
// Если вернет false - вренет undefined.
const array = [2, 3, 4, 5];

let b = array.find(item => {
    if (item >= 3 && item <= 5) {
        return true;
    }
})
console.log(b);

// Пример:
const persons = [
    { name: 'ivan', age: 54 },
    { name: 'ivan', age: 46 },
    { name: 'ivan', age: 34 },
    { name: 'ivan', age: 14 },
    { name: 'ivan', age: 44 },
];
let result1 = persons.find(person => {
    if (person.age <= 18) {
        return true;
    }
});
console.log(result1);



// Метод findIndex() - работает так же как и find(), НО возвращает ИНДЕКС значения!!!
// Если элемент удовлетворяющий условию проверяющей колл-бэк функции, не был найден, то возвращается -1.
let array2 = [10, 23, 44, 55, 55, 55, 55, 55];

let result2 = array2.findIndex(item => {
    if (item > 53) {
        return true;
    }
});
console.log(result2);


// Метод lastIndexOf() - применяется для того, чтобы найти ИНДЕКС последнего вхождения элемента в строковый объект (может работать с массивами).
// Если не надодит возвращает -1.
const string = 'hello';

let result3 = string.lastIndexOf('o');
console.log(result3);

let result4 = array2.lastIndexOf(55);
console.log(result4);
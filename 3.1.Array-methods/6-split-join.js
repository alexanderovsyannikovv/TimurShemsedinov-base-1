'use strict';

// Метод split() - разбивает объект String на массив строк путём разделения строки указанной подстрокой.
// str.split(separator, limit)
// limit - кол-во возвращаемых элементов (начинется с начала).
let string = 'hello';

let array1 = string.split();
console.log(array1);

let array2 = string.split('', 2);
console.log(array2);


// Метод join() - объединяет все элементы массива в строку.
// arr.join(separator)      separator - Определяет строку, разделяющую элементы массива.
let greetingArray = ['h', 'e', 'l', 'l', 'o'];

// let greetingString = greetingArray.join('');  //hello
let greetingString = greetingArray.join('-');

console.log(greetingString);
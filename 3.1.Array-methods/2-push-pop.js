'use strict';

const browser =[

];

let a = [99, 98];
console.log(a)

a[a.length] = 2; // Добавлние элементов в конец массива.
console.log(a);

// Добаление элементов в конец массива с помощью метода push().
a.push(22);
console.log(a);
a.push(11, 33)
console.log(a);


// Удаление елементов в конце массива с помощью метода pop().
a.pop();
console.log(a);

// Можно изымать последний элемент из масива и присваивать его.
const delitedElementFromArray = a.pop();
console.log(delitedElementFromArray);
// Когда методу pop() удалять уже нечего, он возвражает undefined.
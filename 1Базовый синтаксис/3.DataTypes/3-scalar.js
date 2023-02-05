let scalar1 = 5;
let scalar2 = scalar1;
scalar1--;
scalar2++;
console.log({ scalar1, scalar2 });  // Изменения по значению (скалярные значения передаются по значению).

const object1 = { field: 5 };
const object2 = object1;
object1.field = 6;
console.log({ object1, object2});  // Изменения по ссылке (функция, массив, объект - ссылоная типы).


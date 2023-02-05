'use strict';

// Функция наследуется от объекта, поэтому у нее есть свойства и методы.
// Функция - это объект первого класса. Функция может передаться как аргумент в другую функию, можно возвращать функцию --- ФУНКЦИЯ ЭТО ЗНАЧЕНИЕ

function inc(a) {
  return ++a;
}

const sum = function(a, b) {
  return a + b;
};

const max = (a, b) => (a > b ? a : b);

console.log('Names: ');
console.dir({
  inc: inc.name,
  sum: sum.name,
  max: max.name,
});

console.log('Arguments: ');
console.dir({
  inc: inc.length,
  sum: sum.length,
  max: max.length,
});

console.log('Anonymous function: ' + function(x) { return x; }.name);
console.log('Anonymous lambda: ' + ((x) => x).name);

console.log('toString: ');
console.dir({
  inc: inc.toString(),
  sum: sum.toString(),
  max: max.toString(),
});
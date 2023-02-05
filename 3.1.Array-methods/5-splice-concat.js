'use strict';

// Метод concat() - СОЗДАЕТ НОВЫЙ массив, в котором он соединяет(конкатенирует) массивы. Возвращает новый объединенный массив.
const a1 = [21, 22, 23, 24];
const a2 = [31, 32, 33, 34];

const res = a1.concat(a2);
console.dir({res, a1, a2});
// concat копирует ссылки на объекты в новый массив. И оригинал, и новый массив ссылаются на один и тот же объект.
// То есть, если объект по ссылке будет изменён, изменения будут видны и в новом, и в исходном массивах.
// Может работать со строками.



// Метод splice() - ИЗМЕНЯЕТ СОДЕРЖАНИЕ массива, удаляя существующие элементы и/или добавляя новые.
// array.splice(start, deleteCount, item1[, item2[, ...]])
// start - индекс, по которому начинает изменять массив.
// deleteCount (необязательный) - целое число, показывающее количество старых удаляемых из массива элементов.
// itemN (еобязательный) - добавляемые к массиву элементы.

let k = [33, 44, 55, 66, 77, 88, 99];
k.splice(2, 0, 122, 211);
console.log(k);
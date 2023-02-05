'use strict';

const a = [1, 2, 3, 4];
const b = ['a', 'b', 'c'];

// merge
const c = [...a, ...b];

// clone
const cloneB = [...b];
console.log(cloneB === b);
console.log(cloneB == b);

// string to array
const e = [...'hello'];
console.log(e);

// set to array
const f = [...new Set([1, 1, 2, 3, 4, 2])];
console.log(f);

//
function test() {
    console.log(...arguments);
}
test(1, 2, 3, 4, 5, 6);

// nodeList, querySelectorAll
let p = document.querySelectorAll('p');
console.log([...p]);
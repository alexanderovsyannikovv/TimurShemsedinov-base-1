'use strict';

const add = x => y => { // люмбда вложена в лямбду.
    const z = x + y;
    console.log(x + '+' + y + '=' + z);
    return z;
};

// const add = x => y => x + y;

// Usega;
const result = add(3)(6);
console.log(result);
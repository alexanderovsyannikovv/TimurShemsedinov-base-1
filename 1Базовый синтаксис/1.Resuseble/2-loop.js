'use strict';

const MAX_VALUE = 10;

console.log('Begin');

for (let index = 0; index < MAX_VALUE; index++) {
    console.dir({ index, date: new Date() });  
}

console.log('The END');
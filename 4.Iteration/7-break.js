'use strict';
const flag = false;

label: {
    console.log(1);
    label2: {
        console.log(2);
        break label;
        console.log(3);
    }
    console.log(4);
}
console.log(5);
'use strict';

const sum = (a, b, callback) => {
    if (typeof a === 'number' && typeof b === 'number') {
        callback(null, a + b);
    } else {
        callback(new Error('a and b should be numbers!'));
    }
};



sum(2, 3, (error, result) => {
    if (error) {
        console.log(error.message);
        return;
    }
    console.log(result);
})

sum(2, 'A', (error, result) => {
    if (error) {
        console.log(error.message);
        return;
    }
    console.log(result);
})

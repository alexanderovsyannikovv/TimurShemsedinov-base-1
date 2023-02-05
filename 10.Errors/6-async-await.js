'use strict';

const sum = async (a, b) => {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    } else {
        throw new Error('a and b should be numbers!');
    }
};

(async () => {
    try {
        console.log(await sum(2, 3));
    } catch (error) {
        console.log(error.message);
    }

    try {
        console.log(await sum(2, 'A'));
    } catch (error) {
        console.log(error.message);
    }
})()
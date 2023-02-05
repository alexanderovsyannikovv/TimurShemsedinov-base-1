'use strict';

const sum = (a, b) => {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    } else {
        throw new Error('a and b should be numbers!')
    }
};

try {
    console.log(sum(2, 3));
} catch (error) {
    console.log(error.message);
}

try {
    console.log(sum(2, 'A'));
} catch (error) {
    console.log(error.message);
}
'use strict';

const fn = (parameter, callback) => {
    if (!parameter) {
        callback(new Error('Parameter needed!'));
        return;
    }
    callback(null, 'Data ' + parameter);
    return 'Value';
};

const result = fn('example', (error, data) => {
    if (error) throw error;
    console.dir({ data });
});

console.dir({ result });
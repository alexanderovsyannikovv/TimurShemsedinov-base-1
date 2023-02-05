'use strict';

const fn = () => {
    console.log('Generate cache');
    const cache = {};
    
    return key => {
        let result = cache[key];
        if (result) {
            console.log('From cache');
            return result;
        } else {
            console.log('Calculate and save to cache');
            result = 'value ' + key;
            cache[key] = result;
            return result;
        }
    };
};

const f1 = fn();
const f2 = fn();

f1(1)
f1(2)
f1(1)
f1(2)

f2(2)
f2(1)
f2(2)
f2(1)
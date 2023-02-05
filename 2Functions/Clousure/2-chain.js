'use strict';

// При помощи замыканий можно делать спосою вызова функицй как 'чейнинг'.

const hash = () => {
    const data = {};
    Object.defineProperty(data, 'add', {
        enumerable: false,
        value(key, value) {
            data[key] = value;
            return data;
        }
    });
    return data;
};

// Usage.
console.dir(
    hash().add('name', 'Marcus')
          .add('city', 'Roma')
          .add('born', '121')
);
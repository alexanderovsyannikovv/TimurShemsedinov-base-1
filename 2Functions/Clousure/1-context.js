'use strict';

const hash = () => {
    const data = {};
    let counter = 0;
    return (key, value) => {  // лямбда замкнута на контекст функции hash.
        data[key] = value;
        counter++;
        console.dir({ counter });
        return data;
    };
};

// Usage.
const h1 = hash(); // в функицию h1 помещается лямбда функция, которую возвращает функция hash (мы экспортировали из функции ссылку на другую функию).
h1('name', 'Marcus');
h1('city', 'Roma');

const obj1 = h1('born', 121);
console.dir({ obj1 });
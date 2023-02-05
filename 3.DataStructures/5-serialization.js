'use strict';

// Сериализация - преобразования объекта или массива в строку, чтобы передать ее в файл или по сети и т.д.
const person = {
    name: 'Marcus',
    city: 'Roma',
    born: 121,
};

const s = JSON.stringify(person);
console.log(s);

const obj = JSON.parse(s); // Создается НОВЫЙ объект, тот же самый, разные ссылки в памяти.
console.dir(obj);

if (person === obj) console.log('person === obj')
else console.log('person !== obj')


const letters = ['A,B', 'B', 'C', 'D'];
console.log(letters + '');             // Преобразование массива в СТРОКУ.
console.log(JSON.stringify(letters));  //- также этот метод позволяет восстаносить изночальный ВИД массива.
console.log(letters.join('-'));        // Преобразование массива в СТРОКУ.

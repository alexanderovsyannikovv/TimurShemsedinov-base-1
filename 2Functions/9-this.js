'use strict';

// This - когда у нас функция привязана к какому-то объекту и мы хотим обраиться к полям этого объекта из функции.
// У функции есть функциональный контекст, в нем лежат идентификаторы, которые передаются в качестве аргеметов функции и все, которые объявлены внутри этой функии.
// У функции есть объектный контекст (но не у всех функций). К нему можно обращаться через поле THIS.

const Context = function() {
    this.name = 'Marcus';
    const city = {
        name: 'Kiev',
        year: 482,
        f1: function() {
            return this.name;
        },
        f2: () => {
            return this.name;
        },
        f3() {
            return this.name;
        }
    };
    return city;
}

const city = new Context();

console.log('city.f1() = ' + city.f1());
console.log('city.f2() = ' + city.f2());
console.log('city.f3() = ' + city.f3());
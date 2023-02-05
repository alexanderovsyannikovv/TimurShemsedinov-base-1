'use strict';

const log = (base, n) => Math.log(n) / Math.log(base);

// Usage.
const lg = log.bind(null, 10);            // Метод bind отправит второй аргумент в base. Функция bind позволяет частично применать функцию.
const ln = log.bind(null, Math.E);        // первый аргумент(Null) - необходим, чтобы привязывать функцию к объектному контексту. Люмбда неумеет привязываться, только function.


console.log(`lg(5) = ${lg(5)}`);
console.log(`ln(5) = ${ln(5)}`);
'use strict';

// рекурсия нужна чтобы решать задачи:
// 1 математические задачи
// 2 обход структур данных
// 3 ходить по дереву или по графу

// рекурсия может заменяиться циклом

const pow = (base, power) => {
    if (power === 1) return base;
    else return pow(base, power - 1) * base;
}

console.log(pow(2, 3));
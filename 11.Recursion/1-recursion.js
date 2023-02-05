'use strict';

const getMaxCallStackSize = i => {
    try {
        return getMaxCallStackSize(++i);
    } catch (error) {
        return i;
    }
};

console.log(getMaxCallStackSize(0));



// Код демонстрирует рекурсию и максимальную глубину рекурсии.

// Глубина рекурсии определяется размером СТЕКА.
// Глубина стека в разных движках языков постоянна или зависит от того сколько памяти отведено под стек.

// В стеке хранятся все аргументы функций и все локольные переменные. Если будут созданы буфер или массив, то они в стеке не хранятся, а хранится только ссылка на них.
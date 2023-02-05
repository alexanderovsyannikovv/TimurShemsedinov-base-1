'use strict';

// Рекурсии можно представить в виде цикла.
// У рекурсии может утечь стек, поэтому лучше использавать цикл.

// Хвостовая рекурсия.
// Основное отличие хвастовой рекурсии состоит в том что в последней стоке рекурсивной функции просиходит вызов самой себя.

const add = (n, acc = 0) => {
    if (n === 0) return acc;
    return add(n - 1, acc + n);
};

console.log(add(3));



const tail = (n, acc = 0) => {
    while (true) {
        if (n === 0) return acc;
        acc = acc + n;
        n = n - 1;
    }
};

console.log(tail(3));
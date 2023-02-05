'use strict';

// Косвенная рекурсия.
// g и f поочереди друг друга вызывают и переполняют стек. Вследствии чего вылетает ошшибка.

function f(x) {
    return g(x);
}

function g(x) {
    return f(x);
}

console.log(f(0));
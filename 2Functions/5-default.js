'use strict';

function fnNew(a, b = 'hello', c = 5) {
    console.dir({ a, b, c });
}
fnNew()

// Hash style for default parameter values
function fnHash(args) {
    args.a = args.a || [7, 25, 10];
    args.b = args.b || 'Hello';
    args.c = args.c || 100;
    console.dir(args)
}
fnHash({c: 2})
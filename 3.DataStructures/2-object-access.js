'use strict';

// Object/Hash
const person = {
    name: 'Marcus',
    city: 'Roma',
    born: 121,
};

console.log('Person name is: ' + person.name);
console.log('Person name is: ' + person['name']);

delete person.name;
console.dir({ person });

delete person['name'];
console.dir({ person });

// With getter and setter.
const person2 = {
    name: 'Marcus Aurelius',
    get city() {
        return 'Roma'
    },
    set city(value) {
        console.log('Marcus remains in Roma');
    },
};

person2.city = 'Moscow';
console.log(person2);
'use strict';

// Метод reduce() применяет функцию reducer к каждому элементу массива (слева-направо), возвращая одно результирующее значение.
const numbers = [2, 3, 11, 15, 20, 3, 5, 8, 10, 16, 2, 11, 14, 15, 18];

const users = [{
    username: "lando12",
    jedi: false
}, {
    username: "kvaigon99",
    jedi: true
}, {
    username: "anakin skywalker",
    jedi: false // DARK SIDE ISN'T JEDI WAY!!!
}, {
    username: "littlegreenpug",
    jedi: true
}, {
    username: "ray",
    jedi: true
}, {
    username: "padmebestqueenever",
    jedi: false
}];

const documents = [{
    content: "Ты был мне как брат! Я любил тебя!",
    author: "Obi-Wan Kenobi",
    date: "2017-01-17 07:13:07"
}, {
    content: "База повстанцев находится на Дантуине.",
    author: "Leia Organa",
    date: "1999-02-19 16:56:11"
}, {
    content: "Страх открывает доступ к темной стороне! Страх рождает гнев, гнев рождает ненависть, ненависть — залог страданий.",
    author: "Yoda",
    date: "2019-11-27 21:33:56"
}];

// Get average.
const getAverage = numbers => {
    const total = numbers.reduce((total, number) => {
        return total + number;
    });
    return total / numbers.length;
};
console.log(getAverage(numbers));

// Count Jedi.
const countJedi = (users) => {
    return users.reduce((count, user) => {
        if (user.jedi) {
            count++;
        }
        return count;
    }, 0);
};
console.log(countJedi(users));

// Get array only Jedi.
const getArrayOnlyJedi = users => {
    return users.reduce((names, user) => {
        if (user.jedi) {
            names.push(user.username);
        }
        return names;
    }, []);
};
console.log(getArrayOnlyJedi(users));

// Compose documents.
const composeDocuments = documents => {
    return documents.reduce((generalDocument, document) => {
        generalDocument.content += `${document.content}`;
        generalDocument.authors.push(document.author);
        if (!generalDocument.date || new Date(generalDocument).valueOf() <= new Date(document.date)) {
            generalDocument.date = document.date;
        }
        return generalDocument;
    }, {
        content: '',
        authors: [],
        date: null,
    });
};
console.log(composeDocuments(documents));
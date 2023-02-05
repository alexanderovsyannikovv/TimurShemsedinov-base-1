'use strict';

const g1 = {};
const g2 = {};
const g3 = {area: 300};  

// add property area to g2
g2.area = 200;

// Mixin as a function
const mixinCalculateCost = obj => {
    obj.area = obj.area || 0;                      // Если поля нет, то будет со значением 0. Если было то ничего не изменится.
    obj.calculateCost = function (price) {
        return this.area * price;
    };
};

// Mixin to single object
mixinCalculateCost(g1);

// Mixin to array of objects
[g1, g2, g3].forEach(mixinCalculateCost);
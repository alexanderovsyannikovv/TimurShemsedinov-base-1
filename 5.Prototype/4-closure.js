'use string';

const point = (x, y) => {
    const p = {};

    p.move = (dx, dy) => {
        x += dx;
        y += dy;
    };

    p.toString = () => `[${x}, ${y}]`;

    return p;
}

const point1 = point(10, 8);
point1.move(5, 2);
console.log(point1.toString())
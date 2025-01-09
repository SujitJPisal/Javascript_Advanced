
let point0 = {x:10, y: 20 };
let point1 = Object.assign({}, point0);
let point2 = Object.assign({}, point0, {z: 100});


console.log(point0);
console.log(point1);
console.log(point2);
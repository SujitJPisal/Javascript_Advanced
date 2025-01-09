let point0 = {x:10, y:20} ;
let point1 = { ...point0};
let point2 = { ...point0, z:100};


let point3 = {...point2, ...{z:300, color: "red"}};


let point4 = {...point3, z:200, color:"red"};


console.log(point0);
console.log(point1);
console.log(point2);
console.log(point3);
console.log(point4);
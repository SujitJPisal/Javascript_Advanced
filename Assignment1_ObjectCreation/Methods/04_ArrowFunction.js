// Lexical scoping-We should not use arrow
// functions to declare object methods.



let add = function (a,b) {
    return a + b;
}


let new_Add =  (a,b) => a + b;


console.log(add(1,2));
console.log(new_Add(1,2));
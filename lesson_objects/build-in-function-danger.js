var primitive = 5;
var boxed = new Number(5);

console.log(primitive == boxed); //true
console.log(primitive === boxed); //false

var boxed_copy = new Number(5);
console.log(primitive == boxed); //true
console.log(boxed_copy === boxed); //false

//convetions
var number = Number("30");

console.log(primitive); // primitive
console.log(number); // primitive
console.log(boxed); //Number {[[PrimitiveValue]]: 5}







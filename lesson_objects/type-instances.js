//Number
var primitiveNumber = 3;
var boxedNumber = new Number(3);

console.log('typeof primitiveNumber : ' + typeof primitiveNumber);
console.log('typeof boxedNumber : ' + typeof boxedNumber);

//String
var primitiveString = 'string';
var boxedString = new String('string');

console.log('typeof primitiveString : ' + typeof primitiveString);
console.log('typeof boxedString : ' + typeof boxedString);

//Objects
var obj = {};
console.log(typeof obj);

//Arrays
var arr = [];
console.log(typeof arr); //object
console.log(arr.toString()); //empty string :D
console.log(Object.prototype.toString.call(arr)); // [object Array] success:)


//Instance of
function Person(name){
	this.name = name;
}

var inst = new Person('John');

console.log(typeof inst); //object
console.log(inst instanceof Person) // true (if present in prototype chain)

//Weird stuff
console.log(typeof undefined); // is undefined, it makes sence
console.log(typeof null) // object, it's a bug, forever...

//functions
var func = function(){};
console.log(typeof func); //function


//Primitives
var str = new String("boxed primitive");

console.log(str);
//Auto converting
console.log("in-time-boxing".length)

String.prototype.isGreater = function(limit){
	return this.length > limit;
}

console.log(str.isGreater(5));
console.log("text".isGreater(5));


//Nubmers
Number.prototype.isPositive = function(){
	return this > 0;
}
var numb = new Number(10);
console.log(numb.isPositive());

//Uncaught SyntaxError: Invalid or unexpected token
//JS wan't convert number to an object automatically
//10.isPositive();

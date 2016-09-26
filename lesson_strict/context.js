function strictedFunction(){
	"use strict"; //global or function

	var person2;
	persn2 = {};
	console.log(persn2);
}

var person;
persn = {};
console.log(persn);
strictedFunction(); //Uncaught ReferenceError: persn2 is not defined

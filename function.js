console.log(Dictionary);
console.log(Dictionary.name);
console.log(Dictionary.code);
console.log(Dictionary.freeVariable);

function Dictionary(){
	console.log('Dictionary exection');
}

Dictionary.name = 'labeled dictionary';
Dictionary.freeVariable = 'free text';

console.log(Dictionary.name);
console.log(Dictionary.code);
console.log(Dictionary.freeVariable);
console.log(Dictionary);
// () is expression
console.log(Dictionary());



function functionStatement(){
	console.log('executing from functonStatement');
	console.log(this);
}

functionStatement();

var variable = functionStatement;

variable();
functionStatement();

//Uncaught TypeError: variableFunc is not a function
//variableFunc();
//Uncought error variableFucntion is not defined
//variableFunction();

var variableFunc = function variableFunction(){
	console.log('executing fucntionExpression');
	console.log(this);
};

variableFunc();
//function.js:24 Uncaught ReferenceError: variableFunction is not defined
//variableFunction();



function exec(input){
	input();
}

exec(function() {
	console.log('exection from anonymous function statement');
})







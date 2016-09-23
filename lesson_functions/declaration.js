function statement(){
	//statement	
}

var expression = function expressionName(){
	//
};

//name is immutable
console.log(statement.name);
console.log(expression.name);

//correct calling
statement();
expression();

//but throw the exception
//expressionName();

//The others
(function(){
	//expression
})

+function(){
	//expression
}

(function(){
	//IIFE
}())

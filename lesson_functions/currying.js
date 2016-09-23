var multiply = function(x, y){
	return x * y;
}


var multiplyDecade = multiply.bind(null, 10);

console.log(multiplyDecade(4));
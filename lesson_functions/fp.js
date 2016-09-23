var foreach = function(source, func) {
	var result = [];
	for (var i = 0; i < source.length; i++) {
		result.push(func(source[i]));
	}
	return result;
}

var multiply = function(x, y) {
	return x * y;
}

var multifier = function (mult) {
	return multiply.bind(null, mult);
};

var source = [0, 1, 2, 3];

var result = foreach(source, multifier(10));

console.log(result);
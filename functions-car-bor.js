var triangle = {
	a : 2,
	b : 5,
	c : 7,
	area : function() {
		return this.a * this.b / 2;
	},
	pow: function(x, y){
		return Math.pow(x, y);
	}
}

// console.log(triangle.area());

//Function carrying 

var square = {
	a: 3,
	b: 4
}

var rectangle = {
	a: 3,
	b: 4
}

// var squareFunction = triangle.area.bind(square);

// console.log(squareFunction() * 2);

var squareTwo = triangle.pow.bind(null, 2);
console.log(squareTwo(3));


// console.log(triangle.area.apply(rectangle));


console.log(triangle.area.apply(square));
console.log(triangle.pow.call(null, 4, 3));









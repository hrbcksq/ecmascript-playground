var person = {
	firstname: 'Defautl',
	lastname: 'Defautl',
	greet: function() {
		return 'Hi ' + this.firstname;
	}
}

var john = Object.create(person);
john.firstname = 'John';
john.lastname = 'Doe';

// Object {firstname: "John", lastname: "Doe"}
// 	firstname : "John"
// 	lastname : "Doe"
// 	__proto__ : Object
// 		firstname : "Defautl"
// 		lastname : "Defautl"
// 		greet : ()
// 		__proto__ : Object


//polyfill
(function(){
	if (!Object.create){
		Object.create = function(obj) {
			if (arguments.length > 1){
				throw new Exception('Object.create implement only accepts the first parameter.')
			}
			function F(){};
			F.prototype = obj;			
			return F;
		}
	}
}())
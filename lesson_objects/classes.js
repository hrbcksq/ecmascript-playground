// funtcion class Person {
class Person {
	constructor(firstname, lastname) {
		this.firstname = firstname;
		this.lastname = lastname;
	}

	greet() {
		return 'Hi ' + firstname;
	}
}

// Person.prototype = Object {}
// 					constructor: function (firstname, lastname)
// 					greet: function ()
// 					__proto__: Object


class InformalPerson extends Person{
	constructor(firstname, lastname, info) {
		super(firstname, lastname);
		this.info = info;
	}

	greet() {
		return 'Yo ' + firstname;
	}
}

var john = new Person('John', 'Doe');
// Person {firstname: "John", lastname: "Doe"}
// 	firstname : "John"
// 	lastname : "Doe"
// 	__proto__ : Object
// 		constructor : function (firstname, lastname) 
// 		greet : function ()
// 		__proto__ : Object

var jane = new InformalPerson('Jane', 'Cropp', 'Extend');
// InformalPerson {firstname: "Jane", lastname: "Cropp", info: "Extend"}
// 	firstname : "Jane"
// 	info : "Extend"
// 	lastname : "Cropp"
// 	__proto__ : Person
// 		constructor : function(firstname, lastname, info)
// 		greet : function()
// 		__proto__ : Object

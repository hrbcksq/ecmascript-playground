
//function constructor
function Person(firstname, lastname){
	//console.log(this);
	this.firstname = firstname;
	this.lastname = lastname;
	//console.log('construction complete');
	
	//Note about memory and flex
	//We can assign getFullName function here, but each object gets his own copy of that function
}

//This protorype property of the fucction is where the prototype chain points for any objects created using that function as a constructor
Person.prototype.getFullName = function() {
	return this.firstname + " " + this.lastname;
}

//Wrong way, this is only 
// Person.getFirstName = function() {
// 	return this.firstname + " " + this.lastname;
// }

var john = new Person("John", "Doe");
// Person {firstname: "John", lastname: "Doe"}
// 	firstname : "john"
// 	lastname : "doe"
// 	__proto__  : Object 
// 		constructor : Person(firstname, lastname)
// 	    __proto__ : Object


var jane = new Person("Jane", "Wissman");

//Late prototyping after creation
Person.prototype.getName = function() {
	return this.lastname;
}

console.log(john.getName());
console.log(john.getFullName());

if (john.__proto__ == Person.prototype){
	console.log('There are equals');
}


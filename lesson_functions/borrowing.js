var defaultPerson = {
	firstName: 'Default',
	lastName: 'Default',
	fullName: function(){
		return 'Firstname: ' + this.firstName + ' Lastname: ' + this.lastName;
	}
}

var person = {
	firstName: 'The',
	lastName: 'Runaways'
}

//function borrowing
var fullname = defaultPerson.fullName.apply(person);
// or
// var fullname = defaultPerson.fullName.call(person);

console.log(fullname);
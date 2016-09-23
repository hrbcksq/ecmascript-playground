var user = {
	name: 'Default',
	surname: 'Default',
	print: function() {
		return 'name: ' + this.name + ' surname: ' + this.surname;	
	}	
}

var person = {
	name: 'Carl'
}

//Don't do that in this way
person.__proto__ = user;

console.log(person.print());

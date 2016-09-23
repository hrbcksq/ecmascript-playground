var user = {
	name: 'Default',
	surname: 'Default'	
}

var person = {
	name: 'Carl'
}

var employee = {
	surname: 'Davidson',
	print: function() {
		return 'name: ' + this.name + ' surname: ' + this.surname;	
	}	
}

employee.__proto__ = person;
person.__proto__ = user;

console.log(employee.print());

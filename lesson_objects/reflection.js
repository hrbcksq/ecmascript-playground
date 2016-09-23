var user = {
	name: 'Default',
	company: 'Default',
	print: function(){
		return this.name + ' ' + this.company;
	}
}

var person = {
	__proto__: user,
	name: 'David',
	company: 'Bowie'
}

for(var prop in person){
	if (person.hasOwnProperty(prop))
		console.log(prop + ': ' + person[prop]);
}
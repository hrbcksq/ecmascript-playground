var _ = require('underscore');

var user1 = {
	gender: 'Non'
}

var user2 = {

}

var jane = {
	name: 'Jane',
	gender: 'Female',
	function: 'Calling'	
}

var john = {
	name: 'Jone',
	gender: 'Male',	
	company: 'Company'
}

_.extend(user1, jane, john);
_.extend(user2, john, jane);

console.log(user1);
console.log(user2);


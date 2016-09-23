var user = {
	name: 'default',
	sound : function(){
		console.log(this.name);
	}
}

var person = {
	name: 'David'
}

var rebinded = user.sound.bind(person);
rebinded();


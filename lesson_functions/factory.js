var factory = function(lang) {
	return function (){
		switch (lang){
			case 'en':
				console.log('Hello');
				break;
			case 'ru':
				console.log('Привет');
				break;
		};
	}
};


var ru = factory('ru');
var en = factory('en');
ru();
en();

let fs = require('fs');
let urls = [
	'users.json', 
	'guests.json'
];

var chain = Promise.resolve();
var results = [];

urls.forEach((url) => {
	chain = chain.then(() => {
		return new Promise((resolve, reject) => {
			fs.readFile(url, 'utf8', (err, res) => {
				if (err) {
					reject(err);										
				}
				else {														
					resolve(res);
				}
			});			
		})
		.then((res) => {
			results.push(res);
		});
	});

});


chain.then(() => {
	console.log(results);
})

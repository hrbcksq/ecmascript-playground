//Promises chain exmample
var fs = require('fs'),
	files = ['_users.data', '_guests.data'];

var openFile = function(fileName) {
	return new Promise((resolve, reject) => {
		fs.readFile(fileName, 'utf-8', (err, data) => {						
			if (err) {
				reject(err);
			}
			else {
				resolve(data);
			}
		});	
	});
}

var chain = Promise.resolve();
var result = [];

files.forEach((file) => {
	chain = chain
		.then(() => {		
			return openFile(file);	
		})
		.then((data) => {								
			result.push(data);
		});	
});

chain.then(() => {
	console.log(result);
});







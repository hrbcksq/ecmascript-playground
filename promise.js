'use strict'

function delay(time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, time);
    })
}


delay(500).then(() => { console.log('hello'); });


let urls = [
    'users.json',
    'guests.json'
];

var fs = require('fs');

function load(fileName) {
	return new Promise((resolve) => {
		fs.readFile(fileName, 'utf8', (err, data) => {
			resolve(data);
		});
	})
}

var chain = Promise.resolve();

var results = [];

urls.forEach((url) => {
	chain = chain.then(() => {
		return load(url);
	}).then((data) => results.push(data));
})

chain.then(() => {
	console.log(results);
})




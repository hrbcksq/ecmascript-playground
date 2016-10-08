var fs = require('fs');

//It use buffers!

//sync
var data = fs.readFileSync(__dirname + '/fs.js', 'utf8');
console.log(data);
//async
var func = fs.readFile(__dirname + '/fs.js', 'utf8',
    function(err, data) {
        console.log(data);
    });
console.log('complete');
// console.log(func);
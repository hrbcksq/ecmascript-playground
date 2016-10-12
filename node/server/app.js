var http = require("http");
var fs = require('fs');

console.log(this)
http.createServer((req, res) => {
        res.writeHead(200, {
        "Content-Type": "text/html"
    });

    var message = 'Simple template engine';

    fs.readFile(`${__dirname}/index.html`, 'utf-8', (err, data) => {
        var data = data.replace('{Message}', message);
        res.end(data);
    });    
}).listen(3005, '0.0.0.0');






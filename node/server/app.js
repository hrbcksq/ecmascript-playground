var http = require("http");
var fs = require('fs');

http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    var obj = {
        firstname: 'John',
        lastname: 'Doe'
    }    
    res.write(JSON.stringify(obj));
    res.end();
}).listen(3005, '0.0.0.0');





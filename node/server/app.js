var http = require("http");

console.log(this)
http.createServer((req, res) => {
        res.writeHead(200, {
        "Content-Type": "text/plain"
    });
    res.end("Plain text");
}).listen(3005, '0.0.0.0');






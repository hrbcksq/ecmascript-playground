var http = require("http");
var fs = require('fs');

http.createServer((req, res) => {
        switch (req.url) {
            case '/api':
                res.writeHead(200, {
                    'Content-Type' : 'application/json'
                })
                res.end(JSON.stringify(this));
                break;
            case '/site':
                fs.createReadStream(`${__dirname}/index.htm`).pipe(res);
                break;
            default:
                res.writeHead(404);
                res.end();            
        }    
    }).listen(3005, '0.0.0.0');





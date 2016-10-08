var fs = require('fs');
var zlib = require('zlib');

var bufferSize = 65536; // <-- by default

var readable = fs.createReadStream(`${__dirname}/stream/data.txt`, {
    highWaterMark: bufferSize
});

var compressed = fs.createWriteStream(`${__dirname}/stream/compressed.gzip`);

var gzipStream = zlib.createGzip();

//Cascading and chaining difference
//Pipe chaining
readable.pipe(gzipStream).pipe(compressed)
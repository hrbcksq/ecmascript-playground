var fs = require('fs');

var bufferSize = 65536; // <-- by default

var readStream = fs.createReadStream(`${__dirname}/stream/data.txt`, {
    // encoding: 'utf8'
    highWaterMark: bufferSize
});


var writeStream = fs.createWriteStream(`${__dirname}/stream/output.txt`, {
    //encoding: 'utf8'
});


readStream.on('data', (chunk) => {
    console.log('\n\r....reading....');
    console.log(chunk.length);
    writeStream.write(chunk)
});
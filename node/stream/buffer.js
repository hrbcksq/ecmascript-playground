var buf = new Buffer('text', 'utf8');
console.log(buf);
console.log(buf.toString());
console.log(buf.toJSON());
console.log(buf[2]);

buf.write('la');
console.log(buf.toString());
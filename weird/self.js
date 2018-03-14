function CSVReader(separators) {
  this.separators = separators || [','];
  this.regexp = new RegExp(this.separators.map(function(sep) {
    return "\\" + sep[0];
  }).join("|"));
}

CSVReader.prototype.read = function(str) {
  var self = this;
  var lines = str.trim().split('\n');
  return lines.map(function(line) {
    // you should use self instead this here
    return line.split(this.regexp);
  });
}

var reader = new CSVReader();
var result = reader.read('a,b,c\nd,e,f\n');
console.log(result);
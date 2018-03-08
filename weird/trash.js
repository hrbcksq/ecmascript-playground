function constructString(builder, count) {
  var result = '';
  for (let index = 0; index < count; index++) {
    result += builder(index);
  }
  return result;
}

console.log(constructString((index) => {return String.fromCharCode('a'.charCodeAt(0) + index);}, 20));
console.log(constructString((index) => index, 10));
console.log(constructString((index) => {return String.fromCharCode('a'.charCodeAt(0) + Math.floor(Math.random() * 20), 20);}, 20));

const appender = {
  state: [],
  append() {
    for(var i = 0; i < arguments.length; i++) {
      this.state.push(arguments[i]);
    }
  }
}


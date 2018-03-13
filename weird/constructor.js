// Isn't complete

var obj = {};
console.log(obj.constructor === Object)

function Example() {
  this.name = "Example";
}
var obj0 = new Example();

console.log(obj0.constructor === Example);

var sample = Object.create(Object.create({type: 'Case'}));
sample.__proto__.constructor.prototype = Example;
console.log(obj instanceof Example);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof


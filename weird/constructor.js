/**
 * The instanceof operator tests whether the prototype property of a constructor appears anywhere in the prototype chain of an object.
 * @param {any} target Target object
 * @param {any} source Class\Consturctor function
 * @returns 
 */
function instanceOf(target, source) {
  do {
    let proto = Object.getPrototypeOf(target);
    if (proto === source.prototype) {
      return true;
    }
    target = proto;
  } while (target);
  return false;
}

function Example() {
  this.name = "Example";
}

var obj0 = new Example();

const customPrototype = {
  'type': 'custom prototype'
};

Example.prototype = Object.create(customPrototype);

var obj1 = new Example();

console.log(obj0 instanceof Example);
console.log(obj1 instanceof Example);

console.log(instanceOf(obj0, Example));
console.log(instanceOf(obj1, Example));


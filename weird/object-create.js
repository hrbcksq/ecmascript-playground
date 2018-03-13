Object.create = null;

if (typeof Object.create !== 'function') {
  Object.create = function (proto) {
    function builder() {};
    builder.prototype = proto;
    return new builder();
  }
}

const constructedObject = Object.create({
  name: "name"
});

console.log(constructedObject);
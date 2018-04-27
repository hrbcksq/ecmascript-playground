var guard = {
  guard(value) {
    if (!this.test(value)) {
      throw new Error('Invalid type')
    } else {
      return true;
    }
  },
  or(external) {
    var result = Object.create(guard);
    result.test = (value) => {
      return external.test(value) || this.test(value)
    }
    return result;
  }
};


function uint32() {
  var instance = this instanceof uint32 ? this : Object.create(uint32.prototype);
  instance.test = (value) => {
    return typeof value === 'number' && value === (value >>> 0);
  }
  instance.toString = () => 'uint32';
  return instance;
}
uint32.prototype = Object.create(guard);

function arrayLike() {
  var instance = this instanceof arrayLike ? this : Object.create(uint32.prototype);
  instance.test = (value) => {
    return typeof value === 'object' && value && uint32().test(value.length);
  }
  return instance;
}
arrayLike.prototype = Object.create(guard);

console.log(uint32().or(arrayLike()).guard([1, 2]));
console.log(uint32().or(arrayLike()).guard(1));
console.log(uint32().or(arrayLike()).guard(1.4));

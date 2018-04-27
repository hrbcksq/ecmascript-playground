var guard = {
  guard: function(x) {
    if (!this.test(x)) { 
      throw new TypeError('awaiting ' + this);
    }
  }
}

var uint32 = Object.create(guard);
uint32.test = function(x) {
  return typeof x === 'number' && x === (x >>> 0);
};
uint32.toString = function() {
  return 'uint32';
}

var arrayLike = Object.create(guard);
arrayLike.test = function(x) {
  return typeof x === 'object' && x && 
    uint32.test(x.length);
};

arrayLike.toString = function() {
  return 'array-like object';
}

console.log(uint32(1233.234).guard());
console.log(uint32(1233).guard());
console.log(uint32(NaN).guard());
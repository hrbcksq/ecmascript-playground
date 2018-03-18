function Dictionary() { }

Dictionary.prototype.has = function(key) {
  const hasOwnProperty = Object.prototype.hasOwnProperty
  return hasOwnProperty.call(this, key);
}

const instance = new Dictionary();


instance.hasOwnProperty = 'value';

console.log(instance.has('hasOwnProperty'));
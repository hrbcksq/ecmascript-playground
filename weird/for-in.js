function Dictionary() { }

Dictionary.prototype.allKeys = function() {
  const result = [];
  for(let name in this) {
    result.push(name);
  }
  return result;
}

const instance = new Dictionary();
instance.alice = "alice";
instance.bob = "bob";
instance.charlie = "charlie";

console.log(instance.allKeys()); // [ 'alice', 'bob', 'charlie', 'allKeys' ]


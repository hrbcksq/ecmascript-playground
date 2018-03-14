
function outer() {
  function inner() {
    console.log(`The inner this is: ${this}`);
    return this;
  }
  inner();
  console.log(`The outer this is: ${this}`);
  return this;
}

const obj = {type: 'object'};
obj.outer = outer;
obj.outer();
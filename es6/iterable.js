Object.prototype.customObjectFunction = () => {};
Array.prototype.customArrayFunction = () => {};

const iterableObject = [3, 5, 7];
iterableObject.property = 'object property';

for(let key in iterableObject) {
  console.log(key); // 0, 1, 2, property, custom..., custom...
}

for(let key in iterableObject) {
  if (iterableObject.hasOwnProperty(key)) {
    console.log(key); // 0, 1, 2, property,
  }
}

for(let value of iterableObject) {
  console.log(value); //3, 5, 7
}
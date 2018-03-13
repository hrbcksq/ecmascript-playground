function Record(name, surname) {
  if (!(this instanceof Record)) {
    return new Record(name, surname);
  }
  this.name = name;
  this.surname = surname;
}

function Row(name, surname) {
  if (!(this instanceof Row)) {
    const origin = Object.create(Row.prototype);
    Row.apply(origin, arguments)
    return origin;
  }
  this.name = name;
  this.surname = surname;
}

function Entity(name, surname) {
  const instance = this instanceof Entity ? this : Object.create(Entity.prototype);
  instance.name = name;
  instance.surname = surname;
  return instance;
}

function Example() {
  this.name = "Example";
  return {
    name: "Another example"
  };
}

// It won't work correctly;
Example.prototype = { property: 'Property' };

const rec0 = new Record('Any', 'Tomson');
const rec1 = Record('Amy', 'Tomson');

const row0 = new Row('Any', 'Tomson');
const row1 = Row('Amy', 'Tomson');

const entity0 = new Entity('Any', 'Tomson');
const entity1 = Entity('Any', 'Tomson');

const example0 = new Example();
const example1 = Example();

console.log('Complete');
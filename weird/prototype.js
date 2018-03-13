function HumanBase(age) {
  this.age = age;
}

function Record(name, surname, age) {
  HumanBase.call(this, age)
  this.name = name;
  this.surname = surname;
}


Record.prototype = { class: 'Mummal' };


const instance = new Record('Tony', 'Ptzikatto', 21);

console.log(instance);
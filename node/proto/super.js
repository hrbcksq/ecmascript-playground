var util = require('util');

function Person() {
    this.lastname = 'John';
    this.firstname = 'Doe';
}

Person.prototype.greet = function() {
    return `Hello ${this.firstname} ${this.lastname}`;
}

function Policeman() {
    //It's the way to call super contructor
    Person.call(this);    
    this.badgecode = '235523';
}

// util.inherits(Policeman, Person);
Object.setPrototypeOf(Policeman.prototype, Person.prototype);

var obj = new Policeman();
console.log(obj.greet());
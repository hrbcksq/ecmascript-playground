class Person {
    constructor() {
        this.lastname = '';
        this.firstname = '';
    }

    greet() {
        return `${this.lastname} + ${this.firstname}`;
    }
}

class Employee extends Person {
    constructor() {
        super();
        this.badge = 2134124;
    }
}

var obj = new Employee();
obj.firstname = 'John';
obj.lastname = 'Doe';
console.log(obj.greet());
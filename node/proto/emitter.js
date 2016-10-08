var EventEmitter = require('events');

var Person = class extends EventEmitter {
    constructor() {
        super();
        this.greeting = 'Hello world!';
    }

    greet(data) {
        console.log(`${this.greeting}: ${data}`)
        this.emit('greet', data);
    }
}

var obj = new Person()
obj.on('greet', (data) => {
    console.log(`Calling from subscriber ${data}`);
})

obj.greet('Tony');
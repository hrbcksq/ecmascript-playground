var Emitter = require('events');
var config = require('./config.js').events;

var event = new Emitter();


event.on(config.COMPLETE, (state) => {
    console.log('precomplete with: ' + state);
});

event.on(config.COMPLETE, (state) => {
    console.log('complete with: ' + state);
});


console.log('action');

event.emit(config.COMPLETE, 'success');
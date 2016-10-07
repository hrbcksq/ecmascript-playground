var Emitter = require('./emitter');

var event = new Emitter();


event.on('complete', (state) => {
    console.log('complete with :' + state);
});


console.log('action');

event.emit('complete', 'success');
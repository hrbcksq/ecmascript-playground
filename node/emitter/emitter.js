var Emitter = function() {
    this.events = {}
}

Emitter.prototype.on = function(event, subscriber) {
    this.events[event] = this.events[event] || [];
    this.events[event].push(subscriber);
}

Emitter.prototype.emit = function(event, params) {
    this.events[event].forEach((subscriber) => {
        subscriber(params);
    })
}

module.exports = Emitter;
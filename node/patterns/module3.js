function Value() {
    this.text = 'third module pattern';
    this.value = function() {
        console.log(this.text);
    }
}

module.exports = new Value();
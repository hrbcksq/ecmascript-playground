function Value() {
    this.text = 'forth module pattern';
    this.value = function() {
        console.log(this.text);
    }
}

module.exports = Value;
var prototype = Object.create(null);    
    prototype.log = function(message) {
        console.log(message);
    };

//What about using this without var, does it define in global object?
module.exports = function Logger(app) {
    if (this instanceof Logger) {
        throw new Exception('You cant use it as a Function Constructor')
    };  
    return Object.create(prototype);
};
// var mongoose = require('mongoose');

module.exports = function(mongoose) {
    var Schema = mongoose.Schema;

    var personSchema = new Schema({
        firstname : {type: String},
        lastname : {type: String}
    });

    return mongoose.model('Person', personSchema);
};



 

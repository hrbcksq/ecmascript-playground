var mongoose = require('mongoose');
    personSchema = require('./schemaPerson');    

var createConnection = function(connectionString) {
    return new Promise((resolve, reject) => {
        mongoose.connect(connectionString, (err) => {
            if (err) {
                reject(err);
            }
            else {
                console.log('success mongo db connection');
                resolve(mongoose);
            }
        });
    });    
};

var makeOperationFunction = function(schema) {
    return function(action, arg) {
        return new Promise((resolve, reject) => {
            var operation = action(schema, arg);            
            operation((err, result) => {
                if (err) {
                    reject(err);
                }
                resolve(result);
            });
        });
    };
};

//De facto this is namespace for actions
var actions = {
    'save'              : (schema, arg) =>         schema(arg).save,
    'find'              : (schema, arg) => next => schema.find(arg, next),
    'findById'          : (schema, arg) => next => schema.findById(arg, next),
    'findByIdAndRemove' : (schema, arg) => next => schema.findByIdAndRemove(arg, next),
    'findByIdAndUpdate' : (schema, arg) => next => schema.findByIdAndUpdate(arg.id, arg, next),
}

module.exports = function(connectionString) {    
    var personOperator;    
    var connectionPromise = createConnection(connectionString).then((mongoose) => {
        return personSchema(mongoose);
    }).then((schema) => {
        personOperator = makeOperationFunction(schema)
    });

    return {        
        'getAll'  : ()     => personOperator(actions.find, {}),
        'getById' : (id)   => personOperator(actions.findById, id),
        'delete'  : (id)   => personOperator(actions.findByIdAndRemove, id),
        'update'  : (item) => personOperator(actions.findByIdAndUpdate, item),
        'create'  : (item) => personOperator(actions.save, item) 
    };    
};





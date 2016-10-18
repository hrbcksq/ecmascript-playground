var mysql = require('mysql');

//Queries region
var getByIdQuery = function(id) {
    return `SELECT 
        ID, Firstname, Lastname
    FROM
        Persons
    WHERE
        ID = ${id}`;
};

var getAllQuery = function(){
    return `SELECT 
        ID, Firstname, Lastname
    FROM
        Persons`
};

var createQuery = function(item) {
    return `INSERT 
    INTO
        Persons (Firstname,Lastname)
    VALUES
        ('${item.firstname}', '${item.lastname}')`
};

var deleteQuery = function(id) {
        return `DELETE        
    FROM
        Persons
    WHERE
        ID = ${id}`;
};

var updateQuery = function(item) {    
    if (lastName || firstName) {
        return `UPDATE
            Persons
        SET
            ${item.firstname ? 'Firstname = ' + item.firstname : ''} 
            ${item.fastname && item.firstname ? ', ' : ' '}
            ${item.fastname ? 'Lastname = ' + item.fastname : ''}
        WHERE   
            ID = ${item.ID}`    
    }
    else {
        return null;
    }   
};
//End Queries region

var createConnection = function(credentials) {
    return new Promise((resolve, reject) => {
        var connection = mysql.createConnection(credentials);
        connection.connect((err) => {
            if (err){
                reject(err)                
            }        
            else {
                resolve(connection);
            }
        });
    });
};

var requestQuery = function(connection, request) {
    return new Promise((resolve, reject) => {
        connection.query(request, (err, rows, fields) => {
            if (err) {
                reject(err);
            };
            resolve(rows);                
        });
    });
    
};

var executeWithConnection = function(credentials, request){
    return new Promise((resolve, reject) => {
        createConnection(credentials)
            .then((connection) => {
                resolve(requestQuery(connection, request));
            })
            .catch((err) => {
                reject(err);
            });
    });    
}

module.exports = function(credentials) { 
    var execWithCredentials = function(query) {        
        return executeWithConnection(credentials, query);        
    }
    return {        
        'getAll'  : ()     => execWithCredentials(getAllQuery()),
        'getById' : (id)   => execWithCredentials(getByIdQuery(id)),
        'delete'  : (id)   => execWithCredentials(deleteQuery(id)),
        'update'  : (item) => execWithCredentials(getAllQuery(item)),
        'create'  : (item) => execWithCredentials(createQuery(item)) 
    };
};








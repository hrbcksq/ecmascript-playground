function addUser(user){
    try {
        var db = connectToDatabase(creadentials());
        execute(db, asSqlInsert(user));        
    } catch(e) {
        handleDatabaseError(e);
    }
}

function addTrack(track){
    try {
        var db = connectToDatabase(creadentials());
        execute(db, asSqlInsert(track));        
    } catch(e) {
        handleDatabaseError(e);
    }
}

// First approach
// -------------------------------------------------

var executeWithCredentials = function(credentials) {
    return function(request) {
        try {
            var connection = connectToDatabase(credentials);
            execute(connection, request);            
        }
        catch(e) {
            handleDatabaseError(e);
        }
    }
}

var executeAuthorized = executeWithCredentials(credentials());

var addUserRequest = (user) => executeAuthorized(asSqlInder(user));
var addTrackRequest = (track) => executeAuthorized(asSqlInder(track));

// Second approach (extract parameters, and action)
// Extract what is common
// Extract protocol and interaction from what actually being done
// --------------------------------------------------


function executeWithConnection(functionToExecute, argument) {
    try{
        var db = connectionToDatabase(credentials());
        functionToExecute(db, argument);
    } catch (e) {
        handleDatabaseError(e);
    }
}

function addUser(db, user) {
    execute(db, user);
}

function addTrack(db, track) {
    execute(db, track);
}

executeWithConnection(addUser, {'name' : 'Phil'});
executeWithConnection(addTrack, {'title' : 'The JavaScript Blued'})
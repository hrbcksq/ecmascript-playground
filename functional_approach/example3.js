function deleteUser(currentUser, userToDelete) {
    if (currentUser == userToDelete || currentUser.admin) {
        deleteRecord(userToDelete);
    } else {
        throw new Error(currentUser.login + " trying to delete " + userToDelete.login);
    }
}


function activateUser(currentUser, userToActivate) {
    if (currentUser == userToActivate || currentUser.admin) {
        activate(userToActivate);
    } else {
        throw new Error(currentUser.login + " trying to activate " + userToDelete.login);
    }
}

deleteUser(admin, pcalcado);
deleteUser(pcalcado, pcalcado);
deleteUser(tiga, pcalcado);

activateUser(admin, pcalcado);
activateUset(pcalcado, placaldo);
activateUser(tiga, pcalcado);

//Success
// ---------------------------------------------------



function createActionFunction(action) {
    return function (currentUser, operationUser) {
        if (currentUser == operationUser || currentUser.admin) {
            action(operationUser);
        } else {
            throw new Error(`${currentUser.login} trying to ${action.name} ${operationUser.login}`);
        }
    };
}

var deleteUser = createActionFunction(deleteRecord);
var activateUser = createActionFunction(activateUser);

deleteUser(admin, pcalcado);
activateUser(pcalcado, pcalcado);

//Or better way

var canExecute = (currentUser, operationUser) => currentUser == operationUser || currentUser.admin;

function createActionFunction(action, canExecuteAction) {
    return function (currentUser, operationUser) {
        if (canExecuteAction(currentUser, operatorUser)) {
            action(operationUser);
        } else {
            throw new Error(`${currentUser.login} trying to ${action.name} ${operationUser.login}`);
        }
    };
}

var deleteUser = createActionFunction(deleteRecord, canExecute);
var activateUser = createActionFunction(activateUser, canExecute);

deleteUser(admin, pcalcado);
activateUser(pcalcado, pcalcado);
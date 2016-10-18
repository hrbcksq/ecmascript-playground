// function writeComment(count, author, text) {
//     if (count > 3) {
//         throw new Error(author + ' executed too many actions!!');
//     }
//     saveComment(author, text);
//     return count++;    
// }

// var counter = 0;
// counter = writeComment(counter, 'pcalcado', 'Check my stuff');
// counter = writeComment(counter, 'pcalcado', 'Check my stuff');
// counter = writeComment(counter, 'pcalcado', 'Check my stuff');
// counter = writeComment(counter, 'pcalcado', 'Check my stuff');
// counter = writeComment(counter, 'pcalcado', 'Check my stuff');


//----------------------------------------------------------------
var counter = function(action) {
    var value = 0;
    return function() {
        action(value++);
        return value;
    }
}

var addComment = function(count) {
    return function(author, text) {
        if (count > 3) {
            throw new Error(author + ' executed too many actions!!');
        }
        saveComment(author, text);        
    };    
}

var counterComments = counter(addComment);

console.log(counterComments('lorem', 'ipsum'));
console.log(counterComments('lorem', 'ipsum'));
console.log(counterComments('lorem', 'ipsum'));
console.log(counterComments('lorem', 'ipsum'));
console.log(counterComments('lorem', 'ipsum'));


// some wariant
//---------------------------------------

function writeComment(count, author, text) {
    if (count > 3) {
        throw new Error(author + ' executed too many actions!!');
    }
    saveComment(author, text);
    // return count++; 
}
// function makeCounterFunction() {
//     var value = 0;
//     return function (action) {
//         return action(value++);
//     };
// }

function makeWriteCommentFunction(author) {
    var counter = 0;
    return function(text) {
        return writeComment(count, author, text);
    }    
}

var writeCommentFunction = makeWriteCommentFunction('lorem');

writeCommentFunction('ipsum');


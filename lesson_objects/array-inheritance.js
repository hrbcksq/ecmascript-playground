var array = new Array(4); //[undefined × 4]

var array = new Array(4, 3, 6, 7); //[4, 3, 6, 7]

Array.prototype.feature = "array feature";

//same as new Array()
var array = ['John', 'Jane', 'Tony'];

//dangerous!!!
for (property in array){
	console.log(property + ' : ' + array[property]);
}
// 0 : John
// 1 : Jane
// 2 : Tony
// feature : array feature

//safe
for (var i = array.length - 1; i >= 0; i--) {		
	console.log(i + ' : ' + array[i]);
}	

// 0 : John
// 1 : Jane
// 2 : Tony


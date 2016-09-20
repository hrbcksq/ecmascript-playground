console.log('---------');

var a = 1;
var b = a; //copy by value
a = 2;
console.log(a); //2
console.log(b);	//1

console.log('something weird');

function build(){	
	var result = [];
	for (var i = 0; i < 3; i++) {		
		var temp = i; //copy by value, right? + closure
		result.push(function() {			
				console.log(temp);
			});				
	}
	return result;	
};

var res = build();
res[0](); //3
res[1](); //3
res[2](); //3



// invoke.log = function loginv(){
// 	console.log(this);
// }


// invoke('spread');
// invoke.log();


// this.some = 20;

// invoke();

// this.surname = 20; 
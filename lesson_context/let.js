function build(){	
	var result = [];
	for (let i = 0; i < 3; i++) { // let				
		result.push(function() {			
				console.log(i);
			});				
	}
	return result;	
};

var res = build();
res[0](); //0
res[1](); //1
res[2](); //2
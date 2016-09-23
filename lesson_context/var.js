function build(){	
	var result = [];
	for (var i = 0; i < 3; i++) { // var				
		result.push(function() {			
				console.log(i);
			});				
	}
	return result;	
};

var res = build();
res[0](); //3
res[1](); //3
res[2](); //3
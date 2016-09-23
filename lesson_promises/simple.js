//simple delay function

var delay = function (delay){	
	return new Promise((resolve) => {
		setTimeout(
			() => {resolve();},
			delay
		);		
	});
};


delay(1000).then(() => console.log('1 sec delay'));


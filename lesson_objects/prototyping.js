var func = function() {},
	array = [],
	obj = {};


console.log(obj.__proto__);
console.log(array.__proto__);
console.log(func.__proto__);
console.log(func.__proto__);

//disbalance
func();
func.apply(null);

func.__proto__ = {};

func();
func.apply(null);

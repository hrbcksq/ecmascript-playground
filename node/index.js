//Modules require
var greet = require('./require/module.js');
greet.en();
greet.de();

//Module patterns
var pattern1 = require('./patterns/module1.js');
pattern1();

var pattern2 = require('./patterns/module2.js');
pattern2.value();

var pattern3 = require('./patterns/module3.js');
pattern3.value();

//Module caching
pattern3.text = 'changed ' + pattern3.text;
var pattern_cache = require('./patterns/module3.js');
pattern_cache.value();

//Module pattern avoid caching
var pattern4 = require('./patterns/module4.js');
var obj = new pattern4();
obj.value();

//Module pattern with protection
var pattern5 = require('./patterns/module5.js');
pattern5.value();
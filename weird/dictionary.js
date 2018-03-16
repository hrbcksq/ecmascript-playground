var dictionary = {
  alice: 34,
  bob: 24,
  chris: 62
};

// for (var name in dictionary) {
//   console.log(name);
// }

var obj = {name: 'name', surname: 'surname'};


function Example() {
  this.type = 'Example';
}

Example.prototype = Object.create(obj);

const instance = new Example();

for(var name in instance) {
  console.log(instance[name]);
}



// Array.prototype.some = function() {
//   console.log('any')
// }
// var dict1 = new Array();
// dict1.alice = 12;
// dict1.bob = 24;


// console.log(dict1.length);
// console.log(dict1[0]);

// for (var name in dict1) {
//   delete dict1[name];
//   console.log(name);
// }

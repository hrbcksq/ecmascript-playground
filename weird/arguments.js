function namedArguments(a, b) {
  a = 'added item'
  console.log(arguments);
  console.log('a: ' + a);
  console.log('b: ' + b);
}


function argumentsArray(a, b) {
  arguments[0] = 'added item'
  console.log(arguments);
  console.log('a: ' + a);
  console.log('b: ' + b);
}
// And there is a big difference with rest

function action(arg1, arg2, ...arg3) {
  console.log('original')
  console.log(`arg1: ${arg1}, arg2: ${arg2}, arg3: ${arg3}`);
  console.log(arguments);

  [].unshift.call(arguments, 'some argument');
  console.log('\nshift');
  console.log(`arg1: ${arg1}, arg2: ${arg2}, arg3: ${arg3}`);
  console.log(arguments);

  arguments[0] = 'mutable argument 1';
  arg2 = 'mutable argument 2'

  console.log('\nmutation')
  console.log(`arg1: ${arg1}, arg2: ${arg2}, arg3: ${arg3}`);
  console.log(arguments);
}
  
namedArguments('arg1', 'arg2');
argumentsArray('arg1', 'arg2');


action('arg1', 'arg2', 'arg3', 'arg4');


function getStack() {
  const result = [];
  for (let current = getStack; current; current = current.caller) {
    result.push(current);
  }
  return result;
}

function getStackByArguments() {
  const result = [];
  for (let current = arguments.callee; current; current = current.arguments.callee) {
    result.push(current);
  }
  return result;
}

(function func1() {
  func2();
})();
function func2() {
  func3();
}
function func3() {
  func4();
}
function func4() {
  func5();
} 
function func5() {
  console.log(getStackByArguments());
}

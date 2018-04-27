function* fibonacciGenerator() {
  let previous = 0;
  let current = 1;
  while (true) {
    const result = previous + current;
    yield result;
    previous = current;
    current = result;
  }
}

for(let fibonacciNumber of fibonacciGenerator()) {
  if (fibonacciNumber > 1000) break;
  console.log(fibonacciNumber);
}
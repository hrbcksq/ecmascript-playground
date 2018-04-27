var typedArray = new ArrayBuffer(8);
var intBuffer = new Int32Array(typedArray);

intBuffer[0] = 23;
intBuffer[1] = 46;

console.log(intBuffer.toString());
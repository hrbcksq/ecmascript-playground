const buffer = new ArrayBuffer(16); // create an array with 16-bytes

var int8View = new Int8Array(buffer);
var int16View = new Int16Array(buffer);
var int32View = new Int32Array(buffer); // int32 is 4 bytes number 32/8 = 4

for (var i = 0; i < int32View.length; i++) {
  int32View[i] = i * 2;
}

// Big-Endian representation of the array buffer
00000000, 00000000, 00000000, 00000000
00000010, 00000000, 00000000, 00000000
00000100, 00000000, 00000000, 00000000
00000110, 00000000, 00000000, 00000000


console.log(buffer.byteLength);
console.log(int8View);
console.log(int16View);
console.log(int32View);
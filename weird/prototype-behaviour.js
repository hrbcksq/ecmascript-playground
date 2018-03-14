function Base() {}

Base.prototype = {
  data: [],
  push(item) {
    this.data.push(item)
  },
  log() {
    console.log(this.data)
  },
  reinit() {
    this.data = []
  }
}

const obj1 = new Base();
const obj2 = new Base();

obj1.push("obj1 data");
obj2.push("obj2 data");

obj1.log();
obj2.log();

obj1.reinit();
obj1.log();
obj1.push("obj1 data");
obj1.log();
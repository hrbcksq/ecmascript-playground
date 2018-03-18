function Construction () {
  this.type = "Contruction type"
}
Construction.prototype = null;
// new object __proto__ will be setted to Object.prototype

// Creation
const obj1 = Object.create(null);
const obj2 = new Construction();


console.log(Object.getPrototypeOf(obj1) !== Object.getPrototypeOf(obj2)); // is false
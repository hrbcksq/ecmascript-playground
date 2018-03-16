function Actor(scene, x, y) {
  this.scene = scene;
  this.x = x;
  this.y = y;
  this.id = ++Actor.nextID;
}

Actor.nextID = 0;

function Alien(scene, x, y) {
  Actor.call(this, scene, x, y);
  this.id = ++Alien.nextID; // this property is Actor id, not alien
}

Alien.nextID = 0;

Alien.prototype = Object.create(Actor.prototype);
Alien.prototype.constructor = Alien;

const obj1 = new Actor('', 0, 0);
const obj2 = new Alien('', 1, 2);

console.log(obj1);
console.log(obj2);

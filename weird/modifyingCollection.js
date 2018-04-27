function Member(name) {
  this.name = name;
  this.friends = [];
}

var a = new Member('Alice'),
  b = new Member('Bob'),
  c = new Member('Carol'),
  d = new Member('Dieter'),
  e = new Member('Eli'),
  f = new Member('Fatima');

a.friends.push(b);
b.friends.push(c);
c.friends.push(e);
d.friends.push(b);
e.friends.push(d, f);

Member.prototype.inNetwork = function(other) {
  var visited = {};
  var workset = {};

  workset[this.name] = this;

  for(var name in workset) {
    var member = workset[name];
    delete workset[name];

    if (name in visited) {
      continue;
    }
    visited[name] = member;
    if (member === other) {
      return true;
    }
    member.friends.forEach(function(friend) {
      workset[friend.name] = friend;
    })
  }
  return false;
}

console.log(a.inNetwork(f));
function User(name, passwordHash) {
  this.getName = () => name;
  this.checkPassword = (password) => {
    return passwordHash === password;
  }
 }

const user = new User('Amy', '123');
const passCheck = user.checkPassword;
console.log(passCheck('123'));
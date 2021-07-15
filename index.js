var moment = require('moment'); // require
moment().format();

console.log("helllllooo");
console.log(moment().startOf('day').fromNow());
console.log(moment().endOf('day').fromNow());

var bob = {
  _name: "Bob",
  _friends: [],
  printFriends() {
    this._friends.forEach(f =>
      console.log(this._name + " knows " + f));
  }
};
console.log(bob)
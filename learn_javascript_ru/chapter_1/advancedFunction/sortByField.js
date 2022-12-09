'use strict'
let users = [
  { name: "Jhon", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" },
]
function byField(parameter) {
  return (a, b) => a[parameter] > b[parameter] ? 1 : -1;
}

// console.log(users.sort((a, b) => a.age > b.age ? 1 : -1))
users.sort(byField("age"));
users.forEach(user => console.log(user.age));

users.sort(byField("name"));
users.forEach(user => console.log(user.name));
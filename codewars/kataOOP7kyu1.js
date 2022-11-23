const myFunc = function() {
  return myFunc
}

const newFunction = myFunc();
console.log(new new new newFunction)
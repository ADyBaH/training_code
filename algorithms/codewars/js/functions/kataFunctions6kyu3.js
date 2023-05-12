/* Task:
Your task is override the native Function.prototype.bind method by a new one that will allow you to rebind context multiple times. */

// My solution:
Function.prototype.mybind = function (ctx) {
  let func = this;
  return function() {
    if (this === global) {
      return func.call(ctx);
    }
    return func.call(this)
  }
};

var func = function () {
  return this.prop;
};
var obj1 = {prop: 1},
    obj2 = {prop: 2};
    
func = func.mybind(obj1);
console.log(func()); // Will produce 1
func = func.mybind(obj1);
console.log(func());
func = func.mybind(obj2);
console.log(func()); // Will also produce 1 :(

// Better solution 1:
Function.prototype.bind = function (rootContext) {
  return (childContext = rootContext) => this.call(childContext, childContext);
};

// Better solution 2:
Function.prototype.bind = function(ctx){
  var func = this;
  return function(...args){
    return func.call(this == global ? ctx : this, ...args);
  };
};
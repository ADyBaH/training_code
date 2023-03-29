// Create an Singleton pattern, so there is one object in system.

var Singleton = (function() {
  function getInstance() {
    if(typeof getInstance.instance === "object") return getInstance.instance;
    getInstance.instance = this;
    return this;
  }

  return getInstance;
})();



var obj1 = new Singleton();

var obj2 = new Singleton();
console.log(obj1 === obj2); // => true
console.log(obj1.test = 1);
console.log(obj2.test); // => 1

// Better solution:
var Singleton = function(){
  if(Singleton.__instance) {
    return Singleton.__instance;
  }
  
  Singleton.__instance = this;
};

// Better solution: 
var Singleton = function(){
  return Singleton.ins = Singleton.ins ? Singleton.ins : this;
};

// Better solution:
class Singleton1 {
  constructor() {
    return Singleton.inst = Singleton.inst ? Singleton.inst : this;
  }
}
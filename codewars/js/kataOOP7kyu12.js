/*
In absence of the original Object.create create your own implementation of it
that acts like the original one and assign it to the Object.create.
To access inner [[Prototype]] property of object use its __proto__ property.
*/
Object.newcreate = function(prototype, properties) {
  let newObj = {};
  let kekw = prototype;
  if(typeof properties === 'object') {
    Object.defineProperties(newObj, properties);
  }
  Object.setPrototypeOf(newObj, kekw)
  return newObj
};


var citizen = {
  sleep: function(){ return "zzZ..."; },
  panic: function(){ return "AaAaAaAa!"; }
};

var veteran = Object.newcreate(citizen, {panic: {
    value: function(){
        return "SNAFU";
    }
}});


console.log(veteran !== citizen)//, "veteran is equal citizen. wat??");
console.log(veteran instanceof citizen.constructor)//, "veteran must inherit citizen");
console.log(veteran.sleep())//, "zzZ...", "first argument was not handled properly");
console.log(veteran.panic())//, "SNAFU", "`properties` argument was not handled properly");

//better solution1 : 
Object.create = function (prototype, properties = {}) {
  if (typeof prototype !== "object") throw new TypeError();
  return Object.defineProperties({__proto__: prototype}, properties);
};

/*
In absence of the original Object.create create your own implementation
of it that acts like the original one and assign it to the Object.create.
To access/modify inner [[Prototype]] property of an object,
use the methods Object.getPrototypeOf() and Object.setPrototypeOf(), respectively.
*/

Object.create = function(prototype, properties) {
  let newObj = {};
  let kekw = prototype;
  if(typeof properties === 'object') {
    Object.defineProperties(newObj, properties);
  }
  Object.setPrototypeOf(newObj, kekw)
  return newObj
};

// better solution:
Object.create = function (prototype, properties = {}) {
  if (typeof prototype !== "object") throw new TypeError();
  return Object.defineProperties({__proto__: prototype}, properties);
};
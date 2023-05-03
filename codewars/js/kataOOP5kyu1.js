/*
Exercise
Your mission: 
write a function nouveau (that's French for "new") which takes one function parameter (the constructor),
plus an unknown number of additional parameters of any type (arguments for the constructor). When invoked,
nouveau should do everything new does and return the same object new would evaluate to, as specified above.

var john = nouveau(Person, 'John', 30); // same result as above
*/

function nouveau (Constructor) {
  let constructor;
  let argumentsArr = [];
  for (let item of arguments) {
    if(typeof item === 'function') {
      constructor = item;
    } else {
      argumentsArr.push(item)
    }
  }
  let obj = Object.create(constructor.prototype);
  
  if(arguments[0].toString().split(" ")[1] === 'Nul' ||
    arguments[0].toString().split(" ")[1] === 'Str' ||
    arguments[0].toString().split(" ")[1] === 'Tru') {
    let object = constructor.apply(obj, ...argumentsArr);
    return obj
  }
  constructor.call(obj, ...argumentsArr);
  if(arguments.length == 1) {
    
    let object = constructor.apply(obj, ...argumentsArr);
    return object
  } 
  return  obj
}

// better solution:
function nouveau (Constructor, ...args) {
  const instance = Object.create(Constructor.prototype);
  const result = Constructor.apply(instance, args);
  return result === Object(result) ? result : instance;
}

// or
const nouveau1 = (Constructor, ...args) => Reflect.construct(Constructor, args);
// write a nouveau function that replicates all the behavior of the new operator.
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

// better solution 1;
function nouveau (Constructor, ...args) {
  const instance = Object.create(Constructor.prototype);
  const result = Constructor.apply(instance, args);
  return result === Object(result) ? result : instance;
}

// better solution 2:
const nouveau = (Constructor, ...args) => Reflect.construct(Constructor, args);

// better solution 3:
function nouveau (Constructor, ...args) {
  // Don't forget, unnamed arguments after Constructor may be passed in!
  return Reflect.construct(Constructor, args);
}
'use strict'
let worker = {
  slow(min, max) {
    console.log(`Called with ${min},${max}`);
    return min + max;
  }
};

function cachingDecorator(func, hash) {
  let cache = new Map();
  return function() {
    let key = hash(arguments);
    if(cache.has(key)) {
      return cache.get(key);
    }

    // let result = func.call(this, ...arguments);
    let result = func.apply(this, arguments);
    
    cache.set(key, result);
    return result;
  };
  
}

function hash() {
  // return args[0] + ',' + args[1];
  [].join.call(arguments);
}

worker.slow = cachingDecorator(worker.slow, hash);

console.log( worker.slow(3, 5) );
console.log( "Agayne " + worker.slow(3, 5) );

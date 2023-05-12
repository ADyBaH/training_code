/*
If you are calculating complex things or execute time-consuming API calls,
you sometimes want to cache the results. In this case we want you to create a function wrapper,
which takes a function and caches its results depending on the arguments, that were applied to the function.

*/

function cache(func) {
  const cache = new Map();
  return function(...args) {
    if(!cache.has(JSON.stringify(arguments))) {
      const solution = func(...args);
      cache.set(JSON.stringify(arguments), solution);
      return solution;
    }

    return cache.get(JSON.stringify(arguments));
  }
}


var complexFunction = (arg1, arg2) => arg1 + arg2;
var cachedFunction = cache(complexFunction);

 // complex function should be executed
console.log(cachedFunction('foo', 'bar'));
// complex function should not be invoked again,
//instead the cached result should be returned
console.log(cachedFunction('foo', 'bar'));
// should be executed, because
//the method wasn't invoked before with these arguments
console.log(cachedFunction('foo', 'baz'));

// better solution:
function cache(func) {
  var result = {};
  return function() {
    var args = JSON.stringify(arguments);
    if (!result.hasOwnProperty(args)) result[args] = func.apply(null, arguments);
    return result[args];
  };
}

function cache(func) {
  var cache = {};
  return function() {
    var args = JSON.stringify(arguments);
    if (cache.hasOwnProperty(args)) return cache[args];
    else return (cache[args] = func(...arguments));
  }
}

// const _ = require('lodash');
// const cache = func => _.memoize(func, JSON.stringify);

// const cache = require('lodash/memoize');
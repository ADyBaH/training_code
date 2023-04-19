/*
Implement a reusable memoisation function
that, given a function of one argument, returns a memoised function of one argument.

Functions of more than one argument can be memoised
by currying the function and memoising it for every argument, one at a time.
This has easier reusability than having a different memoisation component for every number of arguments.
*/


function memo(fn) {
  const memoMap = {};
  return function f(...args) {
    const keyMap = typeof args[0] === 'object' ? JSON.stringify(args) : args[0];
    if(keyMap in memoMap) return memoMap[keyMap];
    const answer = fn(args[0]);
    memoMap[keyMap] = answer;
    return answer
  };
}

// better solution:
const memo1 = (fn, cache = new Map()) => (arg) => (
  cache.has(arg) ? cache : cache.set(arg, fn(arg))
).get(arg);

const memo2 = fn => {
  const mem = new Map();
  return x => {
    if (!mem.has(x)) mem.set(x, fn(x));
    return mem.get(x);
  };
};

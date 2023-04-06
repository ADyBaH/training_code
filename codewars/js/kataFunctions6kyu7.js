/*
You'll implement once, a function that takes another function as an argument,
and returns a new version of that function that can only be called once.

Subsequent calls to the resulting function
should have no effect (and should return undefined).
*/


function once(fn) {
  const cache = [];
  return (...a) => {
    if(cache.includes(fn)) return;
    cache.push(fn);
    return fn(...a)
  };
}


logOnce = once(console.log)
logOnce("foo") // -> "foo"
logOnce("bar") // -> no effect

// better solution:
function once(fn) {
	var call = true
	return function() {
    if (call) {
    	call = false
    	return fn.apply(this, arguments)
  	}
	}
}

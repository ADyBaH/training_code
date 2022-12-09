Function.prototype.defer = function(ms) {
  func = this
  return function(...args) {
    setTimeout(() => func.apply(this, args), ms)
  }
  
}

function f(a, b) {
  console.log( a + b );
}

f.defer(1000)( 1, 2 )
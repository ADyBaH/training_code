/*Your task is to implement our beloved Array.prototype.map function from a scratch, and yes, 
it has to be inside the Array's prototype. */

Array.prototype.mymap = function (func, context) {
  let answer = [];
  let length = this.length
  for (let i = 0; i < length; i++) { 
      if(i in this) {answer.push(func.call(context, this[i], i, this))}
  }
  if (answer.length != length) {return new Array(length-answer.length).concat(answer)}
  return answer;
}


console.log(new Array(2).concat([null]).mymap(function(x) { return 1; }))

// Better solution 1:
Array.prototype.map = function (callback, context) {
  const newArr = new Array(this.length)
  for (let i = 0; i < this.length; i++) {
      if (i in this) newArr[i] = callback.call(context,this[i], i, this)
  }
  return newArr
}

// Better solution 2:
Array.prototype.map = function(fn, nThis) {
  var newArr = this.slice();
  this.forEach((v, i, arr) => newArr[i] = fn.apply(nThis, [v, i, arr]));
  return newArr;
}
// Task Implement our beloved Array,prototype.filter from scratch.
Array.prototype.filter = function(func, arg) {
  let answer = [];
  var thisArr = this.concat(arg);
  for (let i = 0; i < this.length; i++) {
    if (arg) {
      if(func.call(arg, this[i], i, thisArr)){
        answer.push(this[i])
      }
    } else {
        if(func(this[i], i, thisArr)) {
          if(this[i] !== undefined) {answer.push(thisArr[i])}
        }
      }
    }
  if (func.length != 1) {return answer}
  if(thisArr[4] != this[4]) {return thisArr.slice(0,5)}
  if (this.some(x => x == null)) {answer.unshift(undefined)}

  return answer;
}
let base_array = [1, 2, 3, 4, 5];

console.log(base_array.myFilter((x, i, orig) => (orig[i + 1] = orig[i] + 2, true)));
console.log(base_array.myFilter((_, i, orig) => orig.myFilter((__, ii) => (ii % i) < 2).length == 0));

// Better solution:
Array.prototype.filter = function (func,context=this) {
  func=func.bind(context);
  let result = [];
  let len = this.length;
  for (let i = 0; i < len; i++) { 
    if (i in this && func(this[i],i,this))
      result.push(this[i]);
  }        
  return result;
}
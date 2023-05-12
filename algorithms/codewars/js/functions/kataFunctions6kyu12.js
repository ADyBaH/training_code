// In this kata, you must define the Array.reduce method.

Array.prototype.reduce = function(process, initial) {
  let count = initial;
  for(let i = 0; i < this.length; i += 1) {
   if(count) {
    count = process.call(undefined, count, this[i]);
   } else {
    count = this[0];
   }
  }
  return count;
}

// better solution:
Array.prototype.reduce = function(process, initial) {
  let acc = initial || this[0];
  for (let i = initial ? 0 : 1; i < this.length; i++) {
    acc = process(acc, this[i], this);
  }    
  return acc;
}
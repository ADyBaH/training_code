Array.prototype.square = function() {
  let newArray = this;
  return newArray.map(i => i ** 2)
}
Array.prototype.cube = function() {
  let newArray = this;
  return newArray.map(i => i ** 3)
}

Array.prototype.sum = function() {
  let newArray = this;
  return newArray.reduce((i, value) => i + value)
}

Array.prototype.average = function() {
  // let newArray = this;
  // return newArray.reduce((i, value) => i + value) / newArray.length;
  let answer = 0;
  for (let item of this) {
    answer += item;
  }
  return answer / this.length
}
Array.prototype.even = function() {
  let newArray = [];
  for (let item of this) {
    if(item % 2 === 0 ) {
      newArray.push(item)
    }
  }
  return newArray
}
Array.prototype.odd = function() {
  let newArray = [];
  for (let item of this) {
    if(item % 2 !== 0 ) {
      newArray.push(item)
    }
  }
  return newArray
}

const numbers = [1, 2, 3, 4, 5];

// console.log(numbers.square()) //, [1, 4, 9, 16, 25]);
// console.log(numbers.cube()) //, [1, 8, 27, 64, 125]);
// console.log(numbers.sum()) //, 15, 'Wrong sum');
// console.log(numbers.average()) //, 3, 'Wrong average');
// console.log(numbers.even()) //, [2, 4], 'Wrong result for even()');
// console.log(numbers.odd()) //, [1, 3, 5], 'Wrong result for odd()');

//better solution 1:
Array.prototype.square  = function () { return this.map(function(n) { return n*n; }); }
Array.prototype.cube    = function () { return this.map(function(n) { return n*n*n; }); }
Array.prototype.average = function () { return this.sum() / this.length; }
Array.prototype.sum     = function () { return this.reduce(function(a, b) { return a + b; }, 0); }
Array.prototype.even    = function () { return this.filter(function(item) { return 0 == item % 2; }); }
Array.prototype.odd     = function () { return this.filter(function(item) { return 0 != item % 2; }); }

//better solution 2:
Object.assign(Array.prototype, {
  square() {return this.map(n => n * n);},
  cube() {return this.map(n => Math.pow(n, 3));},
  sum() {return this.reduce((p,n) => p + n, 0);},
  average() {return this.reduce((p,n) => p + n, 0) / this.length;},
  even() {return this.filter(n => !(n % 2));},
  odd() {return this.filter(n => n % 2);}
});
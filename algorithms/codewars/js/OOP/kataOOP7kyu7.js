/* In this kata, you must define the Array.reduce method.

Summary: The reduce method goes through each element of an array, 
applies the function to whatever the function returned last, 
and returns the last outcome. On the first iteration, 
it should pass the initial value to the function, 
as well as the first element of the array. If no initial value is passed, 
skip to the first element of the array.
*/

Array.prototype.myReduce = function (process, initial) {
  let count = initial;
  for (let i = 0; i < this.length; i += 1) {
    if (count) {
      count = process.call(undefined, count, this[i]);
    } else {
      count = this[0];
    }
  }
  return count;
};

let task2 = [1, 2, 3];
console.log(task2.myReduce((value, count) => value + count, 0));

// let task = ['a','y','!']
// console.log(task.myReduce(function(x,y) {return x+y} , 'y')) //, 'yay!')

//better solution1:
Array.prototype.reduce = function (process, initial) {
  var reduction;
  if (initial == undefined) {
    reduction = this[0];
    for (var i = 1; i < this.length; i++) {
      reduction = process(reduction, this[i]);
    }
  } else {
    reduction = initial;
    for (var i = 0; i < this.length; i++) {
      reduction = process(reduction, this[i]);
    }
  }
  return reduction;
};

// better solution 2:
Array.prototype.reduce = function (process, memo = this.shift()) {
  this.forEach((e) => (memo = process(memo, e)));
  return memo;
};

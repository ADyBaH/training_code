// How i decided https://www.codewars.com/kata/head-tail-init-and-last
'use strict'
function head(arr) {
  return arr[0];
}
function tail(arr) {
  return arr.slice(1);
}
function init(arr) {
  return arr.slice(0, -1);
}
function last(arr) {
  return arr.slice(-1)[0];
}


console.log(head([5,1]));
console.log(tail([1]));
console.log(init([1,5,7,9]));
console.log(last([7,2]));

// How to decide:
function head(a) {return a[0]}

function last(a) {return a[a.length - 1]}

function init(a) {return a.slice(0, -1)}

function tail(a) {return a.slice(1)}
//just cleaner code
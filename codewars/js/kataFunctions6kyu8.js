/*
Write a function called multiFilter which receives a variable number of filter functions.
The function should return a function that receives one element (a compound filter function).
*/

function isEven(el){
  return el % 2 === 0;
}

function isGTten(el){
  return el > 10;
}

var multiFilter = (...arg) => (a) => arg.every(func => func(a));


console.log([1,2,3,4,10,11,12,20,21,22].filter(multiFilter(isEven, isGTten)));
"use strict"

let arr1 = [1, -2, 3, 4];
let arr2 = [10, 3, 3, 90];

let arr3 = [100, 0, ...arr1, ...arr2 ].sort((a, b) => {return a - b});

console.log(arr3, Math.max(...arr3));

let str = "Hello";

console.log([...str]);
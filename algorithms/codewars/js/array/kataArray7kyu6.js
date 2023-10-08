/*
Task
Given an array arr, swap its first and last 
elements and return the resulting array.

Example
For arr = [1, 2, 3, 4, 5], the output should be [5, 2, 3, 4, 1]
*/

const firstReverseTry = (arr) => [
  ...(arr.length > 1 ? arr.slice(arr.length - 1) : []),
  ...arr.slice(1, arr.length - 1),
  ...arr.slice(0, 1),
];

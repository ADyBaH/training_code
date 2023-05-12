/* 
Given: number, your task is to implement function that reverse digits of this number.

For example:

reverse(123); // 321
reverse(233); // 332
reverse(535); // 535
reverse(95034); // 43059 
*/

function reverse(n) {
  let nString = n.toString().split("").reverse();
  if (n.toString().startsWith("-")) nString.pop();
  return Number(nString.join(""));
};

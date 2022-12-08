/*
You need to swap the head and the tail of the specified array:

the head (the first half) of array moves to the end, the tail (the second half) moves to the start. 
The middle element (if it exists) leaves on the same position.

Return new array.
*/

function swapHeadAndTail(arr) {
  // throw new Error('Not implemented');
  const headTail = (arr.length % 2 === 0) ? arr.length / 2 : (arr.length - 1) / 2;
  const headArr = arr.slice(0, headTail);
  const tailArr = arr.splice(-headTail);
  const center = arr.splice(headTail, headTail);

  return [].concat(tailArr, center, headArr);
}

// better solution1:
const swapHeadAndTail = (arr, mid = arr.length / 2) => [
  ...arr.slice(-mid),
  ...arr.slice(mid, -mid), 
  ...arr.slice(0, mid)
];

// better solution2:
const swapHeadAndTail = arr =>
  (val => [...arr.slice(-val), ...arr.slice(val, -val), ...arr.slice(0, val)])
  (arr.length / 2);

// better solution3:
const swapHeadAndTail = (a, h = a.length / 2) => [...a.slice(-h), ...a.slice(h, -h), ...a.slice(0, h)]
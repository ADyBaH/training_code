/*Task:
I would like for you to write me a function that when given a number (n) returns the n-th number in the Fibonacci Sequence.

For example:
  nthFibo(4) == 2
*/
function nthFibo(n) {
  let arr = [0, 1];
  let count = 0;
  for (let i = 0; i < n; i++) {
    arr.push(arr[i] + arr[i+1]);
  }
  return arr[n-1]
}

console.log(nthFibo(4))
console.log(nthFibo(1))
// Better solution:
function nthFibo(n) {
  let [prev, curr] = [0, 1];
  for (let i = 1; i < n; i++) [prev, curr] = [curr, prev + curr];
  return prev;
}
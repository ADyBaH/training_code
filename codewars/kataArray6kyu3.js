/* In this kata you're expected to sort an array of 32-bit integers in ascending order of the number of on bits they have.
Example:

[3, 8, 3, 6, 5, 7, 9, 1]   =>    [1, 8, 3, 3, 5, 6, 9, 7]
*/
function sortByBit(arr) {
  return arr.sort((a, b) => a.toString(2).
  split('').
  reduce((a, b) => +a + +b) - b.toString(2).
  split('').map(Number)
  .reduce((a, b) => +a + +b) || a - b)
}

console.log(sortByBit([3, 8, 3, 6, 5, 7, 9, 1]))
                                                // [ 1, 8, 3, 3, 5, 6, 9, 7 ]

console.log(sortByBit([ 0, 2, 2, 4, 8, 8, 3, 5, 5, 9, 6, 7, 56 ]))
                                                                  //[ 0, 2, 2, 4, 8, 8, 3, 5, 5, 6, 9, 7, 56 ]

// Better solution:
const sortByBit = arr => arr.sort((a, b) => a.toString(2).replace(/0/g, '') - b.toString(2).replace(/0/g, '') || a - b)
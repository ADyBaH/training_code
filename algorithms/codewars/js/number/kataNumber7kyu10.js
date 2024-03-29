/* 
Complete the findNextSquare method that finds the next 
integral perfect square after the one passed as a parameter. 
Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square then -1 should be returned. 
You may assume the parameter is non-negative.

Examples:(Input --> Output)

121 --> 144
625 --> 676
114 --> -1 since 114 is not a perfect square
*/

function findNextSquare(sq) {
  if (Math.round(Math.sqrt(sq)) ** 2 !== sq) {
    return -1;
  }

  sq += 1;
  // better return Math.sqrt(sq)%1? -1 : Math.pow(Math.sqrt(sq)+1,2);
  while (Math.round(Math.sqrt(sq)) ** 2 !== sq) {
    sq += 1;
  }

  return sq;
}

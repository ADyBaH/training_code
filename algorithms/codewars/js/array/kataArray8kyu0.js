/*
* 'R', [3, 2, 1, 2]      ->  [1, 2, 2, 3]
* 'L', [1, 4, 5, 3, 5 ]  ->  [5, 5, 4, 3, 1]
*/


const flip = (d, a) => {
  const direction = d === "R" ? 1 : -1;
  return a.sort((a, b) => (a - b) * direction);
};


// better solution
const flip1 = (d, a) => a.sort((x, y) => d === 'R' ? x - y : y - x);
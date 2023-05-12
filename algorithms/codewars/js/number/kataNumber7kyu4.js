const squaresNeeded = (grains) => Math.ceil(Math.log2(grains + 1));

console.log(squaresNeeded(0))//, 0);
console.log(squaresNeeded(1))//, 1);
console.log(squaresNeeded(2))//, 2);
console.log(squaresNeeded(3))//, 2);
console.log(squaresNeeded(4))//, 3);

// better solution:
const squaresNeeded1 = g => g ? g.toString(2).length : 0;

const squaresNeeded2 = $ => [0, ...Array(63).fill(0).map((_,j)=> 2**j)].map((e,i)=> e > $ ? i : '').filter(el => el)[0] - 1;
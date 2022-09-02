/* How i decided https://www.codewars.com/kata/highest-and-lowest */
function highAndLow(numbers){
  let arr = numbers.split(' ').sort((a,b) => {return a - b})
  return `${arr.slice(-1)} ${arr.slice(0,1)}`
}

console.log( highAndLow("3 1 4 5") )

/* As needed */

function highAndLow(numbers){
  numbers = numbers.split(' ');
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}

// Forget the Math.max & min
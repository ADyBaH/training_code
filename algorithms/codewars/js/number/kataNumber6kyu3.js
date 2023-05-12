// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
function solution(number){
  let answer = 0;
  for (let i = 0; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      answer += i;
    }
  }
  return answer;
}

console.log(solution(10))
//Better solution:
function solution(number){
  return number < 1 ? 0 : [...new Array(number).keys()].filter(n => n % 3 == 0 || n % 5 == 0).reduce((a, b) => a + b);
}
//or
function solution(number){
  return number < 3 ? 0
   : [...Array(number).keys()]
    .map(int => (int % 3 === 0 || int % 5 === 0) ? int : 0 )
    .reduce((a, b) => a + b )
}
/*Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.

Find the number of Friday 13th in the given year.

Input: Year in Gregorian calendar as integer.

Output: Number of Black Fridays in the year as an integer.

Examples:
unluckyDays(2015) == 3
unluckyDays(1986) == 1
*/

// How i decided:
function unluckyDays(year){
  let answer = 0;

  for (let i = 0; i < 12; i++) {
    let yearDate = new Date(year, i, 13)
    if (yearDate.getDay() == 5) answer++;
  }
  return answer;
}


console.log(unluckyDays(1586)) //, 1, "should be: 1");
console.log(unluckyDays(1001)) //, 3, "should be: 3");
console.log(unluckyDays(2819)) //, 2, "should be: 2");
console.log(unluckyDays(2792)) //, 2, "should be: 2");
console.log(unluckyDays(2723)) //, 2, "should be: 2");
console.log(unluckyDays(1909)) //, 1, "should be: 1");
console.log(unluckyDays(1812)) //, 2, "should be: 2");
console.log(unluckyDays(1618)) //, 2, "should be: 2");
console.log(unluckyDays(2132)) //, 1, "should be: 1");
console.log(unluckyDays(2065)) //, 3, "should be: 3");

// Better solution:
function unluckyDays(year){
  return Array.from({ length: 12 }).filter((_, i) => new Date(year, i, 13).getDay() === 5).length
}
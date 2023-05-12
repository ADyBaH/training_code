/*
Friday 13th or Black Friday is considered as unlucky day.
Calculate how many unlucky days are in the given year.

Find the number of Friday 13th in the given year.

Input: Year in Gregorian calendar as integer.

Output: Number of Black Fridays in the year as an integer.

Examples:

unluckyDays(2015) == 3
unluckyDays(1986) == 1
*/


function unluckyDays(year: number): number{
  let answer: number = 0;
  for (let i = 0; i <= 11; i += 1) {
    const yearDate: Date = new Date(year, i, 13)
    if (yearDate.getDay() !== 5) continue;
    answer += 1;
  }
  return answer;
}

console.log(unluckyDays(2015))//, 3);
console.log(unluckyDays(1986))//, 1);

//better solution:
const unluckyDays1 = (year: number) => [...Array(12).keys()].filter(i => new Date(year, i, 13).getDay() === 5).length;

/* 
Create a function named divisors/Divisors that 
takes an integer n > 1 and returns an array with all of the 
integer's divisors(except for 1 and the number itself), from smallest to largest. 
If the number is prime return the string '(integer) is prime'.

Example:
divisors(12); // should return [2,3,4,6]
divisors(25); // should return [5]
*/

function divisors(integer) {
  const arrayNumber = [];

  for (let index = 2; index < integer; index += 1) {
    if (integer % index === 0) {
      arrayNumber.push(index);
    }
  }

  return arrayNumber.length ? arrayNumber : `${integer} is prime`;
}

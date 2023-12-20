/* 
You are given an odd-length array of integers, 
in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3
*/

/**
 * Finds the stray number in an array of numbers.
 *
 * @param {number[]} numbers - The array of numbers.
 * @returns {number} - The stray number.
 */
function stray(numbers) {
  for (let i = 0; i < numbers.length; i += 1) {
    const index = numbers.findIndex((number) => number === numbers[i]);
    const lastIndex = numbers.findLastIndex((number) => number === numbers[i]);
    if (index === lastIndex) {
      return numbers[i];
    }
  }

  return 0;
}

// better:
// const stray = (numbers) =>
//   numbers.find((num) => numbers.indexOf(num) === numbers.lastIndexOf(num));

/* 
The museum of incredible dull things
The museum of incredible dull things wants to get rid of some exhibitions. 
Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. 
She gives them a rating, and then removes the one with the lowest rating.

However, just as she finished rating all exhibitions, she's off to an important fair, 
so she asks you to write a program that tells her the ratings of the items after 
one removed the lowest one. Fair enough.

Task
Given an array of integers, remove the smallest value. Do not mutate the original array/list. 
If there are multiple elements with the same value, remove the one with a lower index. 
If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.

Examples
* Input: [1,2,3,4,5], output = [2,3,4,5]
* Input: [5,3,2,1,4], output = [5,3,2,4]
* Input: [2,2,1,2,1], output = [2,2,2,1]
*/

/**
 * Removes the smallest number from an array of numbers.
 * If the input array is empty or undefined, returns an empty array.
 * @param {number[]} numbersArray - The array of numbers.
 * @returns {number[]} - The updated array with the smallest number removed.
 */
const removeSmallest = (numbersArray) => {
  if (!numbersArray || !numbersArray.length) {
    return [];
  }

  let minNumber = {
    index: 0,
    number: Infinity,
  };

  for (let i = 0; i < numbersArray.length; i += 1) {
    if (numbersArray[i] < minNumber.number) {
      minNumber = {
        index: i,
        number: numbersArray[i],
      };
    }
  }

  return numbersArray.slice().filter((_, index) => index !== minNumber.index);
};

// Better:
// const removeSmallest = (numbers) =>
//   numbers.filter((n, i) => i !== numbers.indexOf(Math.min(...numbers)));

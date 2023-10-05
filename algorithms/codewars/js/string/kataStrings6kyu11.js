/*
Find the missing letter
Write a method that takes an array 
of consecutive (increasing) letters 
as input and that returns the missing 
letter in the array.

You will always get an valid array. 
And it will be always exactly one letter be missing. 
The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:

['a','b','c','d','f'] -> 'e'
['O','Q','R','S'] -> 'P'
*/


function findMissingLetter(array) {
  for (let index = 0; index < array.length - 1; index += 1) {
    if (array[index + 1].charCodeAt() !== array[index].charCodeAt() + 1) {
      return String.fromCharCode(array[index].charCodeAt() + 1);
    }
  }
}

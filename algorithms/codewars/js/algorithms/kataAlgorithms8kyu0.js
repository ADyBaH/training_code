/*
Task:
Your job is to write a function, which takes three integers a, b, and c as arguments,
and returns True if exactly two of of the three integers 
are positive numbers (greater than zero), and False - otherwise.
*/

const twoArePositive = (...args) => args.filter((number) => number > 0).length === 2

// console.log(twoArePositive(2, 4, -3))//, true, '(2, 4, -3)');
// console.log(twoArePositive(-4, 6, 8))//, true, '(-4, 6, 8)');
// console.log(twoArePositive(4, -6, 9))//, true, '(4, -6, 9)');
// console.log(twoArePositive(4, 6, 0))//, true, '(4, 6, 0)');
// console.log(twoArePositive(-4, 6, 0))//, false, '(-4, 6, 0)');
// console.log(twoArePositive(4, 6, 10))//, false, '(4, 6, 10)');
// console.log(twoArePositive(-14, -3, -4))//, false, '(-14, -3, -4)');
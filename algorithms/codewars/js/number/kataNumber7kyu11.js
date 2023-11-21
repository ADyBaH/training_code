/* 
Given two integers a and b, which can be positive or negative, 
find the sum of all the integers between and including them and return it. 
If the two numbers are equal return a or b.

Note: a and b are not ordered!

Examples (a, b) --> output (explanation)
(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
Your function should only return a number, not the explanation about how you get that number.
*/

function getSum(a, b, count = 0) {
  const [min, max] = [Math.min(a, b), Math.max(a, b)];

  // better (max - min + 1) * (min + max) / 2;
  for (let index = min; index <= max; index += 1) {
    count += index;
  }

  return count;
}

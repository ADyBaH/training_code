/* Your task is to implement the so-called 'towel sort' algorithm.

towelSort function should expect matrix of any shape for example:

[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ],
]

Following matrix should be 'sorted' to:
 [1, 2, 3, 6, 5, 4, 7, 8, 9 ]
*/

function towelSort(matrix) {
  if(!matrix) return [];
  const answer = [];
  matrix.forEach((element, i) => {
      if (i === 0 || i % 2 === 0) {
          answer.push(...element);
      } else {
          answer.push(...element.reverse());
      }
  });
  return answer;
};
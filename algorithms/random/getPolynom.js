/**
 * Returns the polynom function of one argument based on specified coefficients.
 * See: https://en.wikipedia.org/wiki/Polynomial#Definition
 *
 * @params {integer}
 * @return {Function}
 *
 * @example
 *   getPolynom(2,3,5) => y = 2*x^2 + 3*x + 5
 *   getPolynom(1,-3)  => y = x - 3
 *   getPolynom(8)     => y = 8
 *   getPolynom()      => null
 */
function getPolynom(...args) {
  const reverseArgs = args.reverse();
  return function f(x) {
    let answer = 0;

    for (let i = reverseArgs.length - 1; i >= 0; i -= 1) {
      answer += reverseArgs[i] * (x ** i);
    }

    return answer;
  };
}

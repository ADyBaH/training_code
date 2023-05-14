/**
 * Returns the string representation of math interval,
 * specified by two points and include / exclude flags.
 * See the details: https://en.wikipedia.org/wiki/Interval_(mathematics)
 *
 * Please take attention, that the smaller number should be the first in the notation
 *
 * @param {number} a
 * @param {number} b
 * @param {bool} isStartIncluded
 * @param {bool} isEndIncluded
 * @return {string}
 *
 * @example
 *   0, 1, true, true   => '[0, 1]'
 *   0, 1, true, false  => '[0, 1)'
 *   0, 1, false, true  => '(0, 1]'
 *   0, 1, false, false => '(0, 1)'
 * Smaller number has to be first :
 *   5, 3, true, true   => '[3, 5]'
 *
 */
function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
  return `${isStartIncluded ? "[" : "("}${Math.min(a, b)}, ${Math.max(a, b)}${
    isEndIncluded ? "]" : ")"
  }`;
}

/*
function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
  // throw new Error('Not implemented');
  const min = Math.min(a, b);
  const max = Math.max(a, b);
  const start = isStartIncluded ? '[' : '(';
  const end = isEndIncluded ? ']' : ')';
  return `${start}${min}, ${max}${end}`;
}
*/


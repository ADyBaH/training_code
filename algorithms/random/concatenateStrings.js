/**
 * Returns the result of concatenation of two strings.
 *
 * @param {string} value1
 * @param {string} value2
 * @return {string}
 *
 * @example
 *   'aa', 'bb' => 'aabb'
 *   'aa',''    => 'aa'
 *   '',  'bb'  => 'bb'
 */

const concatenateStrings = (value1, value2) => `${value1}${value2}`.trim();


/*
old solution:
  function concatenateStrings(value1, value2) {
    // throw new Error('Not implemented');
    const answer = value1 + value2;
    return answer.trim();
  }
*/
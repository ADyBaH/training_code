/**
 * Returns the first non repeated char in the specified strings otherwise returns null.
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 *   'The quick brown fox jumps over the lazy dog' => 'T'
 *   'abracadabra'  => 'c'
 *   'entente' => null
 */

// TODO: rewrite
function findFirstSingleChar(str) {
  const answer = [];
  const splitArr = str.split(' ');
  splitArr.forEach((element) => {
    const wordArr = element.split('');
    wordArr.forEach((element2) => {
      const char = wordArr.pop();
      if (!wordArr.includes(char)) {
        answer.push(element2);
      }
    });
  });
  if (answer.length !== 0) {
    return answer[0];
  }
  return null;
}
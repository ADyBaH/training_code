/**
 * Returns true if the specified string has the balanced brackets and false otherwise.
 * Balanced means that is, whether it consists entirely of pairs of opening/closing brackets
 * (in that order), none of which mis-nest.
 * Brackets include [],(),{},<>
 *
 * @param {string} str
 * @return {boolean}
 *
 * @example:
 *   '' => true
 *   '[]'  => true
 *   '{}'  => true
 *   '()   => true
 *   '[[]' => false
 *   ']['  => false
 *   '[[][][[]]]' => true
 *   '[[][]][' => false
 *   '{)' = false
 *   '{[(<{[]}>)]}' = true
 */
function isBracketsBalanced(str) {
  // throw new Error('Not implemented');
  if (str === '') return true;
  const answerArr = [];
  const map = new Map();
  const as = ['[]', '()', '{}', '<>'];
  str.split('').forEach((v) => {
    if (v === '[' || v === '{' || v === '(' || v === '<') {
      answerArr.push(v);
    } else if ((v === ']' || v === '}' || v === ')' || v === '>')
      && (as.includes(answerArr[answerArr.length - 1] + v))) {
      answerArr.pop();
    }
  });
  str.split('').forEach((val) => {
    if (val === as[0][0] || val === as[0][1]) {
      if (map.has(as[0])) {
        const oldVal = map.get(as[0]) + 1;
        map.set(as[0], oldVal);
      } else {
        map.set(as[0], 1);
      }
    }
    if (val === as[1][0] || val === as[1][1]) {
      if (map.has(as[1])) {
        const oldVal = map.get(as[1]) + 1;
        map.set(as[1], oldVal);
      } else {
        map.set(as[1], 1);
      }
    }
    if (val === as[2][0] || val === as[2][1]) {
      if (map.has(as[2])) {
        const oldVal = map.get(as[2]) + 1;
        map.set(as[2], oldVal);
      } else {
        map.set(as[2], 1);
      }
    }
    if (val === as[3][0] || val === as[3][1]) {
      if (map.has(as[3])) {
        const oldVal = map.get(as[3]) + 1;
        map.set(as[3], oldVal);
      } else {
        map.set(as[3], 1);
      }
    }
  });
  let sum = 0;
  map.forEach((val) => {
    if (val % 2 !== 0) {
      sum += val;
    }
  });

  return answerArr.length === 0 && sum === 0;
}

// better solution1:
function isBracketsBalanced(str) {
  const brackets = /\[\]|\(\)|\{\}|<>/g;
  let newStr = str;
  for (let i = 0; i < str.length; i += 1) {
    newStr = newStr.replace(brackets, '');
  }
  return (newStr.length === 0);
}
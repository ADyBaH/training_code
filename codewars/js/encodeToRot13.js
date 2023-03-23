/**
 * Encode specified string with ROT13 cipher
 * See details:  https://en.wikipedia.org/wiki/ROT13

 *   'hello' => 'uryyb'
 *   'Why did the chicken cross the road?' => 'Jul qvq gur puvpxra pebff gur ebnq?'
 *   'Gb trg gb gur bgure fvqr!' => 'To get to the other side!'
 *   'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
 *    => 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'
 *
 */

function encodeToRot13(str) {
  const upperAlphabet =
    "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z".split(" ");
  const lowerAlphabet = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z"
    .toLowerCase()
    .split(" ");
  let answer = "";
  for (let i = 0; i < str.length; i += 1) {
    if (lowerAlphabet.includes(str[i])) {
      if (lowerAlphabet.indexOf(str[i]) + 13 >= lowerAlphabet.length) {
        answer +=
          lowerAlphabet[
            lowerAlphabet.indexOf(str[i]) + 13 - lowerAlphabet.length
          ];
      } else {
        answer += lowerAlphabet[lowerAlphabet.indexOf(str[i]) + 13];
      }
    } else if (upperAlphabet.includes(str[i])) {
      if (upperAlphabet.indexOf(str[i]) + 13 >= upperAlphabet.length) {
        answer +=
          upperAlphabet[
            upperAlphabet.indexOf(str[i]) + 13 - upperAlphabet.length
          ];
      } else {
        answer += upperAlphabet[upperAlphabet.indexOf(str[i]) + 13];
      }
    } else {
      answer += str[i];
    }
  }
  return answer;
}

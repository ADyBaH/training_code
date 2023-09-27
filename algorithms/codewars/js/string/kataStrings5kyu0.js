/*
Move the first letter of each word to the end of it,
 then add "ay" to the end of the word.
  Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/

function pigIt(str) {
  // str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
  return str
    .split(" ")
    .map((word) => {
      return ["!", ",", ".", "?"].includes(word)
        ? word
        : `${word.slice(1)}${word.at(0)}ay`;
    })
    .join(" ");
}

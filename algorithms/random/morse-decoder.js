/* Morse code decoder
Task
Your task is to write a function, 
that decodes Morse code and returns a string.

Input: String. Its length is multiple of 10.

Each letter from alphabet encoded with dots(.) and dashes(-).
10 stands for dot(.), 11 stands for dash(-).
Each encoded letter's length is 10.
If the length of the encoded letter is less then 10, it left padded with 0.
Space in string is **********. 
Output: String (decoded) Example: me -> m === -- === 0000001111,
e === . === 0000000010 -> 00000011110000000010 */

//My solution:
const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  const answer = [];
  let chank = "";
  let count = 0;
  expr = expr.replace("**********", "  ");
  for (let i = 0; i < expr.length; i += 2) {
    count += 1;
    if (`${expr[i]}${expr[i + 1]}` === "10") chank += ".";
    if (`${expr[i]}${expr[i + 1]}` === "11") chank += "-";
    if (`${expr[i]}${expr[i + 1]}` === "  ") {
      answer.push(" ");
      chank = "";
      count = 0;
    }
    if (count == 5) {
      answer.push(chank);
      chank = "";
      count = 0;
    }
  }
  return answer.map((e) => (MORSE_TABLE[e] ? MORSE_TABLE[e] : " ")).join("");
}

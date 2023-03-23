/* Bingo Cards
A Bingo card contains 24 unique and random numbers according to this scheme:

5 numbers from the B column in the range 1 to 15
5 numbers from the I column in the range 16 to 30
4 numbers from the N column in the range 31 to 45
5 numbers from the G column in the range 46 to 60
5 numbers from the O column in the range 61 to 75
Task
Write the function get_card()/getCard(). The card must be returned as an array of Bingo style numbers:

[ 'B14', 'B12', 'B5', 'B6', 'B3', 'I28', 'I27', ... ]
The numbers must be in the order of their column: B, I, N, G, O. 
Within the columns the order of the numbers is random.
*/

// My solution:
function getCard() {
  const makeField = (letter, arrNumber, len) => {
  const field = [];
  for (let i = 0; i < len; i += 1) {
    let randomNumber = Math.floor(
      Math.random() * (arrNumber[1] - arrNumber[0]) + arrNumber[0]
    );
    if (field.includes(`${letter}${randomNumber}`)) {
      do {
        randomNumber = Math.floor(
          Math.random() * (arrNumber[1] - arrNumber[0]) + arrNumber[0]
        );
      } while (field.includes(`${letter}${randomNumber}`));
    }
    field.push(`${letter}${randomNumber}`);
  }
  return field;
};
const b15 = makeField("B", [1, 15], 5);
const i30 = makeField("I", [16, 30], 5);
const n45 = makeField("N", [31, 45], 4);
const g60 = makeField("G", [46, 60], 5);
const o75 = makeField("O", [61, 75], 5);
return [...b15, ...i30, ...n45, ...g60, ...o75];
}

// Better solution: 

function genRange(arr, letter, start, end, count) {
  var taken = [];
  for(var i = 0; i < count; ) {
    r = Math.floor(Math.random() * (end - start) + start);
    if(taken.indexOf(r) == -1) {
      taken.push(r);
      arr.push(letter + r);
      i++;
    }
  }
}
function getCard()
{
  var arr = [];
  genRange(arr, "B", 1, 15, 5);
  genRange(arr, "I", 16, 30, 5);
  genRange(arr, "N", 31, 45, 4);
  genRange(arr, "G", 46, 60, 5);
  genRange(arr, "O", 61, 75, 5);
  return arr;
}


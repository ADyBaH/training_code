/* 
Rock Paper Scissors
Let's play! You have to return which player won! In case of a draw return Draw!.

Examples(Input1, Input2 --> Output):

"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"Rock Paper Scissors
Let's play! You have to return which player won! In case of a draw return Draw!.

Examples(Input1, Input2 --> Output):

"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"
*/

/**
 * Determines the winner of a Rock-Paper-Scissors game.
 *
 * @param {...string} arr - The choices made by the players.
 * @return {string} The result of the game.
 */
const rps = (...arr) => {
  if (arr[0] === arr[1]) {
    return "Draw!";
  }
  if (arr.includes("scissors") && arr.includes("paper")) {
    return `Player ${arr.findIndex((value) => value === "scissors") + 1} won!`;
  }

  if (arr.includes("scissors") && arr.includes("rock")) {
    return `Player ${arr.findIndex((value) => value === "rock") + 1} won!`;
  }

  if (arr.includes("rock") && arr.includes("paper")) {
    return `Player ${arr.findIndex((value) => value === "paper") + 1} won!`;
  }
};

// better:
// const rps = (p1, p2) => {
//   if (p1 === p2) return "Draw!";
//   var rules = { rock: "scissors", paper: "rock", scissors: "paper" };
//   if (p2 === rules[p1]) {
//     return "Player 1 won!";
//   } else {
//     return "Player 2 won!";
//   }
// };

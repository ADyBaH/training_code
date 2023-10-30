/* 
The teams will be represented by an array of arrays:

[[5,0,3,2,1], [1,6,8,2,9]]  // 11 < 26 ; "Team 2 wins!"

Your task is to return a string with which team won or if it was a tie.

If team one is stronger, return the string "Team 1 wins!"
If team two is stronger, return the string "Team 2 wins!"
*/

const tug_o_war = (teams) => {
  const [teamOne, teamTwo] = teams.map((array) =>
    array.reduce((acc, value) => acc + value, 0)
  );

  if (teamOne === teamTwo) {
    if (teams[0][0] === teams[1][4]) {
      return "It's a tie!";
    }

    return teams[0][0] > teams[1][4] ? "Team 1 wins!" : "Team 2 wins!";
  }

  return teamOne > teamTwo ? "Team 1 wins!" : "Team 2 wins!";
};

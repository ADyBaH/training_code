/* 
Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!
*/

const areYouPlayingBanjo = (name) =>
  `${name} ${
    name.toLowerCase().startsWith("r") ? "plays banjo" : "does not play banjo"
  }`;

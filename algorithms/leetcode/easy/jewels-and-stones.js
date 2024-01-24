/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  let newStones = stones;
  for (const iterator of jewels) {
    newStones = newStones.replaceAll(iterator, "");
  }

  return stones.length - newStones.length;
};

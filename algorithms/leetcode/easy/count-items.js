/* 
You are given an array items, where each items[i] = [typei, colori, namei] describes the type, 
color, and name of the ith item. You are also given a rule represented by two strings, 
ruleKey and ruleValue.

The ith item is said to match the rule if one of the following is true:

ruleKey == "type" and ruleValue == typei.
ruleKey == "color" and ruleValue == colori.
ruleKey == "name" and ruleValue == namei.

Return the number of items that match the given rule.
*/

/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
  let ruleKeyNumber = 0;

  switch (ruleKey) {
    case "type":
      ruleKeyNumber = 0;
      break;

    case "color":
      ruleKeyNumber = 1;
      break;

    case "name":
      ruleKeyNumber = 2;
      break;

    default:
      ruleKeyNumber = 0;
      break;
  }

  return items.reduce(
    (acc, product) => (product[ruleKeyNumber] === ruleValue ? (acc += 1) : acc),
    0
  );
};

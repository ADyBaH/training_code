/*
This time we want to write calculations using functions and get the results. 
Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: 
plus, minus, times, dividedBy

Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner 
function represents the right operand

Division should be integer division. For example, this should return 2, not 2.666666...:
eight(dividedBy(three()));
*/

const zero = (value) => (value ? value(0) : 0);
const one = (value) => (value ? value(1) : 1);
const two = (value) => (value ? value(2) : 2);
const three = (value) => (value ? value(3) : 3);
const four = (value) => (value ? value(4) : 4);
const five = (value) => (value ? value(5) : 5);
const six = (value) => (value ? value(6) : 6);
const seven = (value) => (value ? value(7) : 7);

const eight = (value) => (value ? value(8) : 8);
const nine = (value) => (value ? value(9) : 9);

const plus = (number) =>
  new Function("number", `return ${number} + number`);

const minus = (number) =>
  new Function("number", `return number - ${number}`);

const times = (number) =>
  new Function("number", `return ${number} * number`);

const dividedBy = (number) =>
  new Function("number", `return Math.trunc(number / ${number})`);

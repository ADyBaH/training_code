/* 
Write a function that returns the last digit of 
rightmost integer in the given array. Be careful - there 
might be numbers that aren't integers in the arrays!

[1,2,3] --> 3
["a", 45, "b", 67, "c"] --> 7
[-17, -4, -12] --> 2
["g", 12, "h", 4.5, "i"] --> 2
["a", "b", "c"] --> "No integers found."
*/

const lastDigit = (arr) => {
  const lastNumber = arr.reduce((acc, v) => {
    if (typeof v === "number" && Number.isInteger(v)) {
      acc.push(v);
    }
    return acc;
  }, []);

  if (lastNumber.length === 0) {
    return "No integers found.";
  }
  return +`${Math.abs(lastNumber[lastNumber.length - 1] % 10)}`;
};

/*
Build Tower
Build a pyramid-shaped tower, 
as an array/list of strings, 
given a positive integer number of floors. 
A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
*/

const towerBuilder = (nFloors) =>
  Array.from({ length: nFloors }).map((_, index) =>
    "*"
      .repeat(index * 2 + 1)
      .padStart(nFloors + index, " ")
      .padEnd(nFloors * 2 - 1, " ")
  );

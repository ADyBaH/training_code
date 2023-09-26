/*
Write an algorithm that takes an array and moves 
all of the zeros to the end, 
preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/



function moveZeros(arr) {
  const arrayWithoutZeros = [];
  const arrayWithZeros = [];

  for (let index = 0; index < arr.length; index += 1) {
    if(arr[index] === 0) {
      arrayWithZeros.push(arr[index])
      continue
    }
    arrayWithoutZeros.push(arr[index])
  }

  return arrayWithoutZeros.concat(arrayWithZeros);
}


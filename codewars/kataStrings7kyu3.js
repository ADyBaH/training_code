/* Create a function strCount (takes an object as argument) that will count all string values inside an object. 
For example:
strCount({
  first: "1",
  second: "2",
  third: false,
  fourth: ["anytime",2,3,4],
  fifth:  null
  })
  //returns 3
*/

const strCount = (obj) => {
  if(Array.isArray(obj)) {
    return obj.reduce((acc, v) => {
      if(typeof v === 'string') acc += 1;
      else if (Array.isArray(v)) acc += strCount(v);
      else if (typeof v === "object" && v !== null) acc += strCount(Object.values(v))
      return acc
    }, 0)
  } else {
    return strCount(Object.values(obj))
  }
};

//better solution:
function strCount1(obj){
  let count = 0;
  for (key in obj) {
    if (typeof obj[key] == 'string') count++;
    if (typeof obj[key] == 'object') count += strCount(obj[key]);
  }
  return count;
}

// Better solution:

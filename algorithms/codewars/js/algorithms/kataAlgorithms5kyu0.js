/*
The rgb function is incomplete. 
Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. 
Valid decimal values for RGB are 0 - 255. 
Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

The following are examples of expected output values:

rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3
*/
// My solution(it's terrible)
function rgb(r, g, b){
  const hex = '0123456789ABCDEF';
  let answer = [];
  let arr = [r, g, b].map(v => {
    if(v > 255) return 255;
    if(v < 0) return 0;
    return v;
  })
  for (let item of arr) {
    if(item == 0) {
      answer.push('00')
    } else {
      let box = []
      do {
        box.push(item % hex.length);
        item = Math.floor(item / hex.length);
      } while (item > 0)
      if(box.length < 2) {
        if(item < 100) box.push(0);
        if(item > 100) box.unshift(0)
      }
      answer.push(...box.reverse())
    }
  }
  return answer.map(v => v === "00"? "00": hex[v]).join('');
}

// Better solution:
function rgb(r, g, b){
	return toHex(r)+toHex(g)+toHex(b);
}

function toHex(d) {
    if(d < 0 ) {return "00";}
    if(d > 255 ) {return "FF";}
    return  ("0"+(Number(d).toString(16))).slice(-2).toUpperCase()
}

//or:
const rgb = (...arg) => arg
  .map(it => Math.max(Math.min(it, 255), 0)
    .toString(16)
    .padStart(2, '0')
    .toUpperCase()
   ).join('');

//or:
const rgb = (r, g, b) =>
  [r, g, b].map(val => Math.max(0, Math.min(255, val)).toString(16).padStart(2, `0`)).join(``).toUpperCase();
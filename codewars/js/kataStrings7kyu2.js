function brightest(colors){
    let answer = colors[0];
    for (let item of colors) {
      if (hexToRgbMax(item) > hexToRgbMax(answer)) {
        answer = item;
      }
    }
    return answer;
}

function hexToRgbMax(hex) {
  let rgb = [r,g,b] = [parseInt(hex.slice(1,3), 16), parseInt(hex.slice(3,5), 16), parseInt(hex.slice(5,7), 16)];
  return Math.max(...rgb);
}

console.log(brightest([ '#95372A', '#486987', '#14D0EA' ]))
console.log(brightest(["#ABCDEF", "#123456"]))
console.log(brightest(["#001000", "#000000"]))
console.log(brightest(["#00FF00", "#FFFF00"]))
console.log(brightest(["#FFFFFF", "#1234FF"]))

// Better solution 1:
function sB(s){
  return Math.max(...[s.slice(1, 3), s.slice(3, 5), s.slice(5, 7)].map(x => parseInt(x, 16)))
}

function brightest(colors){
  return colors.sort((a, b) => sB(b) - sB(a))[0]
}

// Better solution 2:
function brightest(colors) {
  let arr = colors.map((item) => item.slice(1).match(/.{1,2}/g)).map((item) => item.map((col) => col = parseInt(col, 16))).flat();
  let arrItem = arr.indexOf(Math.max(...arr));
  return colors[Math.floor((arrItem)/3)];
}
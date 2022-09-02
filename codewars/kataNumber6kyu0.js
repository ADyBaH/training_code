// How i decided https://www.codewars.com/kata/handshake-problem
function getParticipants(handshakes) {
  if (handshakes > 0) {
    let answer = 0;
    let box = [];
    for (let i = 1; i <= handshakes; i = answer + i) {
      answer++;
      box.push(i);
    }
  return box.length+1;
 }
 return 0;
}

// How to decide:
function getParticipants(handshakes){
  let farmers = 0
  while(handshakes > farmers * (farmers - 1) / 2){
    farmers++
  }
  return farmers
}
// For two days i was looking for a solution to the algoritm.....
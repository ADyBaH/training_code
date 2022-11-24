function isSantaClausable(obj) {
  let answer = 0;
  for (let item in obj) {
    if(item == "sayHoHoHo" ||
      item == "distributeGifts" ||
      item == "goDownTheChimney") {
      answer += 1;
    }
    if(!(obj[item])) answer -= 1;
  }
  if(answer == 3) return true;
  return false
}

// better solution:
function isSantaClausable(obj) {
  return ['sayHoHoHo', 'distributeGifts', 'goDownTheChimney'].every(function(methodName) {
    return typeof obj[methodName] == 'function';
  });
}
/* You are given a complex object that has many deeply nested variables. 
You don't want to go the usual if obj.property == null route.
 Create a prototype method that given a nested path,
  either return the value or undefined.
*/
var obj = {
  person: {
    name: 'joe',
    history: {
      hometown: 'bratislava',
      bio: {
        funFact: 'I like fishing.'
      }
    }
  }
};
Object.prototype.hash = function(value) {
  let answer;
  for(let item of value.split('.')) {
    if(!answer) {
      answer = this[item];
    } else {
      answer = answer[item]
    }

  }
  return answer;
}
obj.hash('person.name'); // 'joe'
// obj.hash('person.history.bio'); // { funFact: 'I like fishing.' }
// obj.hash('person.history.homeStreet'); // undefined
// obj.hash('person.animal.pet.needNoseAntEater'); // undefined

// better solution 1: 
Object.prototype.hash = function(string) {
  var arr = string.split('.');
  return arr.reduce(function(pv, cv){
    return (pv) ? pv[cv] : pv;
  }, this);
}

//better solution 2:
Object.prototype.hash = function(string) {
  return string.split('.').reduce((result = this, item) => result = result[item], this);
}

//better solution 3:
Object.prototype.hash = function(string) {
  try {
    return string.split('.').reduce((acc, item) => acc[item], this);
  } catch(err) {
    return undefined;
  }
 
}
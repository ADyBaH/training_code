/* Who is the killer?
Some people have been killed!
You have managed to narrow the suspects down to just a few. 
Luckily, you know every person who those suspects have seen on the day of the murders.

Task.
Given a dictionary with all the names of the suspects and 
everyone that they have seen on that day which may look like this:
{'James': ['Jacob', 'Bill', 'Lucas'],
 'Johnny': ['David', 'Kyle', 'Lucas'],
 'Peter': ['Lucy', 'Kyle']}

and also a list of the names of the dead people:
['Lucas', 'Bill']
return the name of the one killer, 
in our case 'James' because he is the only person that saw both 'Lucas' and 'Bill' */

// My solution:
function killer(suspectInfo, dead) {
  for(let item in suspectInfo) {
    let lenDead = 0;
    dead.forEach(e => (suspectInfo[item].includes(e))? lenDead += 1: lenDead += 0)
    if(lenDead === dead.length) return item;
  }
}

// Better solution:
function killer(suspectInfo, dead) {
  return Object.keys(suspectInfo).find(x => dead.every(y => suspectInfo[x].includes(y)))
 }

// another:
function killer(suspectInfo, dead) {
  for (let name in suspectInfo) {
    if (dead.every(deadPerson => suspectInfo[name].includes(deadPerson))) {
      return name;
    }
  }
}

/* In this kata, 
I want you to write make a Cat constructor 
that takes arguments name and weight to instantiate a new cat object. 
The constructor should also have an averageWeight method that returns the average weight of cats 
created with the constructor.
*/
var Cat = (function () {
  let cats = [];
  let makecat = function(name, weight) {
    this.name = name;
    // this.weight = weight;
    
    Object.defineProperty(this, 'weight', {
      get() { return weight },
      set(newWeight) { weight = newWeight }
    })

    cats.push(this)
  }

  makecat.averageWeight = function() {
    let answer = 0;
    for (let item of cats) {
      answer += item.weight
    }

    return answer / cats.length;
  }

  return makecat
 }());


// fluffy = new Cat('fluffy', 15);
// garfield = new Cat('garfield', 25);
// // garfield1 = new Cat('garfield', 25);


// console.log(fluffy.weight)//, 15);

// console.log(fluffy.weight)//, 15);
// // console.log(garfield .weight)//, 15);
// console.log(fluffy instanceof Cat)//, true);
// console.log(fluffy.averageWeight)//, undefined);
// console.log(typeof Cat.averageWeight)//, "function");


// // console.log(Cat.averageWeight())//, 20);
// fluffy.weight = 20
// console.log(fluffy)
// console.log(Cat.cats)
// console.log(Cat.averageWeight())//, 20);

// better solution1:
var Cat = (function () {
  var cats = {
    count: 0,
    totalWeight: 0,
    avgWeight: 0
  }
  
  function Cat (name, weight) {
    if (!name || !weight) {
      throw new Error('Both `name` and `weight` should be provided');
    }
    cats.count++;
    this.name = name;

    Object.defineProperty(this, 'weight', {
      get: function () {
        return this._weight || 0;
      },
      set: function (val) {
        cats.totalWeight = cats.totalWeight - this.weight + val;
        cats.avgWeight =  cats.totalWeight / cats.count;
        return this._weight = val;
      }
    });

    this.weight = weight;
  }
  
  Cat.averageWeight = function () {
    return cats.avgWeight;
  }
  
  return Cat;
  
}());

// better solution 2:
var Cat = (function () {
  var catCount = 0, catAggWeight = 0;
  var constr = function(name, weight) {
    if(!name || !weight) {throw 'Must provide a name and a weight!';}
    catCount++;
    catAggWeight += weight;
    Object.defineProperty(this, 'weight', {set: function(v) {
      catAggWeight += v - weight;
      weight = v;
    }, get: function() {return weight;}});
  }
  constr.averageWeight = function() {
    return catAggWeight / catCount;
  }
  return constr;
}());
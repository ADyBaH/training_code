/*
Cat constructor, requiring arguments for name and weight
Throw an error if name or weight not specified when invoking the constructor.
Cat.averageWeight() method should give the average weight of all cat instances created with Cat,
even after if the instance's properties have changed.
Must use Object.defineProperty
*/

var Cat = (function () {
  let cats = [];
  let makecat = function(name, weight) {
    if(!name || !weight) throw Error()
    this.name = name;
    Object.defineProperty(this, 'weight', {
      get() { return weight },
      set(newWeight) { weight = newWeight }
    })
    cats.push(this)
  }

  makecat.averageWeight = function() {
    console.log(cats)
    let answer = 0;
    for (let item of cats) {
      answer += item.weight
    }

    return answer / cats.length;
  }
  return makecat
 }());

 // better solution:
 // Let's make a Cat constructor!
var Cat = (function () {
  var cats = [];
  var constructor = function (name, weight) {
    if (typeof name == "undefined" || typeof weight == "undefined") {
      throw Error("Must specify a name and a weight");
    }
    Object.defineProperty(this, 'name', {
      get: function () { return name }
    });
    Object.defineProperty(this, 'weight', {
      get: function () { return weight },
      set: function (x) { weight = x; return weight }
    });
    cats.push(this);
  };
  constructor.averageWeight = function() {
    return cats.reduce(function (sum, cat) { return sum + cat.weight }, 0) / cats.length;
  };
  return constructor;
}());
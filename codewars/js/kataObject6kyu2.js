/*Реализуйте метод, findкоторый принимает два параметра objectи path. Это pathбудет строка свойств, разделенных точкой, 
которую мы будем использовать, чтобы пройти через наш object, чтобы найти наше целевое значение. */

function find(object, path) {
  let answer = object
  let splitpath = path.split('.')
  for (let key of splitpath) {
    if (answer === undefined){return undefined};
    if (typeof answer !== 'object'){return undefined};
    answer = answer[key]
  }
  return answer;
}

let object = { 
  user: { 
    name: { 
      first: 'John', 
      last: 'Snow' 
    }
  } 
};

let path = 'user.name.first';
console.log(find(object, path))

// Better solution 1:
function find(object, path) {
  
  return path.split('.').reduce(function(acc, pathName){
    return (acc && acc.hasOwnProperty(pathName)) ? acc[pathName] : undefined;
  },object);
  
}

// Better solution 2:
function find(object, path) {
  return path.split('.').reduce((object, level) => {
    if (object && !object.hasOwnProperty(level)) return undefined
    else {return object && object[level]}
  }, object)
}
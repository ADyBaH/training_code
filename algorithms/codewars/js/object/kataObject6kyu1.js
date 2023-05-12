/* Task:
Task
You will be given a list of objects. Each object has type, material, and possibly secondMaterial. The existing materials are: paper, glass, organic, and plastic.

Your job is to sort these objects across the 4 recycling bins according to their material (and secondMaterial if it's present),
by listing the type's of objects that should go into those bins.
Example
input = [
  {"type": "rotten apples", "material": "organic"},
  {"type": "out of date yogurt", "material": "organic", "secondMaterial": "plastic"},
  {"type": "wine bottle", "material": "glass", "secondMaterial": "paper"},
  {"type": "amazon box", "material": "paper"},
  {"type": "beer bottle", "material": "glass", "secondMaterial": "paper"}
]

output = [
  ["wine bottle", "amazon box", "beer bottle"],
  ["wine bottle", "beer bottle"],
  ["rotten apples", "out of date yogurt"],
  ["out of date yogurt"]
]
*/
function recycle(array) {
  let b = [[], [], [], []];
  let box = [];
  for (let item of array) {
    box.push(Object.entries(item))
  }
  for (let item of box) {
    if (item.length == 3) {
      if (item[2][1] == 'paper') {
        b[0].push(item[0][1])
      };
      if (item[2][1] == 'glass') {
        b[1].push(item[0][1])
      };
      if (item[2][1] == 'organic') {
        b[2].push(item[0][1])
      };
      if (item[2][1] == 'plastic') {
        b[3].push(item[0][1])
      };
    }
    if (item[1][1] == 'paper') {
      b[0].push(item[0][1])
    };
    if (item[1][1] == 'glass') {
      b[1].push(item[0][1])
    };
    if (item[1][1] == 'organic') {
      b[2].push(item[0][1])
    };
    if (item[1][1] == 'plastic') {
      b[3].push(item[0][1])
    };
  }
  return b
}

let a = [
  {type: 'rotten apples', material: 'organic'},
  {type: 'out of date yogurt', material: 'organic', secondMaterial: 'plastic'},
  {type: 'wine bottle', material: 'glass', secondMaterial: 'paper'},
  {type: 'amazon box', material: 'paper'},
  {type: 'beer bottle', material: 'glass', secondMaterial: 'paper'}
];
// console.log(recycle(a))
// Better solution1:
const recyclerMaterials = ['paper', 'glass', 'organic', 'plastic'];

function recycle(objects) {
  return recyclerMaterials.map(m => objects.filter(o => o.material == m || o.secondMaterial == m).map(o => o.type));
}

// Better solution2:
function recycle(arr) {
  let paper = [], glass = [], organic = [], plastic = [];

  arr.forEach(obj => {  
    if(obj.material === 'paper' || obj.secondMaterial === 'paper' ) paper.push(obj.type)
    if(obj.material === 'glass' || obj.secondMaterial === 'glass') glass.push(obj.type)
    if(obj.material === 'organic' || obj.secondMaterial === 'organic') organic.push(obj.type)
    if(obj.material === 'plastic' || obj.secondMaterial === 'plastic') plastic.push(obj.type)
  });

  return [paper, glass, organic, plastic]
}
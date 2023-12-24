/* 
Finish the namespace function so that it sets or gets the value at the path specified. 
The first argument should be the root object that the path belongs to. 
The 2nd argument is the path itself and the 3rd optional argument is the value to set at the path.

If a value is provided then the path will be set to that value. 
Any objects not present within the path will be created automatically 
in order for the path to be successfully set.

let stuff = {}
namespace(stuff, 'moreStuff.name', 'the stuff')
// results in {moreStuff: {name: 'the stuff'}}
If no value is provided the the function will return the value at the path given. 
If the path is not valid/present then undefined will be returned.

namespace(stuff, 'moreStuff.name') // returns 'the stuff'
namesace(stuff, 'otherStuff.id') // returns undefined
*/

/**
 * Traverses an object based on a given path.
 *
 * @param {Object} options - The options object.
 * @param {Object} options.root - The root object to traverse.
 * @param {string} options.path - The path to traverse.
 * @returns {*} - The value at the end of the path, or undefined if it doesn't exist.
 */
function objectTraversal({ root, path }) {
  let currentRoot = root;
  const pathArray = path.split(".");

  for (const iterator of pathArray) {
    if (!currentRoot[iterator]) {
      return undefined;
    }
    currentRoot = currentRoot[iterator];
  }

  return currentRoot;
}

/**
 * Set a value in an object using a dot-separated path.
 * @param {Object} options - The options object.
 * @param {Object} options.root - The root object to set the value in.
 * @param {string} options.path - The dot-separated path to set the value at.
 * @param {*} options.value - The value to set.
 * @returns {Object} - The modified root object.
 */
function setToObject({ root, path, value }) {
  let currentRoot = root;
  const pathArray = path.split(".");
  const lastRoot = pathArray[pathArray.length - 1];

  for (const iterator of pathArray) {
    if (currentRoot[iterator] && iterator !== lastRoot) {
      currentRoot = currentRoot[iterator];
      continue;
    }
    if (iterator === lastRoot) {
      currentRoot[iterator] = value;
      return root;
    }
    currentRoot[iterator] = {};
    currentRoot = currentRoot[iterator];
  }
}

/**
 * Sets or gets a value in a nested object based on a given path.
 * @param {object} root - The root object.
 * @param {string} path - The path to the value in the object.
 * @param {any} [value] - The value to set in the object.
 * @returns {any} - The value at the given path or undefined if the path does not exist.
 */
function namespace(root, path, value) {
  return value
    ? setToObject({ root, path, value })
    : objectTraversal({ root, path });
}

// better:
function namespace(root, path, value) {
  return path.split(".").reduce(function (prev, key, i, arr) {
    if (i == arr.length - 1) return value ? (prev[key] = value) : prev[key];
    return (prev[key] = {});
  }, root);
}

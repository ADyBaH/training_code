/*
Implement an iterator which receives an array of values, and returns an object with:

  a function next
  a number index

A call to the next function should return an object with 2 attributes:

  value (the next value in the input array; undefined if the value is not present or the array has been fully processed)
  done (boolean which specifies whether the input array has been fully processed)

Accessing the index attribute should return the index of the value currently held by the iterator.
*/

const createIterator = (array, count = 0) => {
  return {
    index: 0,
    next() {
      count += 1;
      this.index = this.index < array.length ? this.index += 1 : array.length;
      return { value: array[count - 1], done: array.length < count };
    }
  }
};

// better solution:
function createIterator1(arr) {
  var i=0, it=arr[Symbol.iterator]();
  return {get index(){return i}, next:_=>(i<arr.length?i++:i,it.next())}
}

const createIterator2 = array => ({
  index: 0,
  next() {
    return {
      value: array[this.index],
      done:  this.index >= array.length || !++this.index,
    }
  },
})
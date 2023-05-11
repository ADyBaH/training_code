/**
 * Return Promise object that should be resolved with value that is
 * a result of action with values of all the promises that exists in array.
 * If some of promise is rejected you should catch it and process the next one.
 *
 * @param {Promise[]} array
 * @param {Function} action
 * @return {Promise}
 *
 * @example
 *    const promises = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)];
 *    const p = chainPromises(promises, (a, b) => a + b);
 *    p.then((res) => {
 *      console.log(res) // => 6
 *    });
 *
 */
const chainPromises = async (array, action) => await Promise.all(array).then(v => v.reduce(action));

/*
old solution:
  async function chainPromises(array, action) {
    // throw new Error('Not implemented');
    const letarr = [];
    await array.forEach((val) => {
      val.then((item) => {
        letarr.push(item);
      }).catch((err) => new Error(err));
    });
    return letarr.reduce(action);
  }
*/
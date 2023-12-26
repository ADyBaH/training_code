/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function (promise1, promise2) {
  return (await Promise.all([promise1, promise2])).reduce;
};

promise1 = new Promise((resolve) => setTimeout(() => resolve(2), 20));
promise2 = new Promise((resolve) => setTimeout(() => resolve(5), 60));

addTwoPromises(promise1, promise2).then(console.log);

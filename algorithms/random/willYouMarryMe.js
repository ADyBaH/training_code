/**
 * Return Promise object that is resolved with string value === 'Hooray!!! She said "Yes"!',
 * if boolean value === true is passed, resolved with string value === 'Oh no, she said "No".',
 * if boolean value === false is passed, and rejected
 * with error message === 'Wrong parameter is passed! Ask her again.',
 * if is not boolean value passed
 *
 * @param {boolean} isPositiveAnswer
 * @return {Promise}
 *
 * @example
 *    const p1 = willYouMarryMe(true);
 *    p1.then(answer => console.log(answer)) // 'Hooray!!! She said "Yes"!'
 *
 *    const p2 = willYouMarryMe(false);
 *    p2.then(answer => console.log(answer)) // 'Oh no, she said "No".';
 *
 *    const p3 = willYouMarryMe();
 *    p3.then(answer => console.log(answer))
 *      .catch((error) => console.log(error.message)) // 'Error: Wrong parameter is passed!
 *                                                    //  Ask her again.';
 */
function willYouMarryMe(isPositiveAnswer) {
  return new Promise((resolve, regect) => {
    if (typeof isPositiveAnswer !== 'boolean') {
      regect(new Error('Wrong parameter is passed! Ask her again.'));
    }
    resolve(isPositiveAnswer ? 'Hooray!!! She said "Yes"!' : 'Oh no, she said "No".')
  });
}

/*
old solution:
function willYouMarryMe(isPositiveAnswer) {
  // throw new Error('Not implemented');
  return new Promise((resolve, regect) => {
    if (typeof isPositiveAnswer === 'boolean') {
      if (isPositiveAnswer) {
        resolve(
          'Hooray!!! She said "Yes"!',
          'if parameter is "true" Promise should be resolved with value === \'Hooray!!! She said "Yes"!\'',
        );
      } else {
        resolve(
          'Oh no, she said "No".',
          'if parameter is "false" Promise should be resolved with value === \'Oh no, she said "No".\'',
        );
      }
    } else {
      regect(new Error('Wrong parameter is passed! Ask her again.'));
    }
  });
}
*/
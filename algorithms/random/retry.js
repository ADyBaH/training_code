/**
 * Returns the function trying to call the passed function and if it throws,
 * retrying it specified number of attempts.
 *
 * @param {Function} func
 * @param {number} attempts
 * @return {Function}
 *
 * @example
 * const attempt = 0, retryer = retry(() => {
 *      if (++attempt % 2) throw new Error('test');
 *      else return attempt;
 * }, 2);
 * retryer() => 2
 */
function retry(func, attempts) {
  const repIt = attempts;
  return function f() {
    for (let i = repIt; i >= 0; i -= 1) {
      try {
        func();
      } catch (err) {
        if (i > 0) {
          return f();
        }
        return err;
      }
    }
    return func();
  };
}

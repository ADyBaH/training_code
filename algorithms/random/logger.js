/**
 * Returns the logging wrapper for the specified method,
 * Logger has to log the start and end of calling the specified function.
 * Logger has to log the arguments of invoked function.
 * The format of output log is:
 * <function name>(<arg1>, <arg2>,...,<argN>) starts
 * <function name>(<arg1>, <arg2>,...,<argN>) ends
 *
 *
 * @param {Function} func
 * @param {Function} logFunc - function to output log with single string argument
 * @return {Function}
 *
 * @example
 *
 * const cosLogger = logger(Math.cos, console.log);
 * const result = cosLogger(Math.PI));     // -1
 *
 * log from console.log:
 * cos(3.141592653589793) starts
 * cos(3.141592653589793) ends
 *
 */
function logger(func, logFunc) {
  return function f(...args) {
    if (args.length > 1) {
      logFunc(`${func.name}(${JSON.stringify(args[0])},${args[1]}) starts`);
      const callF = func.call(this, ...args);
      logFunc(`${func.name}(${JSON.stringify(args[0])},${args[1]}) ends`);
      return callF;
    }
    logFunc(`${func.name}(${args[0]}) starts`);
    logFunc(`${func.name}(${args[0]}) ends`);
    return func(args[0]);
  };
}
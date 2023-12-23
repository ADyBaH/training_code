/* 
  Create a function method that allow you to wrap an existing function. 
  The method signature would look something like this:

  Usage Example:
  function speak(name){
    return "Hello " + name;
  }

  speak = speak.wrap(function(original, yourName, myName){
    greeting = original(yourName);
    return greeting + ", my name is " + myName;
  })

  var greeting = speak("Mary", "Kate");
 */

/**
 * Wrap a function within the context of a given object.
 * @param {function} func - The function to be wrapped.
 * @returns {function} - The wrapped function.
 */
Function.prototype.wrap = function (func) {
  // better:
  //  return callback.bind(this, this);
  //  return (...args) => f(this, ...args)
  return (firstName, secondName) => {
    return func(this, firstName, secondName);
  };
};

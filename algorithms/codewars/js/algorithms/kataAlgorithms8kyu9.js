/* 
Jenny has written a function that returns a greeting for a user. 
However, she's in love with Johnny, and would like to greet him slightly different. 
She added a special case to her function, but she made a mistake.

Can you help her?
*/

/**
 * Returns a greeting message based on the given name.
 *
 * @param {string} name - The name of the person to greet.
 * @return {string} The greeting message.
 */
const greet = (name) =>
  name === "Johnny" ? "Hello, my love!" : `Hello, ${name}!`;

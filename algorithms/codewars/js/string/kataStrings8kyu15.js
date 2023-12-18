/* 
Create a function that gives a personalized greeting. 
This function takes two parameters: name and owner.

Use conditionals to return the proper message:
*/

/**
 * Returns a personalized greeting based on the provided name and owner.
 * If the name is the same as the owner, it returns 'Hello boss',
 * otherwise it returns 'Hello guest'.
 * @param {string} name - The name to be used in the greeting.
 * @param {string} owner - The owner's name.
 * @returns {string} The personalized greeting.
 */
const greet = (name, owner) => (owner === name ? `Hello boss` : `Hello guest`);

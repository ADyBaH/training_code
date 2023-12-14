/* 
Sentence Smash
Write a function that takes an array of words and smashes 
them together into a sentence and returns the sentence. 
You can ignore any need to sanitize words or add punctuation, 
but you should add spaces between each word. Be careful, 
there shouldn't be a space at the beginning or the end of the sentence!

Example
['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
*/

/**
 * Combines an array of words into a sentence.
 *
 * @param {string[]} words - The array of words to combine.
 * @returns {string} - The sentence formed by combining the words.
 */
const smash = (words) => words.join(" ");

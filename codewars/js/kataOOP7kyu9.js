/* You have to create a function for generating random and unique image filenames.

Create a function for generating a random 6 character string which will be used to access the photo URL.

To make sure the name is not already in use, you are given access to an PhotoManager object.
*/

function generateName() {
  const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let name = '';
  for (let i = 0; i < 6; i += 1) {
    let random = Math.floor(Math.random() * chars.length);
    name += chars[random];
  }
  return name;
}

// better solution1:
function generateName() {
  let string = Math.random().toString(36).substr(2, 6);
  console.log(string)
  return string
}

// better solution2:
const generateName = () =>
  (val => photoManager.nameExists(val) ? generateName() : val)
  (Math.random().toString(36).slice(2, 8).replace(/\w/g, val => Math.random() < .5 ? val : val.toUpperCase()));

// better solution 3:
const generateName = () => photoManager.nameExists(n = (Math.random() + 1).toString(36).substr(2, 6)) ? generateName() : n;

// better solution 4:
function generateName() {
  let str = Math.random().toString(36).substring(0, 6);
  return str;
}
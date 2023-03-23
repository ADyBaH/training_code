/*Implement a function createSecretHolder(secret) which accepts any value as secret and returns an object with ONLY two methods

getSecret() which returns the secret
setSecret() which sets the secret
*/
function createSecretHolder(secret) {
  return {
    value: secret,
    getSecret() {return this.value },
    setSecret(a) {this.value = a}
  }
}

obj = createSecretHolder(5)
console.log(obj.getSecret())// # returns 5
obj.setSecret(3)
console.log(obj.getSecret()) // # returns 2

// Better solution:
function createSecretHolder(secret) {
  return {
    getSecret: function() { return secret; },
    setSecret: function(v) { secret = v; }
  };
}
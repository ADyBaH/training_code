function askPassword(ok, fail) {
  let password = "prompt";
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: 'Vasya',

  loginOk() {
    console.log(`${this.name} loggen in`);
  },
  
  loginFail() {
    console.log(`${this.name} failed to log in`);
  },

};

// askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
askPassword( () => user.loginOk() , () => user.loginFail() );
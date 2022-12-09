fetch('https://no-such-server.blabla')
  .then(response => response.json())
  .catch(err => console.log(err))
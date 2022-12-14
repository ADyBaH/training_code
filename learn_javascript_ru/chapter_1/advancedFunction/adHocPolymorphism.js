'use strict'
function ask(question, ...handlers) {
  let isYes = confirm(question);
  
  for (let handler of handlers) {
    if (handler.length == 0) {
      if (isYes) handler();
    } else {
      handler(isYes);
    }
  }
}

ask("Question", () => alert('You say YES'), result => alert(result));
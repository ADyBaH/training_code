log = console.log;

function showCover() {
  const coverDiv = document.createElement("div");
  coverDiv.id = "cover-div";

  document.body.style.overflow = "hidden";
  document.body.append(coverDiv);
}

function hideCover() {
  document.getElementById("cover-div").remove();
  document.body.style.overflow = "";
}

function showPropt(text, callback) {
  showCover();
  let form = document.getElementById("prompt-form");
  let container = document.getElementById("prompt-form-container");
  
  document.getElementById("prompt-message").innerHTML = text;
  form.text.value = "";

  function complete(value) {
    hideCover();
    container.style.display = "none";
    document.onkeydown = null;
    callback(value);
  }

  form.onsubmit = function () {
    let value = form.text.value;

    if (value == "") return false;

    complete(value);
    return false;
  };

  form.cancel.onclick = function (e) {
    if (e.key == "Escape") complete(null);
  };

  let lastElem = form.elements[form.elements.length - 1];
  let firstElem = form.elements[0];

  lastElem.onkeydown = function (e) {
    if (e.key == "Tab" && !e.shiftKey) {
      firstElem.focus();
      return false;
    }
  };

  firstElem.onkeydown = function (e) {
    if (e.key == "Tab" && !e.shiftKey) {
      lastElem.focus();
      return false;
    }
  };

  container.style.display = "block";
  form.elements.text.focus();
}

const button = document.getElementById("show-button");
console.log(button)
button.onclick = () => {
  showPropt("Введите что-нибудь<br>...Умное :0", function (value) {
    alert("Вы ввели: " + value);
  });
};

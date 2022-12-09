// Задача: Добавить функциям метод "f.defer(ms)"
Function.prototype.defer = function(ms) {
  func = this
    setTimeout(func, ms);

}

function f() {
  console.log('Hello');
}

f.defer(1000);
"use strict"
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

console.log(list);

let secondKist = list.next.next;
console.log(secondKist);
list.next.next = null;
console.log(list);

list.next.next = secondKist;
console.log(list);

let list2 = { value: 1 };
list2.next = {value: 2 };
list2.next.next = {value: 3 };
list2.next.next.next = {value: 4 };
list2 = { value: " new item", next: list };
list2.next = list2.next.next;



console.log(list2);
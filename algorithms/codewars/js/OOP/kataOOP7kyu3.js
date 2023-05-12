class Cube {
  constructor(length) {
    this.length = length;
  }
  
  get surfaceArea() {
    return 6 * (this.length ** 2);
  }
  get volume() {
    return this.length ** 3
  }
  set surfaceArea(value) {
    let answer = 0
    for(let i = 0; i < value; i += 1) {
      if(6 * (answer ** 2) == value) {
        break
      } else {
        answer += 1;
      }
    }
    this.length = answer;
  }
  set volume(value) {
    let answer = 0
    for(let i = 0; i < value; i += 1) {
      if(answer ** 3 == value) {
        break
      } else {
        answer += 1;
      }
    }
    this.length = answer;
  }
}

// better solution: 
class Cube {
  constructor(length){
    this.length = length;
  }
  get volume() {
    return Math.pow(this.length, 3);
  }
  set volume(volume){
    this.length = Math.cbrt(volume);
  }
  get surfaceArea() {
    return 6 * Math.pow(this.length, 2);
  }
  set surfaceArea(surfaceArea){
    this.length = Math.sqrt(surfaceArea / 6);
  }
}
/*
Complete the code so that when a Viking is flying its position increases by 10 each time it moves.
If it is walking then the position is increased by 1.

In this Kata, Viking starts as a ground unit when it is created.

You have 3 classes:

Viking: has a position, moveBehavior and move method.
Fly and Walk: the move behaviors with the move(unit) method.
Fly has to move 10 positions at a time and Walk has to move 1.
*/

class Fly {
  move = (unit) => unit.position += 10;
}

class Walk {
  move = (unit) => unit.position += 1;
}

class Viking {
  constructor() {
    this.position = 0;
    this.moveBehavior = new Walk();
  }
  
  move = () => this.position = this.moveBehavior.move(this);
}

//better solution:
class Fly1 {move(){return 10}}
class Walk1 {move(){return 1}}
class Viking1{
	constructor(){
		this.moveBehavior = new Walk1();
		this.position = 0;
	}
	move(){this.position += this.moveBehavior.move()}
}
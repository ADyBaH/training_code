
class Mario {
  jumpAttack() {
    console.log('Mamamia!');
    return 3;
  }
}
class MarioAdapter{
  constructor(mario) {
    this.mario = mario;
  }

  attack(target) {
    target.health = target.health - this.mario.jumpAttack();
  }
}

const mario = new Mario();

const marioTest = new Mario();

console.log(typeof marioTest.attack === 'undefined');

const marioAdapter = new MarioAdapter(mario);
const target = { health: 33 };

marioAdapter.attack(target);
  
console.log(target.health)//, 30);
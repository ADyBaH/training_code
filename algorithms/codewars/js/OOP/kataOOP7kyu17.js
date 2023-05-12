class Marine {
  health = 100;
  accept = (visitor) => visitor.visitLight(this);
}

class Marauder {
  health = 125;
  accept = (visitor) => visitor.visitArmored(this);
}

class TankBullet {
  visitLight = (unit) => unit.health -= 21;
  visitArmored = (unit) => unit.health -= 32;
}



let bullet = new TankBullet();
let light = new Marine();

light.accept(bullet);

console.log(light.health)//, 100 - 21;




let bullet1 = new TankBullet();
let armored1 = new Marauder();

armored1.accept(bullet1);

console.log(armored1.health)//, 125 - 32);
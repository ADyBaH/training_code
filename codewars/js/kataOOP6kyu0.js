/*
Complete the code so that when a Tank goes into SiegeMode
it cannot move and its damage goes to 20.
When it goes to TankMode it should be able to move and the damage should be set to 5.

You have 3 classes:

Tank: has a state, canMove and damage properties
SiegeState and TankState: has canMove and damage properties
Note: The tank initial state should be TankState.
*/

class SiegeState {
  constructor() {
   return this.state = {
     canMove: false,
     damage: 20,
   }
  }
}

class TankState {
  constructor() {
    return this.state = {
      canMove: true,
      damage: 5
    }
  }
}

class Tank {
  constructor() {
    this.state = {
      canMove: true,
      damage: 5
    }
  }

  get canMove() { return this.state.canMove }
  get damage() { return this.state.damage }
}

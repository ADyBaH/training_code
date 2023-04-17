/*
Complete the code so that when a Marine gets a WeaponUpgrade it increases the damage by 1,
and if it is a ArmorUpgrade then increase the armor by 1.

You have 3 classes:

Marine: has a damage and an armor properties
MarineWeaponUpgrade and MarineArmorUpgrade:
upgrades to apply on marine. Accepts a Marine in the constructor and has the same properties as the Marine
*/
class Marine {
  constructor(_damage, _armor) {
    this._damage = _damage;
    this._armor = _armor;
  }
  
  get damage() { return this._damage; }
  set damage(value) { this._damage += value }
  
  get armor() { return this._armor; }
  set armor(value) { this._armor += value }
}

class MarineWeaponUpgrade {
  constructor({ _damage, _armor }) {
    this._damage = _damage + 1;
    this._armor = _armor;
  }
  
  get damage() { return this._damage; }
  set damage(value) { this._damage += value }
  
  get armor() { return this._armor; }
  set armor(value) { this._armor += value }
}

class MarineArmorUpgrade {
  constructor({ _damage, _armor }) {
    this._damage = _damage;
    this._armor = _armor + 1;
  }
  
  get damage() { return this._damage; }
  set damage(value) { this._damage += value }
  
  get armor() { return this._armor; }
  set armor(value) { this._armor += value }
}
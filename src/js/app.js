export default class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.distance = 1;
    this.stoned = false;
  }

  set stoned(value) {
    this.stone = value;
  }

  get stoned() {
    return this.stone;
  }

  set attack(value) {
    this.attacked = value;
  }

  get attack() {
    const attack = this.attacked * (1 - (this.distance - 1) / 10);
    if (this.stone) {
      return attack - Math.log2(this.distance) * 5;
    }
    return attack;
  }
}

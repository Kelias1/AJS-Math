import Character from './app';

export default class Daemon extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 100;
    this.stoned = false;
  }
}

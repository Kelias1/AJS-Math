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
	set attack(value) {
    this.attacked = value;
	}

	get stoned() {
    return this.stone;
	}

	get attack() {
    const attack = this.attacked * (1 - (this.distance - 1) / 10);
    if (this.stone) {
		return attack - Math.log2(this.distance) * 5;
  }
  return attack;
	}
  }

  //Возможность насылать «дурман» на магов и демонов. При это их сила атаки падает уже не только линейно, а по формуле: attack - log2(x) * 5, где x - это расстояние в клетках. attack рассчитывается с учётом п.1. Пример: атака 100 единиц, атакуем 2 клетку от себя, получаем вместе с дурманом: 85 (вместо 90).

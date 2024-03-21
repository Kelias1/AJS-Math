import Magician from '../magician';
import Daemon from '../daemon';

describe('test Magician', () => {
  const magician = new Magician('Player', 'Magician');

  test.each([
    [100, 1, true, 100],
    [100, 2, true, 85],
    [100, 1, false, 100],
    [100, 2, false, 90],
  ])('test', (attack, distance, stoned, expected) => {
    magician.attack = attack;
    magician.distance = distance;
    magician.stoned = stoned;
    expect(magician.attack).toBe(expected);
  });

  test('Magician stoned', () => {
    magician.stoned = false;
    expect(magician.stoned).toBeFalsy();
  });
});

describe('test Daemon', () => {
  let daemon;
  beforeEach(() => {
    daemon = new Daemon('Player', 'Daemon');
    daemon.attack = 100;
    daemon.distance = 2;
  });

  test('attack stoned', () => {
    daemon.stoned = true;
    expect(daemon.attack).toBe(85);
  });

  test('attack without stoned', () => {
    daemon.stoned = false;
    expect(daemon.attack).toBe(90);
  });

  test('Daemon stoned', () => {
    daemon.stoned = false;
    expect(daemon.stoned).toBeFalsy();
  });
});

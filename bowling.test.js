const Bowling = require('./bowling');

describe('Bowling', () => {
  it('handles a very boring game', () => {
    const bowling = new Bowling();

    bowling.roll(0);
    bowling.roll(0);
    bowling.roll(0);
    bowling.roll(0);
    bowling.roll(0);
    bowling.roll(0);
    bowling.roll(0);
    bowling.roll(0);
    bowling.roll(0);
    bowling.roll(0);
    bowling.roll(0);
    bowling.roll(0);
    bowling.roll(0);
    bowling.roll(0);
    bowling.roll(0);
    bowling.roll(0);
    bowling.roll(0);
    bowling.roll(0);
    bowling.roll(0);
    bowling.roll(0);

    expect(bowling.getScore()).toBe(0);
  });
});
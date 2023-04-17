const Bowling = require("./bowling");

describe("Bowling", () => {
  let bowling;
  beforeEach(() => {
    bowling = new Bowling();
  });

  it("handles a very boring game", () => {
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

  it("increments total score with each roll", () => {
    bowling.roll(1);
    bowling.roll(1);
    bowling.roll(1);
    bowling.roll(2);
    expect(bowling.getScore()).toBe(5);
  });

  it("throws an error if less than 0 pins rolled", () => {
    expect(() => {
      bowling.roll(-1);
    }).toThrow(bowling.PINS_NUMBER_OUT_OF_BOUNDARIES_ERROR);
  });

  it("throws an error if more than 10 pins rolled", () => {
    expect(() => {
      bowling.roll(22);
    }).toThrow(bowling.PINS_NUMBER_OUT_OF_BOUNDARIES_ERROR);
  });

  it("begins game with a clean frame with index 0", () => {
    expect(bowling.getCurrentFrameIndex()).toBe(0);
    expect(bowling.getCurrentFrame().rolls.length).toBe(0);
    expect(bowling.getCurrentFrame().total).toBe(0);
  });
});

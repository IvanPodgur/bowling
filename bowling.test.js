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
});

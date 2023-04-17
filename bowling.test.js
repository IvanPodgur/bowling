const Bowling = require("./bowling");

const mockStrikeFrame = {
  rolls: [10],
  total: 10
};

const mockSpareFrame = {
  rolls: [4, 6],
  total: 10
};

const mockRegularFrame = {
  rolls: [4, 4],
  total: 8
};

const isCleanFrame = frame => {
  return frame.rolls.length === 0 && frame.total === 0;
};

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
    expect(isCleanFrame(bowling.getCurrentFrame())).toBe(true);
  });

  it("can correctly identify a strike frame", () => {
    expect(bowling.isStrike(mockStrikeFrame)).toBe(true);
    expect(bowling.isStrike(mockSpareFrame)).toBe(false);
    expect(bowling.isStrike(mockRegularFrame)).toBe(false);
  });

  it("can correctly identify a spare frame", () => {
    expect(bowling.isSpare(mockSpareFrame)).toBe(true);
    expect(bowling.isSpare(mockStrikeFrame)).toBe(false);
    expect(bowling.isSpare(mockRegularFrame)).toBe(false);
  });

  it.only("goes to the next frame after strike", () => {
    bowling.roll(10);
    expect(bowling.getCurrentFrameIndex()).toBe(1);
  });

  it.only("stays on the current frame after non strike roll", () => {
    bowling.roll(3);
    expect(bowling.getCurrentFrameIndex()).toBe(0);
  });

  it.only("goes to the next frame after 2 rolls", () => {
    bowling.roll(3);
    bowling.roll(3);
    expect(bowling.getCurrentFrameIndex()).toBe(1);
  });

  it("records frame rolls and moves to the next frame", () => {
    bowling.roll(5);
    bowling.roll(4);
    const firstFrame = bowling.getScoreBoard()[0];
    expect(firstFrame.rolls[0]).toBe(5);
    expect(firstFrame.rolls[1]).toBe(4);
    expect(firstFrame.total).toBe(9);
    // goes to the next frame
    expect(bowling.getCurrentFrameIndex()).toBe(1);
    expect(isCleanFrame(bowling.getCurrentFrame())).toBe(true);
  });
});

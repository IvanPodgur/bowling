const MAX_NUMBER_OF_PINS = 10;

const PINS_NUMBER_OUT_OF_BOUNDARIES_ERROR = `Number of pins must between 0 and ${MAX_NUMBER_OF_PINS}`;

class Bowling {
  constructor() {
    this.score = 0;
    this.frames = [];
    this.currentFrame = {
      rolls: [],
      total: 0
    };
  }

  roll(pins) {
    if (pins < 0 || pins > MAX_NUMBER_OF_PINS)
      throw new Error(PINS_NUMBER_OUT_OF_BOUNDARIES_ERROR);
    this.currentFrame.rolls.push(pins);
    this.currentFrame.total += pins;
    if (this.isStrike(this.currentFrame) || this.currentFrame.rolls.length > 1)
      this.nextFrame();
  }

  nextFrame() {
    this.frames.push(this.currentFrame);
    this.currentFrame = {
      rolls: [],
      total: 0
    };
  }

  isStrike(frame) {
    return frame.rolls[0] === MAX_NUMBER_OF_PINS;
  }

  isSpare(frame) {
    return frame.rolls.length > 1 && frame.total === MAX_NUMBER_OF_PINS;
  }

  getScore() {
    let score = 0;
    for (let frame of this.frames) {
      score += frame.total;
    }
    return score;
  }

  getCurrentFrameIndex() {
    return this.frames.length;
  }

  getCurrentFrame() {
    return this.currentFrame;
  }

  getScoreBoard() {
    return this.frames;
  }
}

module.exports = Bowling;

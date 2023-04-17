const MAX_NUMBER_OF_PINS = 10;

const PINS_NUMBER_OUT_OF_BOUNDARIES_ERROR = `Number of pins must between 0 and ${MAX_NUMBER_OF_PINS}`;

class Bowling {
  constructor() {
    this.score = 0;
  }

  roll(pins) {
    if (pins < 0 || pins > MAX_NUMBER_OF_PINS)
      throw new Error(PINS_NUMBER_OUT_OF_BOUNDARIES_ERROR);
    this.score += pins;
  }

  getScore() {
    return this.score;
  }
}

module.exports = Bowling;

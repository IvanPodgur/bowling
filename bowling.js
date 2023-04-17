const MAX_NUMBER_OF_PINS = 10;

const PINS_NUMBER_OUT_OF_BOUNDARIES_ERROR = `Number of pins must between 0 and ${MAX_NUMBER_OF_PINS}`;

class Bowling {
  constructor(numberOfPlayer = 1) {
    this.score = 0;
    this.currentFrame = {
      rolls: [],
      total: 0
    };
    this.currentPlayer = 0;
    this.scoreBoard = [];
    for (let i = 0; i < numberOfPlayer; i++) {
      this.scoreBoard.push([]);
    }
  }

  roll(pins) {
    if (pins < 0 || pins > MAX_NUMBER_OF_PINS - this.currentFrame.total)
      throw new Error(PINS_NUMBER_OUT_OF_BOUNDARIES_ERROR);
    this.currentFrame.rolls.push(pins);
    this.currentFrame.total += pins;
    if (
      this.isStrike(this.currentFrame) ||
      this.currentFrame.rolls.length > 1
    ) {
      this.addFrameBonus(this.currentFrame);
      this.nextFrame();
    }
  }

  addFrameBonus() {
    if (this.scoreBoard[this.currentPlayer].length > 0) {
      const previousFrame = this.scoreBoard[this.currentPlayer][
        this.getCurrentFrameIndex() - 1
      ];
      if (this.isSpare(previousFrame)) {
        previousFrame.total += this.currentFrame.rolls[0];
      }
      if (this.isStrike(previousFrame)) {
        previousFrame.total += this.currentFrame.total;
      }
    }
  }

  nextFrame() {
    this.scoreBoard[this.currentPlayer].push(this.currentFrame);
    this.currentFrame = {
      rolls: [],
      total: 0
    };
    this.currentPlayer = (this.currentPlayer + 1) % this.getNumberOfPlayers();
  }

  isStrike(frame) {
    return frame.rolls[0] === MAX_NUMBER_OF_PINS;
  }

  isSpare(frame) {
    return frame.rolls.length > 1 && frame.total === MAX_NUMBER_OF_PINS;
  }

  getScoreForPlayer(playerNumber = 0) {
    let score = 0;
    for (let frame of this.scoreBoard[playerNumber]) {
      score += frame.total;
    }
    return score;
  }

  getCurrentFrameIndex() {
    return this.scoreBoard[this.currentPlayer].length;
  }

  getCurrentFrame() {
    return this.currentFrame;
  }

  getFramesForPlayer(playerNumber = 0) {
    return this.scoreBoard[playerNumber];
  }

  getNumberOfPlayers() {
    return this.scoreBoard.length;
  }

  getCurrentPlayer() {
    return this.currentPlayer;
  }
}

module.exports = Bowling;

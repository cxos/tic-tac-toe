class TicTacToe {
  constructor() {
    this.currentPlayerSymbol = 'x';
    this.matrix = [
      [null, null, null],
      [null, null, null],
      [null, null, null]];
  }

  getCurrentPlayerSymbol() {
    return this.currentPlayerSymbol;
  }

  nextTurn(rowIndex, columnIndex) {
    if (this.matrix[rowIndex][columnIndex]) return;
    this.matrix[rowIndex][columnIndex] = this.currentPlayerSymbol;
    this.currentPlayerSymbol = this.currentPlayerSymbol === 'x' ? 'o' : 'x';
  }

  isFinished() {
    if (this.getWinner() || this.isDraw()) return true;
    return false;
  }

  getWinner() {
    for (let i = 0; i < 3; i += 1) {
      if (this.matrix[i][0] === this.matrix[i][1] &&
          this.matrix[i][1] === this.matrix[i][2] &&
          this.matrix[i][0]) {
        return this.matrix[i][0];
      }

      if (this.matrix[0][i] === this.matrix[1][i] &&
          this.matrix[1][i] === this.matrix[2][i] &&
          this.matrix[0][i]) {
        return this.matrix[0][i];
      }
    }
    if (this.matrix[0][0] === this.matrix[1][1] &&
        this.matrix[1][1] === this.matrix[2][2] &&
        this.matrix[1][1]) {
      return this.matrix[1][1];
    }

    if (this.matrix[0][2] === this.matrix[1][1] &&
        this.matrix[1][1] === this.matrix[2][0] &&
        this.matrix[1][1]) {
      return this.matrix[1][1];
    }
    return null;
  }

  noMoreTurns() {
    for (let i = 0; i < 3; i += 1) {
      for (let j = 0; j < 3; j += 1) {
        if (!this.matrix[i][j]) return false;
      }
    }
    return true;
  }

  isDraw() {
    if (this.noMoreTurns() && !this.getWinner()) return true;
    return false;
  }

  getFieldValue(rowIndex, colIndex) {
    return this.matrix[rowIndex][colIndex];
  }
}

module.exports = TicTacToe;

class Board {
  constructor() {
    this.grid = [
      [new Square(), new Square(), new Square()],
      [new Square(), new Square(), new Square()],
      [new Square(), new Square(), new Square()]
    ];
  }

  isFull() {
    let count = 0;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (this.grid[i][j].state != "") {
             count++;
        }
      }
    }
    return count === 9 ? true: false;
  }

  checkWin() {
    for (let i = 0; i < 3; i++) {
      if (this.grid[i][0].state === this.grid[i][1].state && this.grid[i][0].state === this.grid[i][2].state
         && this.grid[i][0].state !== "") {
        return this.grid[i][0].state;
      }
    }

    for (let j = 0; j < 3; j++) {
      if (this.grid[0][j].state === this.grid[1][j].state && this.grid[0][j].state === this.grid[2][j].state
         && this.grid[0][j].state !== "") {
        return this.grid[0][j].state;
      }
    }

    if ((this.grid[0][0].state === this.grid[1][1].state && this.grid[0][0].state === this.grid[2][2].state
         && this.grid[0][0].state !== "") ||
      (this.grid[0][2].state === this.grid[1][1].state && this.grid[0][2].state === this.grid[2][0].state
         && this.grid[0][2].state !== "")) {
    return this.grid[1][1].state;
    }
  }
}

class Square {
  constructor() {
    this.state = "";
  }

  whoseTurn(counter) {
      return counter === 0 ? this.state = 'x': this.state = 'o';
  }
}

class Player {
  constructor(symbol) {
    this.symbol = symbol;
  }
}

export default class Game {
  constructor() {
    this.board = new Board();
    this.players = [
      new Player("x"),
      new Player("o")
    ];
  }
}
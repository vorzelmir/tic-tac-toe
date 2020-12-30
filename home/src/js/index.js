import Game from './board.js'
import '../scss/style.scss'

let game = new Game();

let counter = 0;
const textResult = document.querySelector('.result');

let bd = document.getElementById('board');
bd.addEventListener('click', (event) => {
    event.target.innerHTML = game.players[counter].symbol;
    let squareNum = event.target.id.split('');
    let row = squareNum[0];
    let col = squareNum[1];

    game.board.grid[row][col].whoseTurn(counter);
    let res = game.board.checkWin();
    if (res) {
        textResult.textContent = `${res} is winner`;
    }
    if (!res && game.board.isFull()) {
        textResult.textContent = `Equal`;
    }
    counter === 0 ? counter = 1 : counter = 0;
});

let bt = document.getElementById('new-game');
bt.addEventListener('click', () => {
    for (let i = 0; i < 9; i++) {
        document.querySelectorAll('.square')[i].innerHTML = "";
    }
    textResult.textContent = '';
    game = new Game();
});
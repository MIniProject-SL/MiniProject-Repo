//javascript code for backend
const board = document.getElementById('board');
let currentPlayer = 'X';
let gameStatus = ['', '', '', '', '', '', '', '', ''];
const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function checkWinner() {
  for (let i = 0; i < winPatterns.length; i++) {
    const [a, b, c] = winPatterns[i];
    if (gameStatus[a] && gameStatus[a] === gameStatus[b] && gameStatus[a] === gameStatus[c]) {
      return gameStatus[a];
    }
  }
  return null;
}

function handleClick(index) {
  if (gameStatus[index] || checkWinner()) return;
  gameStatus[index] = currentPlayer;
  render();
  const winner = checkWinner();
  if (winner) {
    alert(`Player ${winner} wins!`);
    resetGame();
  } else if (!gameStatus.includes('')) {
    alert("It's a draw!");
    resetGame();
  } else {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }
}

function resetGame() {
  gameStatus = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = 'X';
  render();
}

function render() {
  board.innerHTML = '';
  gameStatus.forEach((cell, index) => {
    const cellElement = document.createElement('div');
    cellElement.classList.add('cell');
    cellElement.textContent = cell;
    cellElement.addEventListener('click', () => handleClick(index));
    board.appendChild(cellElement);
  });
}

render();


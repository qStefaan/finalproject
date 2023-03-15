const cells = document.querySelectorAll('.cell');
const message = document.querySelector('.message');
const resetButton = document.querySelector('.reset');
let currentPlayer = 'X';
let gameIsOver = false;
let playerScore = 0;
let computerScore = 0;

// Winning combinations
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// Set up event listeners for each cell
cells.forEach(cell => {
  cell.addEventListener('click', handleClick, { once: true });
});

// Handle cell click
function handleClick(e) {
  const cell = e.target;
  const index = cell.dataset.index;

  if (gameIsOver || cell.classList.contains('disabled')) return;

  // Update cell UI
  cell.textContent = currentPlayer;
  cell.classList.add('disabled');

  // Check if game is over
  if (checkForWin(currentPlayer)) {
    endGame(false);
    return;
  } else if (checkForDraw()) {
    endGame(true);
    return;
  }

  // Switch current player
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';

  // Computer plays
  computerPlay();
}


// Computer play
function computerPlay() {
    let availableCells = [];
    cells.forEach(cell => {
      if (!cell.classList.contains('disabled')) {
        availableCells.push(cell);
      }
    });
  
    const randomIndex = Math.floor(Math.random() * availableCells.length);
    const randomCell = availableCells[randomIndex];
  
    // Update cell UI
    setTimeout(() => {
      randomCell.textContent = currentPlayer;
      randomCell.classList.add('disabled');
  
      // Check if game is over
      if (checkForWin(currentPlayer)) {
        endGame(false);
        return;
      } else if (checkForDraw()) {
        endGame(true);
        return;
      }
  
      // Switch current player
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }, 1000);
  }
  

// Check for win
function checkForWin(player) {
  return winningCombinations.some(combination => {
    return combination.every(index => {
      return cells[index].textContent === player;
    });
  });
}

// Check for draw
function checkForDraw() {
  return [...cells].every(cell => {
    return cell.classList.contains('disabled');
  });
}

// End game
function endGame(isDraw) {
  gameIsOver = true;
  cells.forEach(cell => cell.classList.add('disabled'));

  if (isDraw) {
    message.textContent = "It's a draw!";
  } else {
    message.textContent = `${currentPlayer} wins!`;
    currentPlayer === 'X' ? playerScore++ : computerScore++;
    updateScore();
  }
}

// Update score
function updateScore() {
  const playerScoreElement = document.querySelector('#player-score');
  const computerScoreElement = document.querySelector('#computer-score');

  playerScoreElement.textContent = `Player: ${playerScore}`;
  computerScoreElement.textContent = `Computer: ${computerScore}`;
}

// Reset game
function resetGame() {
  cells.forEach(cell => {
    cell.textContent = '';
    cell.classList.remove('disabled');
  });
  message.textContent = '';
  gameIsOver = false;
  currentPlayer = 'X';
}

// Event listener for reset button
resetButton.addEventListener('click', resetGame);

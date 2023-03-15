// DOM elements
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const result = document.querySelector("#result");

// Game function
function playGame(playerSelection) {
  const computerSelection = computerPlay();
  const choices = document.querySelectorAll(".btn");

  // Add visual feedback for player's choice
  choices.forEach((choice) => {
    if (choice.id === playerSelection) {
      choice.classList.add("selected");
    } else {
      choice.classList.remove("selected");
    }
  });

  // Remove visual feedback after 1 second
  setTimeout(() => {
    choices.forEach((choice) => {
      choice.classList.remove("selected");
    });
  }, 1000);

  // Add countdown for computer's choice
  let count = 3;
  const countdown = setInterval(() => {
    if (count === 0) {
      clearInterval(countdown);
      showResult(playerSelection, computerSelection);
    } else {
      result.textContent = `Computer is choosing...${count}`;
      count--;
    }
  }, 500);

  function showResult(playerSelection, computerSelection) {
    // Game logic
    if (playerSelection === computerSelection) {
      result.textContent = "It's a tie!";
    } else if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "paper")
    ) {
      result.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
      result.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
    }
  }
}

// Computer's choice
function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Event listeners
rock.addEventListener("click", () => playGame("rock"));
paper.addEventListener("click", () => playGame("paper"));
scissors.addEventListener("click", () => playGame("scissors"));

let playerScore = 0;
let computerScore = 0;
let gameOver = false;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

const roundResult = document.querySelector("#round-result");
const scoreDisplay = document.querySelector("#score");
const gameResult = document.querySelector("#game-result");

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

const buttons = [rockButton, paperButton, scissorsButton];

function playRound(playerSelection) {
  if (gameOver) return;

  const computerPlay = getComputerChoice();

  if (playerSelection === computerPlay) {
    roundResult.textContent = `It's a tie! You both choose ${playerSelection}`;
  } else if (
    (playerSelection === "rock" && computerPlay === "scissors") ||
    (playerSelection === "paper" && computerPlay === "rock") ||
    (playerSelection === "scissors" && computerPlay === "paper")
  ) {
    playerScore++;
    roundResult.textContent = `You win this round:`;
  } else {
    computerScore++;
    roundResult.textContent = `You loss this round:`;
  }

  scoreDisplay.textContent = `You ${playerScore} | computer ${computerScore}`;

  if (playerScore === 5 || computerScore === 5) {
    gameOver = true;
    gameResult.textContent =
      playerScore === 5 ? `You won the game!` : `Computer won the game!`;

    buttons.forEach((button) => {
      button.disabled = true;
    });
  }
}

rockButton.addEventListener("click", () => playRound("rock"));
paperButton.addEventListener("click", () => playRound("paper"));
scissorsButton.addEventListener("click", () => playRound("scissors"));

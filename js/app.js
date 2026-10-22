let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissor"];
  return choices[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
  return prompt("Choose rock, paper, scissors:").trim().toLowerCase();
}


function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    const human = humanChoice;
    const computer = computerChoice;

    if (human === computer) {
      console.log("it's a tie!");
    } else if (
      (human === "rock" && computer === "scissor") ||
      (human === "paper" && computer === "rock") ||
      (human === "scissor" && computer === "paper")
    ) {
      humanScore++;
      console.log(`You win! ${human} beats ${computer}`);
    } else {
      computerScore++;
      console.log(`You lose! ${computer} beats ${human}`);
    }
  }

  for (let round = 1; round <= 5; round++) {
    console.log(`Round ${round}`);
    playRound(getHumanChoice(), getComputerChoice());
  }

  console.log(`Final score: you ${humanScore} computer ${computerScore}`);

  if (humanScore > computerScore) {
    console.log("you won the game!");
  } else if (computerScore > humanScore) {
    console.log("computer won the game!");
  } else {
    console.log("it's a tie!");
  }
}



console.log(playGame())
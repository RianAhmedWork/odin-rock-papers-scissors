console.log("Hello World!");
playGame();

// function that gets the computer choice
function getComputerChoice() {
  const rng = Math.floor(Math.random() * 100);
  if (rng % 3 === 0) {
    return "rock";
  }
  else if (rng % 3 === 1) {
    return "paper";
  }
  else {
    return "scissors"
  }
}

// function that gets the users choice
// GET choice from user;
function getHumanChoice() {
  const userChoice = String(prompt("Enter your choice here")).toLowerCase();
  console.log(userChoice);
  return userChoice;
}

//function that plays the game
function playGame() {

  let humanScore = 0;
  let computerScore = 0;

  //play 5 rounds
  for (let i = 0; i < 5; i++) {
    playRound(getHumanChoice(), getComputerChoice());
  }
  console.log("user points: " + humanScore);
  console.log("computer points: " + computerScore);
  // function that plays a single round
  function playRound(humanChoice, computerChoice) {
    if (humanChoice === String(computerChoice)) {
      console.log("Same selection! Its a Draw.");
    } else if (humanChoice === "rock" && computerChoice === "paper") {
      console.log("You lose! Paper beats Rock.");
      computerScore++;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      console.log("You win! Rock beats Scissors.");
      humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
      console.log("You lose! Scissors beats Paper.");
      computerScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      console.log("You win! Paper beats Rock.");
      humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
      console.log("You lose! Rock beats Scissors.");
      computerScore++;
    } else {
      console.log("You win! Scissors beats Paper");
      humanScore++;
    }
  }
}


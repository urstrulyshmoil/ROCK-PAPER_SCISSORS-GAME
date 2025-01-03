let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

// Generate random choice for the computer
const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

// Handle draw case
const drawGame = () => {
  msg.innerText = "Game was Draw. Play again.";
  msg.style.backgroundColor = "#081b31";
};

// Display winner or loser message
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

// Main game logic
const playGame = (userChoice) => {
  // Generate computer choice
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    // Draw Game
    drawGame();
  } else {
    let userWin = true;
    
    // Determine if user wins or loses
    if (userChoice === "rock") {
      // rock vs scissors, paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      // paper vs rock, scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      // scissors vs rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    
    showWinner(userWin, userChoice, compChoice);
  }
};

// Event listener for user choice selection
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

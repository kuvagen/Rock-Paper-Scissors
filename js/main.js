function getComputerChoice() {
  number = Math.random() * 3 + 1;
  number = Math.floor(number);
  switch (number) {
    case 1:
      return "камень";
    case 2:
      return "ножницы";
    case 3:
      return "бумага";
    default:
      return "";
  }
}

let humanScore = 0;
let computerScore = 0;

let humanSelection = "";
let resultText = document.getElementById("result");

const buttons = document.querySelectorAll(".choice");
let scoreText = document.getElementById("score");
const maxRounds = 5;
let round = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    round += 1;
    resultText.textContent = "Ничья! У компьютера " + computerChoice + ".";
  } else if (
    (humanChoice === "ножницы" && computerChoice === "камень") ||
    (humanChoice === "бумага" && computerChoice === "ножницы") ||
    (humanChoice === "камень" && computerChoice === "бумага")
  ) {
    computerScore += 1;
    round += 1;
    resultText.textContent =
      "Очко за компьютером!!! У компьютера " + computerChoice + ".";
  } else {
    humanScore += 1;
    round += 1;
    resultText.textContent =
      "Очко за вами!!! У компьютера " + computerChoice + ".";
  }

  scoreText.textContent = humanScore + " : " + computerScore;

  if (round === maxRounds) {
    endGame();
  }
}

function endGame() {
  resultText.textContent = ""
  if (humanScore > computerScore) {
    scoreText.textContent = "Вы победили!";
  } else if (humanScore < computerScore) {
    scoreText.textContent = "Вы проигали :( ";
  } else {
    scoreText.textContent = "Ничья";
  }
  buttons.forEach((btn) => (btn.disabled = true));
}

for (const btn of buttons) {
  btn.addEventListener("click", () => {
    humanSelection = btn.textContent.toLocaleLowerCase();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  });
}

const resultText = document.getElementById("result");
const scoreText = document.getElementById("score");
const buttons = document.querySelectorAll(".choice");
const btnReset = document.createElement("button");
btnReset.classList = "btn-reset";
btnReset.type = "button";
btnReset.textContent = "Начать заново";
const maxRounds = 5;

let humanScore = 0;
let computerScore = 0;
let humanSelection = "";
let round = 0;

function getComputerChoice() {
  let number = Math.random() * 3 + 1;
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

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
  
    resultText.textContent = "Ничья! У компьютера " + computerChoice + ".";
  } else if (
    (humanChoice === "ножницы" && computerChoice === "камень") ||
    (humanChoice === "бумага" && computerChoice === "ножницы") ||
    (humanChoice === "камень" && computerChoice === "бумага")
  ) {
    computerScore += 1;

    resultText.textContent =
      "Очко за компьютером!!! У компьютера " + computerChoice + ".";
  } else {
    humanScore += 1;
    resultText.textContent =
    "Очко за вами!!! У компьютера " + computerChoice + ".";
  }
  
  round += 1;
  scoreText.textContent = humanScore + " : " + computerScore;

  if (round === maxRounds) {
    endGame();
  }
}

function endGame() {
  resultText.textContent = "";
  if (humanScore > computerScore) {
    scoreText.textContent = "Вы победили!";
  } else if (humanScore < computerScore) {
    scoreText.textContent = "Вы проиграли :( ";
  } else {
    scoreText.textContent = "Ничья";
  }
  buttons.forEach((btn) => (btn.disabled = true));

  const container = document.querySelector(".container");
  if (container) {
    container.appendChild(btnReset);
  }
}

function newGame() {
  const container = document.querySelector(".container");
  const btn = document.querySelector(".btn-reset");
  if (btn) {
    container.removeChild(btn);
  }
  humanScore = 0;
  computerScore = 0;
  round = 0;
  buttons.forEach((btn) => (btn.disabled = false));
  scoreText.textContent = "";
}

for (const btn of buttons) {
  btn.addEventListener("click", () => {
    humanSelection = btn.dataset.choice;
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  });
}

btnReset.addEventListener("click", newGame);

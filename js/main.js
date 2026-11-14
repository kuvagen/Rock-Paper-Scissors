function getComputerChoice() {
  number = Math.random() * 3 + 1;
  number = Math.floor(number);
  switch (number) {
    case 1:
      return "камень";
      break;
    case 2:
      return "ножницы";
    case 3:
      return "бумага";
    default:
      return "";
      break;
  }
}

let humanScore = 0;
let computerScore = 0;

let humanSelection = "";
let resultText = document.getElementById("result")

const buttons = document.querySelectorAll(".choice");



for (const btn of buttons) {
  btn.addEventListener("click", () => {
    humanSelection = btn.textContent.toLocaleLowerCase();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  });
}
function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    resultText.textContent = "Ничья! У компьютера " + computerChoice + "."
  } else if (
    (humanChoice === "ножницы" && computerChoice === "камень") ||
    (humanChoice === "бумага" && computerChoice === "ножницы") ||
    (humanChoice === "камень" && computerChoice === "бумага")
  ) {
    computerScore += 1;
    resultText.textContent = "Очко за компьютером!!! У компьютера " + computerChoice + "."
  } else {
    humanScore += 1;
    resultText.textContent = "Очко за вами!!! У компьютера " + computerChoice + "."
  }

  const scoreText = document.getElementById("score")
  scoreText.textContent = humanScore + " : " + computerScore

}



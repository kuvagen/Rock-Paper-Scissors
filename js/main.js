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

function getHumanChoice() {
  // const humanChoice = +prompt("Ваш выбор: 1 - камень, 2 - ножицы, 3 - бумага");
  switch (humanChoice) {
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

function playGame() {
  const humanSelection = getHumanChoice().toLowerCase();
  const computerSelection = getComputerChoice();

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      return "Ничья! У компьютера " + computerChoice + ".";
    } else if (
      (humanChoice === "ножницы" && computerChoice === "камень") ||
      (humanChoice === "бумага" && computerChoice === "ножницы") ||
      (humanChoice === "камень" && computerChoice === "бумага")
    ) {
      computerScore += 1;
      return "Очко за компьютером!!! У компьютера " + computerChoice + ".";
    } else {
      humanScore += 1;
      return "Очко за вами!!! У компьютера " + computerChoice + ".";
    }
  }

  alert(playRound(humanSelection, computerSelection));
}

// for (let index = 1; index < 6; index++) {
playGame();
// }
if (humanScore > computerScore) {
  alert(
    "Поздравляю! Вы выиграли!!! Счет: " +
      humanScore +
      ":" +
      computerScore +
      ".", ""
  );
} else if (humanScore < computerScore) {
  alert(
    "Вы проиграли! Повезет в следующий раз. Счет: " +
      humanScore +
      ":" +
      computerScore +
      ".", ""
  );
} else {
  alert(
    "Ничья." +
      humanScore +
      ":" +
      computerScore +
      ".", ""
  );
}

function getComputerChoice() {
  number = Math.random() * 3 + 1;
  number = Math.floor(number);
  switch (number) {
    case 1:
      return "Камень";
      break;
    case 2:
      return "Ножницы";
    case 3:
      return "Бумага";
    default:
      return "";
      break;
  }
}

function getHumanChoice() {
  const humanChoice = +prompt("Ваш выбор: 1 - камень, 2 - ножицы, 3 - бумага");
  switch (humanChoice) {
    case 1:
      return "Камень";
      break;
    case 2:
      return "Ножницы";
    case 3:
      return "Бумага";
    default:
      return "";
      break;
  }
}

console.log(getHumanChoice());

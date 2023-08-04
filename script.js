function computerChoice() {
  const choices = ["rock", "paper", "scissor"];
  const randomChoice = Math.floor(Math.random() * 3);
  return choices[randomChoice];
}

function playGame(playerChoice) {
  const computer = computerChoice();
  const resultDiv = document.getElementById("result");
  const humanInfo = document.getElementById("human-choice");
  const computerInfo = document.getElementById("computer-choice");
  resultDiv.innerHTML = "";
  humanInfo.innerHTML = "";
  computerInfo.innerHTML = "";

  if (playerChoice === computer) {
    resultDiv.textContent = `It's a tie!`;
  } else if (
    (playerChoice === "rock" && computer === "scissor") ||
    (playerChoice === "paper" && computer === "rock") ||
    (playerChoice === "scissor" && computer === "paper")
  ) {
    resultDiv.textContent = "You win!";
  } else {
    resultDiv.textContent = "Computer wins!";
  }
  humanInfo.innerHTML += `<p>Player chose ${playerChoice}</p>`;
  computerInfo.innerHTML += `<p>Computer chose ${computer}</p>`;
}

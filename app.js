let userScore = 0;
let computerScore = 0;
const computerScore_span = document.getElementById("computer-score"); //dom variables(html variables that store dom elements)
const userScore_span = document.getElementById("user-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result >p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s"); //done with caching the DOM(Document object Model, it generally means storing something for future use.)

function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3); //Math is a built in object in javascript, and random is an function in that object which gives random number between '0' and '1'.
  //Floor to get the whole number value, and multiply by 3 to give it between or near to 3.
  return choices[randomNumber];
}

function convertWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  return "Scissors";
}

function win(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sub(); //sub- It is a subscript function.
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;

  result_p.innerHTML = `${convertWord(
    userChoice
  )}${smallUserWord} beats ${convertWord(
    computerChoice
  )}${smallCompWord} You win... `; //ES6 convention, that we don't need to use any double quotes or "+" for concatination. by enclosing between back quote.

  userChoice_div.classList.add("green-glow");
  setTimeout(() => userChoice_div.classList.remove("green-glow"), 300);
}

function lose(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sub(); //sub- It is a subscript function.
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  userScore_span.innerHTML = userScore;

  result_p.innerHTML = `${convertWord(
    userChoice
  )}${smallUserWord} loses to ${convertWord(
    computerChoice
  )}${smallCompWord} You loose... `;

  userChoice_div.classList.add("red-glow");
  setTimeout(() => userChoice_div.classList.remove("red-glow"), 300);
}

function draw(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sub(); //sub- It is a subscript function.
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  result_p.innerHTML = `${convertWord(
    userChoice
  )} ${smallUserWord} equals ${convertWord(
    computerChoice
  )}${smallCompWord} It's equal... `;

  userChoice_div.classList.add("grey-glow");
  setTimeout(() => userChoice_div.classList.remove("grey-glow"), 300);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "sp":
    case "pr":
      win(userChoice, computerChoice);
      break;

    case "sr":
    case "ps":
    case "rp":
      lose(userChoice, computerChoice);
      break;

    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener("click", () =>
    /*adding event listener to the button,on click of a function*/
    game("r")
  );

  paper_div.addEventListener("click", () => game("p"));

  scissor_div.addEventListener("click", () => game("s"));
}

main();

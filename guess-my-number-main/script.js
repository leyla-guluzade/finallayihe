"use strict";

let secretNumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const number = document.querySelector(".number");
const check = document.querySelector(".check");

check.addEventListener("click", function () {
  let guess = +document.querySelector(".guess").value;

  // When there is no input
  if (!guess) {
    displayMessage("⛔ No Number");
  }

  // When player wins
  else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number");
    number.textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    number.style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }
  // When guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too High" : "📉 Too Low");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("🔥 You Lost The Game !");
      document.querySelector(".score").textContent = 0;
    }
  }
});

const again = document.querySelector(".again");

again.addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);

  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;

  number.textContent = "?";
  number.style.width = "15rem";

  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
});

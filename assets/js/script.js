//
//wait for the DOM to load before running
//
document.addEventListener("DOMContentLoaded", function () {
  let buttons = document.getElementsByTagName("button");

  for (let button of buttons) {
    button.addEventListener("click", function () {
      if (this.getAttribute("data-type") === "submit") {
        alert("You clicked Submit!");
      } else {
        let gameType = this.getAttribute("data-type");
        alert(`You clicked ${gameType}`);
      }
    });
  }
});

/**
 * the main game loop call when the script first loads
 * and after the user's answer has been processed 
 */
function RunGame() {
  //create 2 random numbers between 1 and 25
  let num1 =Math.floor(Math.random()*25)+1;
  let num2 =Math.floor(Math.random()*25)+1;
}

function CheckAnswer() {}

function CalculateCorrectAnswer() {}

function incrementScore() {}

function incrementWrongAnswer() {}

function displayAdditionQuestion() {}

function displaySubtractQuestion() {}

function displayMultiplyQuestion() {}

function displayDivisionQuestion() {}

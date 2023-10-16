var pressPlay = document.getElementById("btn");
var questionField = document.getElementById("questionField");
var answerField0 = document.querySelector("#answerField0");
var answerField1 = document.querySelector("#answerField1");
var answerField2 = document.querySelector("#answerField2");
var answerField3 = document.querySelector("#answerField3");
var countdown = document.querySelector(".countdown-timer");
var timeLeft = 90;
var userScore = 0;

// WHEN I click the start button
pressPlay.addEventListener("click", startGame);
answerField0.addEventListener("click", compareAnswer);
answerField1.addEventListener("click", compareAnswer);
answerField2.addEventListener("click", compareAnswer);
answerField3.addEventListener("click", compareAnswer);

// THEN a timer starts and I am presented with a question
function startGame() {
  populateQuestion();
  startTimer();
}

function compareAnswer(event) {
  // WHEN I answer a question
  if (event.target.innerText === questions[currentQuestion].correctAnswer) {
    window.alert("That's Correct!");
    userScore = userScore + 5;
    window.alert("Your score is now " + userScore)
    localStorage.setItem("userScore", JSON.stringify(userScore));
  }
  // WHEN I answer a question incorrectly
  // THEN time is subtracted from the clock
  else {
    window.alert("That is Wrong!");
    timeLeft = timeLeft - 15
  }

  currentQuestion++;
  // THEN I am presented with another question
  if (currentQuestion == 7) {
    endGame()
    clearInterval(timeRemaining);
  } else {
    populateQuestion();
  }
}
var timeRemaining
function startTimer() {

  timeRemaining = setInterval(function () {
    timeLeft--;
    countdown.textContent = "You have " + timeLeft + " remaining.";

    if (timeLeft === 0) {
      clearInterval(timeRemaining);
      endGame();
    }
  }, 1000);
}
// var storedScore = window.prompt(
//   'Enter your name to save your score!')

function endGame() {
  window.alert("Game over! Your score is " + userScore);


  enterHighScore();
}

function removeOptions() {
  
}

function enterHighScore() {
  window.prompt("Enter your initials")

}

function displayHighScores() {

}
// Grab one question from the questions array using currentQuestion index
//button with clickevent calls populatequestion and send populatequestion number
function populateQuestion() {

  questionField.innerHTML = questions[currentQuestion].text;

  for (var i = 0; i < questions[currentQuestion].answers.length; i++) {
    var answerField = document.getElementById("answerField" + i);

    answerField.innerHTML = questions[currentQuestion].answers[i];
  }
}

var currentQuestion = 0;
var questions = [
  {
    number: 1,
    text: 'Question 1 | What does HTML stand for?',
    answers: ['a) HyperText Markup Language', 'b) HydroTech Medium Lowpoint', 'c) Hexagon Track Mile Log', 'd) HeliTract Missed Loop'],
    correctAnswer: 'a) HyperText Markup Language'
  },
  {
    number: 2,
    text: 'Question 2 | Who invented HTML?',
    answers: ['a) Sir Isaac Newton', 'b) Sir John Williams', 'c) Sir Tim Berners-Lee', 'd) Sir Patrick Stewart'],
    correctAnswer: 'c) Sir Tim Berners-Lee'
  },
  {
    number: 3,
    text: 'Question 3 | When was HTML created?',
    answers: ['a) 1985', 'b) 2001', 'c) 1992', 'd) 1990'],
    correctAnswer: 'd) 1990'
  },
  {
    number: 4,
    text: 'Question 4 | Which of the following is NOT a primitive value type?',
    answers: ['a) Number', 'b) String', 'c) Window', 'd) Boolean'],
    correctAnswer: 'c) Window'
  },
  {
    number: 5,
    text: 'Question 5 | What is the array index of this question?',
    answers: ['a) 3', 'b) 6', 'c) 0', 'd) 4'],
    correctAnswer: 'd) 4'
  },
  {
    number: 6,
    text: 'Question 6 | What does DOM stand for?',
    answers: ['a) Digital Objective Mandate', 'b) Design Orientated Master', 'c) Detriment Optional Method', 'd) Document Object Model'],
    correctAnswer: 'd) Document Object Model'
  },
  {
    number: 7,
    text: 'Question 7 | Which of the following allows a user to input information into the window?',
    answers: ['a) window.log', 'b) window.prompt', 'c) window.alert', 'd) window.input'],
    correctAnswer: 'b) window.prompt'
  },
]

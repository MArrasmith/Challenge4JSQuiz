// GIVEN I am taking a code quiz



//event listener on a button..//function(event) with a timer  


//array..multiple choice



// WHEN all questions are answered or the timer reaches 0
// THEN the game is over

// WHEN the game is over
// THEN I can save my initials and my score

// 1. User clicks a button -> put question on page and start timer
// 2. 


// ----------------------------
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
  console.log(event.target.innerText);
  console.log(questions[currentQuestion].correctAnswer);
// WHEN I answer a question
  if (event.target.innerText === questions[currentQuestion].correctAnswer) {
    window.alert("That's Correct!");
    userScore=userScore+5;
    window.alert("Your score is now " + userScore)
  }
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
  else {
    window.alert("That is Wrong!");
    timeLeft=timeLeft-15
  }
// THEN I am presented with another question
  currentQuestion++;
  populateQuestion();
}

function startTimer() {

  var timeRemaining = setInterval(function () {
    timeLeft--;
    countdown.textContent = "You have " + timeLeft + " remaining.";

    if (timeLeft === 0) {
      clearInterval(timeRemaining);
      window.alert("you lose");
      return startGame();
    }
  }, 1000);
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
    text: 'Who invented HTML?',
    answers: ['a) Sir Isaac Newton', 'b) Sir John Williams', 'c) Sir Tim Berners-Lee', 'd) Sir Patrick Stewart'],
    correctAnswer: 'c) Sir Tim Berners-Lee'
  },
  {
    number: 3,
    text: 'When was HTML created?',
    answers: ['a) 1985', 'b) 2001', 'c) 1992', 'd) 1990'],
    correctAnswer: 'd) 1990'
  },
  {
    number: 4,
    text: 'this is a question?',
    answers: ['answer one', 'answer two', 'answer three', 'answer 4'],
    correctAnswer: 'answer one'
  },
  {
    number: 5,
    text: 'this is a question?',
    answers: ['answer one', 'answer two', 'answer three', 'answer 4'],
    correctAnswer: 'answer one'
  },
  {
    number: 6,
    text: 'this is a question?',
    answers: ['answer one', 'answer two', 'answer three', 'answer 4'],
    correctAnswer: 'answer one'
  },
  {
    number: 7,
    text: 'this is a question?',
    answers: ['answer one', 'answer two', 'answer three', 'answer 4'],
    correctAnswer: 'answer one'
  },
  {
    number: 8,
    text: 'this is a question?',
    answers: ['answer one', 'answer two', 'answer three', 'answer 4'],
    correctAnswer: 'answer one'
  },

]


// function countdown()


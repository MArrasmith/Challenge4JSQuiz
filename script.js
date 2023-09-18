// GIVEN I am taking a code quiz

// WHEN I click the start button
// THEN a timer starts and I am presented with a question
//event listener on a button..//function(event) with a timer  

// WHEN I answer a question
// THEN I am presented with another question
//array..multiple choice

// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock

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


pressPlay.addEventListener("click", startGame);
answerField0.addEventListener("click", compareAnswer);
answerField1.addEventListener("click", compareAnswer);
answerField2.addEventListener("click", compareAnswer);
answerField3.addEventListener("click", compareAnswer);


//   // start the timer
//   // populate a question
function startGame() {
  populateQuestion();
  startTimer();
}

// if (questions[currentQuestion].correctAnswer)
// If the answer is the same as the correct answer then the game progresses to the next question
//then the user score increases by 1, and the user gets an alert telling them they got the got it correct

// else the time clock decreases by 15 seconds

//The current question index increases by 1
//then the next question populates using the populate question function

function compareAnswer(event) {
  console.log(event.target.innerText);
  console.log(questions[currentQuestion].correctAnswer);

  if (event.target.innerText === questions[currentQuestion].correctAnswer) {
    window.alert("That's Correct!");
  }
  else {
    window.alert("That is Wrong!");
  }

  currentQuestion++;
  populateQuestion();
}


// Selects element by class
// var timeEl = document.querySelector("#countdown-timer");


// var secondsLeft = 10;

// function setTime() {
//   // Sets interval in variable
//   var timerInterval = setInterval(function() {
//     secondsLeft--;
//     timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

//     if(secondsLeft === 0) {
//       // Stops execution of action at set interval
//       clearInterval(timerInterval);
//       // Calls function to create and append image
//       sendMessage();
//     }

//   }, 1000);
// }

function startTimer() {

  var timeRemaining = setInterval(function () {
    timeLeft--;
    countdown.textContent = "You have " + timeLeft + " remaining.";

    if (timeLeft === 0) {
      clearInterval(timeRemaining);
      console.log("you lose")
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
    answers: ['Sir Isaac Newton', 'Sir John Williams', 'Sir Tim Berners-Lee', 'Sir Patrick Stewart'],
    correctAnswer: 'Sir Tim Berners-Lee'
  },
  {
    number: 3,
    text: 'When was HTML created?',
    answers: ['1985', '2001', '1992', '1990'],
    correctAnswer: '1990'
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


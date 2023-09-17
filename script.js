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
var questionField = document.getElementById("questionField")

function startGame() {
  populateQuestion();
  // start the timer
  // populate a question
}




// populateQuestion();


var currentQuestion = 0;

var questions = [
  {
    number: 1,
    text: 'Question 1 | What does HTML stand for?',
    answers: ['HyperText Markup Language', 'HydroTech Medium Lowpoint', 'Hexagon Track Mile Log', 'HeliTract Missed Loop'],
    correctAnswer: 'HyperText Markup Language'
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
    number: 4,
    text: 'this is a question?',
    answers: ['answer one', 'answer two', 'answer three', 'answer 4'],
    correctAnswer: 'answer one'
  },
  {
    number: 4,
    text: 'this is a question?',
    answers: ['answer one', 'answer two', 'answer three', 'answer 4'],
    correctAnswer: 'answer one'
  },
  {
    number: 4,
    text: 'this is a question?',
    answers: ['answer one', 'answer two', 'answer three', 'answer 4'],
    correctAnswer: 'answer one'
  },
  {
    number: 4,
    text: 'this is a question?',
    answers: ['answer one', 'answer two', 'answer three', 'answer 4'],
    correctAnswer: 'answer one'
  },

]
function populateQuestion() {
  // Grab one question from the questions array using currentQuestion index
  //button with clickevent calls populatequestion and send populatequestion number
  questionField.innerHTML=questions[0].text;
  console.log(questions[0])
  // This function will populate a question in the HTML dynamically
}



startGame();
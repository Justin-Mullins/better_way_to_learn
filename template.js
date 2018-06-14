// Initiailize the variables
var questionNumbers = [];
var correctQuestions = [];
var incorrectQuestions = [];
var currentQuestion = 1;
var previousQuestion;

// Put numbers 1 through 20 in the questionNumbers array
for (var i = 1; i <= 20; i++) {
  questionNumbers.push(i);
}

// Input
var input = document.querySelector("#input");

// button
var button = document.querySelector("button");
button.addEventListener("click", checkAnswer, false);

// Initialize the question listen
updateQuestionList();

// Display first question
document.getElementById("question1").style.display = 'block';

// This function marks the question numbers the appropriate colors.
// Then displays the new
function updateQuestionList() {

  // Check if there are any correct answers and if so turn them green
  if (correctQuestions.length > 0) {
    console.log("correctQuestions: " + correctQuestions);
    for (var i = 0; i < correctQuestions.length; i++) {
      questionNumbers[correctQuestions[i] - 1] = "<em>" + correctQuestions[i] + "</em>";
    }
  }
  // Check if there are any incorrect answers and if so turn them red
  if (incorrectQuestions.length > 0) {
    console.log("incorrectQuestions: " + incorrectQuestions);
    for (var i = 0; i < incorrectQuestions.length; i++) {
      questionNumbers[incorrectQuestions[i] - 1] = "<strong>" + incorrectQuestions[i] + "</strong>";
    }
  }


  // Change the first element to highlight current question
  questionNumbers[currentQuestion - 1] = "<mark>" + currentQuestion + "</mark>";

  // Convert the question array to a string
  var list = questionNumbers.join(" ");
  document.getElementById("questionList").innerHTML = list;
}


function checkAnswer() {

  var correctAnswer = document.getElementById("answer" + currentQuestion).innerHTML;
  var userAnswer = input.value;
  var index = incorrectQuestions.indexOf(currentQuestion);
  // If answer matches input
  if (userAnswer === correctAnswer) {
    // Check if the current question was an incorrect question, if so remove
    // from the array now that it's been answered correctly.
    console.log("index: " + index);
    if (index !== -1) {
      console.log("inside if")
      // Remove from incorrect question array
      incorrectQuestions.splice(index, 1);
    }
    alert("You are correct.");
    // push current question number to correct answer array
    correctQuestions.push(currentQuestion);
  }
  else { // If answer is wrong push current question number
    // to incorrect answer array, but only if current question
    // has not been answered wrong before.
    if (index === -1) {
      incorrectQuestions.push(currentQuestion);
    }
  }

  // Check if all the questions have already been answered
  if (correctQuestions.length === 20) {
    alert("Congradulations. You completed all the questions.")
  } // Check if all the questions have been attempted
  else if (correctQuestions.length + incorrectQuestions.length >= 20) {
    previousQuestion = currentQuestion;
    currentQuestion = incorrectQuestions[0];
    loadNextQuestion();
  }
  else {
    previousQuestion = currentQuestion;
    currentQuestion += 1;
    loadNextQuestion();
  }

  // Update colors of question list
  updateQuestionList();
}

function loadNextQuestion() {
  // make the current question visible on the page.
  document.getElementById("question" + previousQuestion).style.display = "none";
  document.getElementById("question" + currentQuestion).style.display = "block";
}

// Initiailize the variables
var questionNumbers = [];
var correctQuestions = [];
var incorrectQuestions = [];
for (var i = 1; i <= 20; i++) {
  questionNumbers.push(i);
  correctQuestions.push("");
  incorrectQuestions.push("");
}
var currentQuestion = 1;

// Initialize the question listen
initializeQuestionList();

// Load files to read data from
loadNextQuestion();

// Functions
function initializeQuestionList() {
  // Change the first element to highlight current question
  questionNumbers[0] = "<mark>1</mark>";
  // Convert the question array to a string
  var list = questionNumbers.join(" ");
  document.getElementById("questionList").innerHTML = list;
}

function checkAnswer() {

}

function updateQuestionList() {

}

function loadNextQuestion() {
  $(document).ready(function () {  // load text file using jquery ajax
    $("#question").load("test.html #question1");
    // $("#question").load("file.txt"); // load text data
  });
}

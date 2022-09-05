//VARIABLES
const quizContainer = document.querySelector(".quiz-container");
const playButton = document.querySelector(".play-button");
const startMenu = document.querySelector(".start-menu");
const quizGame = document.querySelector(".quiz-game");
const questionText = document.querySelector(".question-text");
const answerText = document.querySelector(".answer-text");
const buttonGrid = document.querySelector(".buttons-grid");
const questionNumberText = document.querySelector(".question-number");
const nextQuestion = document.querySelector(".next-question");
const resetButton = document.querySelector(".reset");
const quitButton = document.querySelector(".quit");
const resetDiv = document.querySelector(".reset-div");
var score = 0;

//START
playButton.addEventListener("click", () => {
  startMenu.classList.add("hidden");
  quizGame.classList.remove("hidden");
  main();
});

//GAME
function main() {
  //FIRST QUESTION
  let questionNumber = 0;
  score = 0;
  reset();
  let buttonClicked = false; // test if an answer question
  let buttons = document.querySelectorAll(".buttons-grid button"); // buttons array
  questionReset(buttons);
  buttons = textDisplay(questionNumber, buttons);
  buttonsEvent(buttons, questionNumber, buttonClicked);
  questionNumber++;
  questionNumberText.textContent = questionNumber + " / " + questions.length;

  nextQuestion.addEventListener("click", () => {
    if (questionNumber < questions.length) {
      //RESET
      questionReset(buttons);
      //TEXT DISPLAY
      buttons = textDisplay(questionNumber, buttons);
      //BUTTONS BEHAVIOR
      buttonsEvent(buttons, questionNumber, buttonClicked);
      //QUESTION NUMBER
      questionNumber++;
      questionNumberText.textContent =
        questionNumber + " / " + questions.length;
    } else {
      //RESULT BUTTON
      result();
      resetButton.addEventListener("click", () => {
        resetDiv.classList.add("hidden");
        questionNumber = 0;
        main();
      });
      //QUIT BUTTON
      quitButton.addEventListener("click", () => {
        resetDiv.classList.add("hidden");
        questionNumber = 0;
        startMenu.classList.remove("hidden");
        quizGame.classList.add("hidden");
      });
    }
  });
}

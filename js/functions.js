//test if the answer is correct
function isAnswerCorrect(button, questionNumber, buttons) {
  nextQuestion.classList.remove("hidden");
  coloringAnswers(buttons, questionNumber);
  if (button.textContent == questions[questionNumber]["correctAnswer"]) {
    score++;
    button.classList.remove("bad-answer");
    button.classList.add("correct-answer");
    answerText.textContent = "Bonne réponse";
    answerText.style.color = "green";
  } else {
    button.classList.remove("correct-answer");
    button.classList.add("bad-answer");
    answerText.textContent = "Mauvaise réponse";
    answerText.style.color = "red";
  }
}

//background color of buttons, red if the answer is false, green if it is true
function coloringAnswers(buttons, questionNumber) {
  for (let i = 0; i < buttons.length; i++) {
    if (buttons[i].textContent == questions[questionNumber]["correctAnswer"]) {
      buttons[i].style.background = "#C3FF99";
    } else {
      buttons[i].style.background = "#EC7272";
    }
  }
}

//reset answer style after a new question
function questionReset(buttons) {
  buttonGrid.classList.remove("hidden");
  while (buttonGrid.firstChild) {
    buttonGrid.removeChild(buttonGrid.firstChild);
  }
  answerText.textContent = "";
  nextQuestion.classList.add("hidden");
  return (buttonClicked = false);
}

//display texts
function textDisplay(questionNumber, buttons) {
  for (let i = 0; i < questions[questionNumber]["answers"].length; i++) {
    buttonGrid.appendChild(document.createElement("button"));
  }
  buttons = document.querySelectorAll(".buttons-grid button");
  for (let i = 0; i < questions[questionNumber]["answers"].length; i++) {
    buttons[i].textContent = questions[questionNumber]["answers"][i];
  }
  questionText.textContent = questions[questionNumber]["question"];
  return buttons;
}

//buttons behavior
function buttonsEvent(buttons, questionNumber, buttonClicked) {
  buttons.forEach((button) =>
    button.addEventListener("click", () => {
      if (buttonClicked == false) {
        buttonClicked = true;
        isAnswerCorrect(button, questionNumber, buttons);
        if (questionNumber == questions.length - 1) {
          nextQuestion.textContent = "Résultat";
        }
      }
    })
  );
}

//result
function result() {
  questionText.classList.add("hidden");
  buttonGrid.classList.add("hidden");
  questionNumberText.classList.add("hidden");
  answerText.textContent = "Score : " + score + " / " + questions.length;
  answerText.style.color = "black";
  nextQuestion.classList.add("hidden");
  resetDiv.classList.remove("hidden");
  quizGame.classList.add("result");
}

//reset
function reset() {
  questionNumberText.classList.remove("hidden");
  answerText.textContent = "";
  questionText.classList.remove("hidden");
  nextQuestion.textContent = "Question suivante >";
}

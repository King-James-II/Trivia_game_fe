// Array of questions
const questions = ["What planet is known as the 'Red Planet'?", "Who painted the Mona Lisa?"];

// Index of the current question
let currentQuestionIndex = 0;

// Array of arrays containing choices for each question
const choicesArray = [
  ["Earth", "Mars", "Jupiter", "Saturn"], 
  ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Michelangelo"]
];

// Array of correct answers for each question
const correctAnswer = ["Mars", "Leonardo da Vinci"];

// User's score
let score = 0; 

// Function to check user's answer
function checkAnswer(button) {
  // Checking if the selected answer is correct
  if (button.value == correctAnswer[currentQuestionIndex]) {
    // Displaying "Correct" if answer is correct and updating score
    document.getElementById("result").innerHTML = "Correct";
    score++;
  } else {
    // Displaying "Wrong" if answer is incorrect
    document.getElementById("result").innerHTML = "Wrong";
  }
  
  // Moving to the next question
  currentQuestionIndex++;
  // Displaying the next question
  displayQuestion();
}

// Function to display the current question and choices
function displayQuestion () {
  // Checking if there are remaining questions
  if (currentQuestionIndex < questions.length) {
    // Displaying the question
    document.getElementById("question").innerHTML = questions[currentQuestionIndex];
    // Displaying the choices for the question
    for (let i = 0; i < 4; i++) {
      const btn = document.getElementById("choice"+(i+1));
      btn.innerHTML= choicesArray[currentQuestionIndex][i];
      btn.value= choicesArray[currentQuestionIndex][i];
    }
  } else {
    // Displaying final score if all questions have been answered
    document.getElementById("result").innerHTML = `Final Score: ${score}/${questions.length} ${(score/questions.length)*100}%`;
    // Disabling choice buttons
    for (let i=0; i<4; i++) {
      const btn = document.getElementById("choice"+(i+1));
      btn.disabled = true;
    }
    // Clearing question and choices
    document.getElementById("question").innerHTML = "";
    document.getElementById("choices").innerHTML = "";
  }
}

// Displaying the first question when the page loads
displayQuestion();

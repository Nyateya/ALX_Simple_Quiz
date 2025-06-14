function checker() {
  const correctAnswer = "4";
  let userAnswer = "";
  const feedbackElement = document.getElementById("feedback");
  feedbackElement.style.display = "none";
  feedbackElement.classList.remove("correct", "incorrect");
  feedbackElement.textContent = "";
  const selectedRadio = document.querySelector('input[name="quiz"]:checked');
  if (selectedRadio) {
    userAnswer = selectedRadio.value;
  } else {
    feedbackElement.textContent = "Please select an answer!";
    feedbackElement.classList.add("incorrect");
    feedbackElement.style.display = "block";
    return;
  }
  if (userAnswer === correctAnswer) {
    feedbackElement.textContent = "Correct! Well done.";
    feedbackElement.classList.add("correct");
    feedbackElement.style.display = "block";
  } else {
    feedbackElement.textContent = "That's incorrect. Try again!";
    feedbackElement.classList.add("incorrect");
    feedbackElement.style.display = "block";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const submitButton = document.getElementById("submit-answer");
  if (submitButton) {
    submitButton.addEventListener("click", checker);
  } else {
    console.error("Error: Button with ID 'submit-answer' not found.");
  }
});

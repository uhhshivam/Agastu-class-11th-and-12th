
function startQuiz() {
  alert("AGASTU AI quiz button is working!");
}

function selectClass(classNumber) {
  document.getElementById("quiz-class").value = String(classNumber);
  document.getElementById("practice").scrollIntoView({
    behavior: "smooth"
  });
}

function selectSubject(subject) {
  document.getElementById("quiz-subject").value = subject;
  document.getElementById("practice").scrollIntoView({
    behavior: "smooth"
  });
}

function startPractice() {
  document.getElementById("practice").scrollIntoView({
    behavior: "smooth"
  });
}

function openChat() {
  document.getElementById("ask").scrollIntoView({
    behavior: "smooth"
  });
}

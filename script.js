
function selectClass(classNumber) {
  alert(
    "Welcome to AGASTU AI Class " + classNumber +
    "! Chapter-wise learning is coming next."
  );
}

function selectSubject(subject) {
  alert(
    subject + " selected! " +
    "We'll add class and chapter-wise questions next."
  );
}

function startPractice() {
  alert(
    "Question practice is our next upgrade. " +
    "We'll add MCQs, answers and scoring."
  );
}

function openChat() {
  const status = document.getElementById("chat-status");

  status.textContent =
    "The AGASTU chat interface will be connected to a real AI service in a later step.";
}

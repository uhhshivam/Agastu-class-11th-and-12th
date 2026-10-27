
const questionBank = {
  "11": {
    "Physics": [
      {
        q: "What is the SI unit of force?",
        options: ["Joule", "Newton", "Watt", "Pascal"],
        answer: 1,
        explanation: "Force is measured in newtons (N)."
      },
      {
        q: "What is the slope of a displacement-time graph?",
        options: ["Acceleration", "Force", "Velocity", "Momentum"],
        answer: 2,
        explanation: "The slope gives change in displacement divided by time, which is velocity."
      }
    ],
    "Chemistry": [
      {
        q: "What is the atomic number equal to?",
        options: ["Number of neutrons", "Number of protons", "Protons + neutrons", "Number of shells"],
        answer: 1,
        explanation: "The atomic number is the number of protons in the nucleus."
      },
      {
        q: "Which particle has a negative charge?",
        options: ["Proton", "Neutron", "Electron", "Alpha particle"],
        answer: 2,
        explanation: "An electron carries a negative electric charge."
      }
    ],
    "Mathematics": [
      {
        q: "What is sin²θ + cos²θ equal to?",
        options: ["0", "1", "2", "tan θ"],
        answer: 1,
        explanation: "This is the fundamental Pythagorean trigonometric identity."
      },
      {
        q: "What is the value of 2³?",
        options: ["6", "8", "9", "12"],
        answer: 1,
        explanation: "2³ = 2 × 2 × 2 = 8."
      }
    ],
    "Computer Science": [
      {
        q: "Which Python function displays output?",
        options: ["input()", "print()", "type()", "int()"],
        answer: 1,
        explanation: "print() displays text and other values on the screen."
      },
      {
        q: "Which data type stores True or False?",
        options: ["str", "int", "bool", "list"],
        answer: 2,
        explanation: "The bool type represents the Boolean values True and False."
      }
    ]
  },

  "12": {
    "Physics": [
      {
        q: "What is the SI unit of electric resistance?",
        options: ["Volt", "Ampere", "Ohm", "Coulomb"],
        answer: 2,
        explanation: "Electrical resistance is measured in ohms (Ω)."
      },
      {
        q: "Which device converts AC into DC?",
        options: ["Transformer", "Rectifier", "Motor", "Generator"],
        answer: 1,
        explanation: "A rectifier converts alternating current into direct current."
      }
    ],
    "Chemistry": [
      {
        q: "What is the pH of a neutral aqueous solution at 25°C?",
        options: ["1", "5", "7", "14"],
        answer: 2,
        explanation: "At 25°C, a neutral aqueous solution has pH 7."
      },
      {
        q: "Which functional group is present in alcohols?",
        options: ["-CHO", "-COOH", "-OH", "-CO-"],
        answer: 2,
        explanation: "Alcohols contain the hydroxyl functional group, -OH."
      }
    ],
    "Mathematics": [
      {
        q: "What is the derivative of x² with respect to x?",
        options: ["x", "2x", "x³", "2"],
        answer: 1,
        explanation: "Using the power rule, d(x²)/dx = 2x."
      },
      {
        q: "What is the value of sin 90°?",
        options: ["0", "1", "-1", "1/2"],
        answer: 1,
        explanation: "sin 90° = 1."
      }
    ],
    "Computer Science": [
      {
        q: "Which Python keyword defines a function?",
        options: ["function", "define", "def", "fun"],
        answer: 2,
        explanation: "Python uses the def keyword to define a function."
      },
      {
        q: "Which SQL command retrieves data from a table?",
        options: ["UPDATE", "SELECT", "DELETE", "INSERT"],
        answer: 1,
        explanation: "SELECT retrieves data from one or more database tables."
      }
    ]
  }
};

let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let answered = false;

function startQuiz() {
  const classNumber = document.getElementById("quiz-class").value;
  const subject = document.getElementById("quiz-subject").value;

  currentQuestions = questionBank[classNumber][subject];
  currentIndex = 0;
  score = 0;
  answered = false;

  showQuestion();
}

function showQuestion() {
  const area = document.getElementById("quiz-area");

  if (currentIndex >= currentQuestions.length) {
    area.innerHTML = `
      <div class="quiz-score">Quiz completed! 🎉</div>
      <p>You scored ${score} out of ${currentQuestions.length}.</p>
      <p>${Math.round(score / currentQuestions.length * 100)}% correct</p>
      <br>
      <button class="btn" onclick="startQuiz()">Try Again</button>
    `;
    return;
  }

  const item = currentQuestions[currentIndex];
  answered = false;

  area.innerHTML = `
    <div class="quiz-question">
      <p>Question ${currentIndex + 1} of ${currentQuestions.length}</p>
      <h3>${item.q}</h3>
      <div id="quiz-options"></div>
      <p id="quiz-feedback" class="quiz-feedback" aria-live="polite"></p>
    </div>
  `;

  const optionsArea = document.getElementById("quiz-options");

  item.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.className = "quiz-option";
    button.textContent =
      String.fromCharCode(65 + index) + ". " + option;

    button.addEventListener("click", () => checkAnswer(index));
    optionsArea.appendChild(button);
  });
}

function checkAnswer(selectedIndex) {
  if (answered) return;
  answered = true;

  const item = currentQuestions[currentIndex];
  const buttons = document.querySelectorAll(".quiz-option");
  const feedback = document.getElementById("quiz-feedback");

  buttons.forEach(button => button.disabled = true);

  if (selectedIndex === item.answer) {
    score++;
    feedback.textContent = "Correct! ✅ " + item.explanation;
  } else {
    feedback.textContent =
      "Not quite. The correct answer is " +
      item.options[item.answer] + ". " + item.explanation;
  }

  const nextButton = document.createElement("button");
  nextButton.className = "btn";
  nextButton.style.marginTop = "15px";
  nextButton.textContent =
    currentIndex === currentQuestions.length - 1
      ? "See Results"
      : "Next Question →";

  nextButton.addEventListener("click", () => {
    currentIndex++;
    showQuestion();
  });

  feedback.after(nextButton);
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

  document.getElementById("chat-status").textContent =
    "The live AI assistant will be connected in a future step.";
}

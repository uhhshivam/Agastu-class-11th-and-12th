
"use strict";

// AGASTU AI: CBSE Class 11 and 12 Question Practice

const questionBank = {
  "11": {
    "Physics": [
      {
        q: "What is the SI unit of force?",
        options: ["Joule", "Newton", "Watt", "Pascal"],
        answer: 1,
        explanation: "Force is measured in newtons (N). From Newton's second law, F = ma."
      },
      {
        q: "The slope of a displacement-time graph represents:",
        options: ["Acceleration", "Velocity", "Force", "Momentum"],
        answer: 1,
        explanation: "Slope = change in displacement / change in time, which gives velocity."
      },
      {
        q: "Which quantity is a vector?",
        options: ["Speed", "Distance", "Mass", "Velocity"],
        answer: 3,
        explanation: "Velocity has both magnitude and direction, so it is a vector."
      },
      {
        q: "The dimensional formula of work is:",
        options: ["MLT⁻¹", "ML²T⁻²", "MLT⁻²", "M⁰LT⁻¹"],
        answer: 1,
        explanation: "Work = force × displacement. Its dimensions are ML²T⁻²."
      },
      {
        q: "What is the acceleration due to gravity near Earth's surface approximately?",
        options: ["4.9 m/s²", "8.9 m/s²", "9.8 m/s²", "12 m/s²"],
        answer: 2,
        explanation: "The standard approximate value of g near Earth's surface is 9.8 m/s²."
      }
    ],

    "Chemistry": [
      {
        q: "The atomic number of an element equals its number of:",
        options: ["Neutrons", "Protons", "Nucleons", "Electron shells"],
        answer: 1,
        explanation: "Atomic number is defined as the number of protons in the nucleus."
      },
      {
        q: "Which subatomic particle has a negative charge?",
        options: ["Proton", "Neutron", "Electron", "Alpha particle"],
        answer: 2,
        explanation: "An electron carries a negative electric charge."
      },
      {
        q: "One mole contains approximately:",
        options: ["6.022 × 10²³ entities", "3.14 × 10² entities", "9.8 × 10²³ entities", "1.6 × 10⁻¹⁹ entities"],
        answer: 0,
        explanation: "Avogadro's constant is approximately 6.022 × 10²³ entities per mole."
      },
      {
        q: "Which type of bond involves sharing electron pairs?",
        options: ["Ionic", "Covalent", "Metallic only", "Nuclear"],
        answer: 1,
        explanation: "Covalent bonds form when atoms share one or more pairs of electrons."
      },
      {
        q: "The maximum number of electrons in the first shell is:",
        options: ["2", "8", "18", "32"],
        answer: 0,
        explanation: "The maximum capacity is given by 2n². For n = 1, it is 2 electrons."
      }
    ],

    "Mathematics": [
      {
        q: "What is sin²θ + cos²θ equal to?",
        options: ["0", "1", "2", "tan θ"],
        answer: 1,
        explanation: "The fundamental trigonometric identity is sin²θ + cos²θ = 1."
      },
      {
        q: "What is the value of 2³?",
        options: ["6", "8", "9", "12"],
        answer: 1,
        explanation: "2³ = 2 × 2 × 2 = 8."
      },
      {
        q: "The sum of the interior angles of a triangle is:",
        options: ["90°", "180°", "270°", "360°"],
        answer: 1,
        explanation: "The three interior angles of a Euclidean triangle sum to 180°."
      },
      {
        q: "If A = {1, 2, 3}, how many elements does A have?",
        options: ["1", "2", "3", "4"],
        answer: 2,
        explanation: "The set contains three distinct elements: 1, 2 and 3."
      },
      {
        q: "What is the slope of the line y = 3x + 2?",
        options: ["2", "3", "-3", "5"],
        answer: 1,
        explanation: "In y = mx + c, the coefficient m is the slope. Here, m = 3."
      }
    ],

    "Computer Science": [
      {
        q: "Which Python function displays output?",
        options: ["input()", "print()", "type()", "int()"],
        answer: 1,
        explanation: "print() displays text and values in the output."
      },
      {
        q: "Which data type represents True and False?",
        options: ["str", "int", "bool", "list"],
        answer: 2,
        explanation: "The bool data type represents Boolean values True and False."
      },
      {
        q: "What is the result of 17 // 5 in Python?",
        options: ["3.4", "2", "3", "4"],
        answer: 2,
        explanation: "The // operator performs floor division. 17 // 5 gives 3."
      },
      {
        q: "Which symbol begins a single-line comment in Python?",
        options: ["//", "#", "/*", "--"],
        answer: 1,
        explanation: "Python uses # to begin a single-line comment."
      },
      {
        q: "Which data type is immutable?",
        options: ["list", "dict", "set", "tuple"],
        answer: 3,
        explanation: "A tuple cannot have its elements reassigned after creation."
      }
    ]
  },

  "12": {
    "Physics": [
      {
        q: "What is the SI unit of electrical resistance?",
        options: ["Volt", "Ampere", "Ohm", "Coulomb"],
        answer: 2,
        explanation: "Resistance is measured in ohms (Ω). Ohm's law gives R = V/I."
      },
      {
        q: "Which device converts AC into DC?",
        options: ["Transformer", "Rectifier", "Motor", "Oscillator"],
        answer: 1,
        explanation: "A rectifier converts alternating current into unidirectional current."
      },
      {
        q: "The SI unit of electric charge is:",
        options: ["Ampere", "Coulomb", "Volt", "Farad"],
        answer: 1,
        explanation: "Electric charge is measured in coulombs (C)."
      },
      {
        q: "What is the SI unit of magnetic flux?",
        options: ["Tesla", "Weber", "Henry", "Ohm"],
        answer: 1,
        explanation: "Magnetic flux is measured in webers (Wb)."
      },
      {
        q: "Which lens is commonly used to correct myopia?",
        options: ["Convex lens", "Concave lens", "Cylindrical lens only", "Plane glass"],
        answer: 1,
        explanation: "A concave lens diverges incoming light and helps correct myopia."
      }
    ],

    "Chemistry": [
      {
        q: "At 25°C, the pH of a neutral aqueous solution is:",
        options: ["1", "5", "7", "14"],
        answer: 2,
        explanation: "At 25°C, a neutral aqueous solution has pH 7."
      },
      {
        q: "Which functional group is present in alcohols?",
        options: ["-CHO", "-COOH", "-OH", "-CO-"],
        answer: 2,
        explanation: "Alcohols contain the hydroxyl functional group, -OH."
      },
      {
        q: "The unit commonly used for molar conductivity is:",
        options: ["S m² mol⁻¹", "mol L⁻¹", "kg mol⁻¹", "J mol⁻¹"],
        answer: 0,
        explanation: "In SI units, molar conductivity is measured in S m² mol⁻¹."
      },
      {
        q: "Which polymer is formed from ethene?",
        options: ["Nylon-6,6", "Polyethene", "Bakelite", "Terylene"],
        answer: 1,
        explanation: "Ethene undergoes addition polymerisation to form polyethene."
      },
      {
        q: "A catalyst generally changes the:",
        options: ["Equilibrium constant", "Activation energy of the pathway", "Overall enthalpy change", "Identity of the products"],
        answer: 1,
        explanation: "A catalyst provides an alternative pathway with lower activation energy."
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
        q: "What is sin 90°?",
        options: ["0", "1", "-1", "1/2"],
        answer: 1,
        explanation: "The standard trigonometric value is sin 90° = 1."
      },
      {
        q: "What is the determinant of [[1, 0], [0, 1]]?",
        options: ["0", "1", "2", "-1"],
        answer: 1,
        explanation: "The determinant is (1 × 1) - (0 × 0) = 1."
      },
      {
        q: "The integral of 1 with respect to x is:",
        options: ["0", "1 + C", "x + C", "x² + C"],
        answer: 2,
        explanation: "The indefinite integral of 1 is x + C, where C is a constant."
      },
      {
        q: "If two events are independent, then P(A ∩ B) equals:",
        options: ["P(A) + P(B)", "P(A)P(B)", "P(A) - P(B)", "P(A)/P(B)"],
        answer: 1,
        explanation: "For independent events, the probability of their intersection is P(A)P(B)."
      }
    ],

    "Computer Science": [
      {
        q: "Which Python keyword defines a function?",
        options: ["function", "define", "def", "fun"],
        answer: 2,
        explanation: "Python uses def to define a function."
      },
      {
        q: "Which SQL command retrieves data from a table?",
        options: ["UPDATE", "SELECT", "DELETE", "INSERT"],
        answer: 1,
        explanation: "SELECT retrieves data from one or more database tables."
      },
      {
        q: "Which Python structure stores key-value pairs?",
        options: ["tuple", "string", "dictionary", "integer"],
        answer: 2,
        explanation: "A dictionary stores key-value pairs and is created using braces or dict()."
      },
      {
        q: "Which SQL clause filters rows according to a condition?",
        options: ["ORDER BY", "WHERE", "GROUP BY", "SELECT"],
        answer: 1,
        explanation: "WHERE filters rows based on a specified condition."
      },
      {
        q: "Which Python statement handles an exception?",
        options: ["try-except", "if-else only", "for-in", "def-return"],
        answer: 0,
        explanation: "A try-except block handles exceptions that occur while code runs."
      }
    ]
  }
};

let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let answered = false;
let quizFinished = false;

function startQuiz() {
  const classSelect = document.getElementById("quiz-class");
  const subjectSelect = document.getElementById("quiz-subject");
  const area = document.getElementById("quiz-area");

  if (!classSelect || !subjectSelect || !area) {
    alert("Quiz elements are missing. Please check index.html.");
    return;
  }

  const classNumber = classSelect.value;
  const subject = subjectSelect.value;

  const questions = questionBank[classNumber]?.[subject];

  if (!questions || questions.length === 0) {
    area.textContent = "Questions for this selection are not available yet.";
    return;
  }

  // Copy the question list so the original bank remains unchanged.
  currentQuestions = questions.map(question => ({
    ...question,
    options: [...question.options]
  }));

  currentIndex = 0;
  score = 0;
  answered = false;
  quizFinished = false;

  showQuestion();
  area.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function showQuestion() {
  const area = document.getElementById("quiz-area");

  if (!area) return;

  if (currentIndex >= currentQuestions.length) {
    showResults();
    return;
  }

  answered = false;

  const item = currentQuestions[currentIndex];
  const progress = Math.round(
    (currentIndex / currentQuestions.length) * 100
  );

  area.replaceChildren();

  const wrapper = document.createElement("div");
  wrapper.className = "quiz-question";

  const progressText = document.createElement("p");
  progressText.textContent =
    `Question ${currentIndex + 1} of ${currentQuestions.length}`;

  const progressBar = document.createElement("progress");
  progressBar.max = 100;
  progressBar.value = progress;
  progressBar.style.width = "100%";
  progressBar.style.margin = "12px 0";

  const questionTitle = document.createElement("h3");
  questionTitle.textContent = item.q;

  const optionsArea = document.createElement("div");
  optionsArea.id = "quiz-options";

  const feedback = document.createElement("p");
  feedback.id = "quiz-feedback";
  feedback.className = "quiz-feedback";
  feedback.setAttribute("aria-live", "polite");

  wrapper.append(progressText, progressBar, questionTitle, optionsArea, feedback);
  area.appendChild(wrapper);

  item.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "quiz-option";
    button.textContent = `${String.fromCharCode(65 + index)}. ${option}`;

    button.addEventListener("click", () => checkAnswer(index));
    optionsArea.appendChild(button);
  });
}

function checkAnswer(selectedIndex) {
  if (answered || quizFinished) return;

  const item = currentQuestions[currentIndex];
  const buttons = document.querySelectorAll("#quiz-options .quiz-option");
  const feedback = document.getElementById("quiz-feedback");

  if (!item || !feedback) return;

  answered = true;

  buttons.forEach((button, index) => {
    button.disabled = true;

    if (index === item.answer) {
      button.style.borderColor = "#22c55e";
    } else if (index === selectedIndex) {
      button.style.borderColor = "#ef4444";
    }
  });

  if (selectedIndex === item.answer) {
    score++;
    feedback.textContent = "Correct! ✓ " + item.explanation;
    feedback.style.color = "#86efac";
  } else {
    feedback.textContent =
      "Incorrect. The correct answer is " +
      item.options[item.answer] + ". " + item.explanation;
    feedback.style.color = "#fca5a5";
  }

  const nextButton = document.createElement("button");
  nextButton.type = "button";
  nextButton.className = "btn";
  nextButton.style.marginTop = "16px";
  nextButton.textContent =
    currentIndex === currentQuestions.length - 1
      ? "View Results"
      : "Next Question →";

  nextButton.addEventListener("click", () => {
    currentIndex++;
    showQuestion();
  });

  feedback.after(nextButton);
}

function showResults() {
  const area = document.getElementById("quiz-area");
  if (!area) return;

  quizFinished = true;

  const total = currentQuestions.length;
  const percentage = total ? Math.round((score / total) * 100) : 0;

  let message = "Keep practising. Every question helps!";
  if (percentage === 100) {
    message = "Excellent! You answered every question correctly!";
  } else if (percentage >= 70) {
    message = "Great work! Review the questions you missed.";
  } else if (percentage >= 40) {
    message = "Good start. Review the explanations and try again.";
  }

  area.replaceChildren();

  const result = document.createElement("div");
  result.className = "quiz-question";

  const heading = document.createElement("h3");
  heading.textContent = "Quiz completed! 🎉";

  const scoreText = document.createElement("p");
  scoreText.className = "quiz-score";
  scoreText.textContent = `Your score: ${score} / ${total}`;

  const percentageText = document.createElement("p");
  percentageText.textContent = `${percentage}% correct`;

  const messageText = document.createElement("p");
  messageText.className = "quiz-feedback";
  messageText.textContent = message;

  const restartButton = document.createElement("button");
  restartButton.type = "button";
  restartButton.className = "btn";
  restartButton.style.marginTop = "18px";
  restartButton.textContent = "Try Again ↻";
  restartButton.addEventListener("click", startQuiz);

  result.append(
    heading,
    scoreText,
    percentageText,
    messageText,
    restartButton
  );

  area.appendChild(result);
}

// Connect class and subject cards to the practice section.

function selectClass(classNumber) {
  const select = document.getElementById("quiz-class");
  const section = document.getElementById("practice");

  if (select) select.value = String(classNumber);
  if (section) section.scrollIntoView({ behavior: "smooth" });
}

function selectSubject(subject) {
  const select = document.getElementById("quiz-subject");
  const section = document.getElementById("practice");

  if (select) select.value = subject;
  if (section) section.scrollIntoView({ behavior: "smooth" });
}

function startPractice() {
  const section = document.getElementById("practice");
  if (section) section.scrollIntoView({ behavior: "smooth" });
}

function openChat() {
  const section = document.getElementById("ask");
  const status = document.getElementById("chat-status");

  if (section) section.scrollIntoView({ behavior: "smooth" });

  if (status) {
    status.textContent =
      "Ask AGASTU AI chat is our next upgrade. The live AI connection is not enabled yet.";
  }
}


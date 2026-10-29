/* AGASTU AI - Complete frontend script
   Features: class/subject selection, practice quiz, and Gemini chatbot backend.
*/

(() => {
  "use strict";

  const BACKEND_URL = "https://agastu-ai-backend-1.onrender.com";

  const $ = (selector, root = document) =>
    root.querySelector(selector);

  const $$ = (selector, root = document) =>
    [...root.querySelectorAll(selector)];

  let selectedClass = "12";
  let selectedSubject = "Physics";
  let currentQuestionIndex = 0;
  let score = 0;
  let quizQuestions = [];
  let answeredCurrent = false;

  const questionBank = {
    "11": {
      Physics: [
        {
          q: "What is the SI unit of force?",
          options: ["Joule", "Newton", "Watt", "Pascal"],
          answer: 1,
          explain: "Force is measured in newtons (N)."
        },
        {
          q: "Which quantity is a scalar?",
          options: ["Displacement", "Velocity", "Speed", "Force"],
          answer: 2,
          explain: "Speed has magnitude only, so it is a scalar."
        },
        {
          q: "The slope of a velocity-time graph gives:",
          options: ["Distance", "Acceleration", "Momentum", "Force"],
          answer: 1,
          explain: "The slope of a velocity-time graph gives acceleration."
        },
        {
          q: "What is the dimensional formula of velocity?",
          options: ["[LT⁻¹]", "[LT⁻²]", "[MLT⁻¹]", "[ML²T⁻²]"],
          answer: 0,
          explain: "Velocity = displacement / time, so its dimensions are [LT⁻¹]."
        },
        {
          q: "At the highest point of vertical upward motion, velocity is:",
          options: ["Maximum", "Zero", "Equal to g", "Infinite"],
          answer: 1,
          explain: "Instantaneous velocity is zero at the highest point."
        }
      ],

      Chemistry: [
        {
          q: "One mole contains approximately:",
          options: [
            "3.14 × 10²³ particles",
            "6.022 × 10²³ particles",
            "9.8 × 10²³ particles",
            "1.6 × 10⁻¹⁹ particles"
          ],
          answer: 1,
          explain: "Avogadro's constant is approximately 6.022 × 10²³ mol⁻¹."
        },
        {
          q: "The atomic number equals the number of:",
          options: ["Neutrons", "Protons", "Protons + neutrons", "Electron shells"],
          answer: 1,
          explain: "Atomic number is the number of protons in the nucleus."
        },
        {
          q: "A bond formed by sharing electron pairs is:",
          options: ["Ionic", "Covalent", "Metallic only", "Hydrogen only"],
          answer: 1,
          explain: "Covalent bonds form when atoms share electron pairs."
        },
        {
          q: "The pH of a neutral solution at 25°C is approximately:",
          options: ["0", "5", "7", "14"],
          answer: 2,
          explain: "At 25°C, a neutral aqueous solution has pH 7."
        },
        {
          q: "Which subatomic particle has a negative charge?",
          options: ["Proton", "Neutron", "Electron", "Nucleus"],
          answer: 2,
          explain: "Electrons carry a negative electric charge."
        }
      ],

      Mathematics: [
        {
          q: "If A = {1, 2, 3}, how many elements does A have?",
          options: ["1", "2", "3", "6"],
          answer: 2,
          explain: "The set contains three distinct elements."
        },
        {
          q: "sin²θ + cos²θ equals:",
          options: ["0", "1", "tan θ", "2"],
          answer: 1,
          explain: "This is the fundamental trigonometric identity."
        },
        {
          q: "The slope of a horizontal line is:",
          options: ["0", "1", "Undefined", "−1"],
          answer: 0,
          explain: "A horizontal line has a slope of zero."
        },
        {
          q: "The discriminant of ax² + bx + c = 0 is:",
          options: ["b² + 4ac", "b² − 4ac", "a² − 4bc", "2a"],
          answer: 1,
          explain: "The discriminant is D = b² − 4ac."
        },
        {
          q: "The value of 2³ is:",
          options: ["6", "8", "9", "12"],
          answer: 1,
          explain: "2³ = 2 × 2 × 2 = 8."
        }
      ],

      "Computer Science": [
        {
          q: "Which Python symbol starts a comment?",
          options: ["//", "#", "/*", "--"],
          answer: 1,
          explain: "Python comments begin with #."
        },
        {
          q: "Which data type stores True or False?",
          options: ["str", "int", "bool", "list"],
          answer: 2,
          explain: "The bool type stores True and False."
        },
        {
          q: "What is the result of 7 // 2 in Python?",
          options: ["3.5", "3", "4", "1"],
          answer: 1,
          explain: "The // operator performs floor division."
        },
        {
          q: "Which Python collection is ordered and mutable?",
          options: ["tuple", "list", "str", "int"],
          answer: 1,
          explain: "Lists are ordered and can be changed."
        },
        {
          q: "Which keyword defines a function in Python?",
          options: ["function", "fun", "def", "define"],
          answer: 2,
          explain: "Python uses the def keyword to define a function."
        }
      ]
    },

    "12": {
      Physics: [
        {
          q: "The SI unit of electric current is:",
          options: ["Volt", "Ohm", "Ampere", "Coulomb"],
          answer: 2,
          explain: "Electric current is measured in amperes (A)."
        },
        {
          q: "Ohm's law is represented by:",
          options: ["V = IR", "P = VI only", "F = ma", "Q = It²"],
          answer: 0,
          explain: "For an ohmic conductor, V = IR."
        },
        {
          q: "The SI unit of capacitance is:",
          options: ["Tesla", "Farad", "Henry", "Weber"],
          answer: 1,
          explain: "Capacitance is measured in farads (F)."
        },
        {
          q: "Conventional current follows the direction of flow of:",
          options: ["Electrons", "Negative ions only", "Positive charge", "Neutrons"],
          answer: 2,
          explain: "Conventional current follows the direction positive charge would move."
        },
        {
          q: "The SI unit of magnetic field is:",
          options: ["Tesla", "Volt", "Watt", "Farad"],
          answer: 0,
          explain: "Magnetic flux density is measured in teslas (T)."
        }
      ],

      Chemistry: [
        {
          q: "The unit commonly used for rate of reaction is:",
          options: ["mol L⁻¹ s⁻¹", "mol²", "L mol⁻¹ only", "kg m⁻³ only"],
          answer: 0,
          explain: "Rate is the change in concentration per unit time."
        },
        {
          q: "A catalyst generally changes the:",
          options: [
            "Equilibrium constant",
            "Activation energy pathway",
            "Overall enthalpy change",
            "Atomic number"
          ],
          answer: 1,
          explain: "A catalyst provides an alternative pathway with lower activation energy."
        },
        {
          q: "The functional group of alcohols is:",
          options: ["−CHO", "−COOH", "−OH", "−NH₂"],
          answer: 2,
          explain: "Alcohols contain the hydroxyl group, −OH."
        },
        {
          q: "Which polymer is formed from ethene?",
          options: ["PVC", "Polyethene", "Nylon-6,6", "Bakelite"],
          answer: 1,
          explain: "Ethene undergoes addition polymerisation to form polyethene."
        },
        {
          q: "For a first-order reaction, the half-life is:",
          options: [
            "Dependent on initial concentration",
            "Independent of initial concentration",
            "Always zero",
            "Always one second"
          ],
          answer: 1,
          explain: "For a first-order reaction, t½ = 0.693/k."
        }
      ],

      Mathematics: [
        {
          q: "The derivative of x² with respect to x is:",
          options: ["x", "2x", "x³", "2"],
          answer: 1,
          explain: "Using the power rule, d(x²)/dx = 2x."
        },
        {
          q: "The integral of 1 with respect to x is:",
          options: ["0", "1", "x + C", "x² + C"],
          answer: 2,
          explain: "The indefinite integral of 1 is x + C."
        },
        {
          q: "The determinant of [[a, b], [c, d]] is:",
          options: ["ab − cd", "ad − bc", "ac − bd", "a + d"],
          answer: 1,
          explain: "For a 2×2 matrix, the determinant is ad − bc."
        },
        {
          q: "If two non-zero vectors are perpendicular, their dot product is:",
          options: ["1", "−1", "0", "Their magnitudes multiplied by 2"],
          answer: 2,
          explain: "A·B = |A||B|cos 90° = 0."
        },
        {
          q: "The derivative of sin x is:",
          options: ["−sin x", "cos x", "−cos x", "tan x"],
          answer: 1,
          explain: "d(sin x)/dx = cos x."
        }
      ],

      "Computer Science": [
        {
          q: "Which SQL command retrieves data from a table?",
          options: ["GET", "SELECT", "FETCHTABLE", "OPEN"],
          answer: 1,
          explain: "SELECT retrieves data from database tables."
        },
        {
          q: "Which Python structure stores key-value pairs?",
          options: ["List", "Tuple", "Dictionary", "String"],
          answer: 2,
          explain: "A dictionary stores key-value pairs."
        },
        {
          q: "Which Python library is commonly used for tabular data analysis?",
          options: ["pandas", "turtle only", "random only", "time only"],
          answer: 0,
          explain: "pandas provides Series and DataFrame structures."
        },
        {
          q: "Which SQL clause filters rows?",
          options: ["ORDER BY", "WHERE", "GROUP BY only", "SELECT"],
          answer: 1,
          explain: "WHERE filters rows based on a condition."
        },
        {
          q: "A primary key in a table uniquely identifies each:",
          options: ["Database", "Row/record", "Column name only", "SQL command"],
          answer: 1,
          explain: "A primary key uniquely identifies each record."
        }
      ]
    }
  };

  function getById(id) {
    return document.getElementById(id);
  }

  function scrollToElement(element) {
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  }

  function findPracticeSection() {
    return getById("practice") ||
      getById("quiz") ||
      getById("quiz-section") ||
      getById("practice-section") ||
      $(".practice-section") ||
      $(".quiz-section");
  }

  function ensureQuizPanel() {
    let panel = getById("agastu-quiz-panel");

    if (panel) return panel;

    panel = document.createElement("div");
    panel.id = "agastu-quiz-panel";
    panel.style.cssText =
      "max-width:760px;margin:20px auto;padding:20px;border:1px solid #51417c;border-radius:16px;background:#151326;color:#f6f3ff;";

    const section = findPracticeSection();

    if (section) {
      section.appendChild(panel);
    } else {
      const main = $("main") || document.body;
      main.appendChild(panel);
    }

    return panel;
  }

  function getQuestionSet() {
    const classQuestions =
      questionBank[String(selectedClass)] || questionBank["12"];

    return classQuestions[selectedSubject] ||
      classQuestions.Physics ||
      [];
  }

  function renderQuizIntro() {
    const panel = ensureQuizPanel();

    panel.innerHTML = `
      <h2 style="margin-top:0">AGASTU AI Practice Quiz</h2>
      <p>Class ${selectedClass} · ${selectedSubject}</p>
      <p>Choose an answer for each question. Your score will appear at the end.</p>
      <button
        type="button"
        id="agastu-begin-quiz"
        style="padding:12px 18px;border:0;border-radius:9px;background:#8b5cf6;color:white;font-weight:700"
      >
        Start Quiz
      </button>
    `;

    const begin = getById("agastu-begin-quiz");

    if (begin) {
      begin.addEventListener("click", beginQuiz);
    }

    scrollToElement(panel);
  }

  function beginQuiz() {
    quizQuestions = [...getQuestionSet()];
    currentQuestionIndex = 0;
    score = 0;
    answeredCurrent = false;

    renderQuestion();
  }

  function renderQuestion() {
    const panel = ensureQuizPanel();
    const question = quizQuestions[currentQuestionIndex];

    if (!question) {
      renderResults();
      return;
    }

    answeredCurrent = false;

    panel.innerHTML = `
      <p style="margin:0 0 8px;color:#c4b5fd">
        Class ${selectedClass} · ${selectedSubject}
      </p>

      <p style="margin:0 0 12px">
        Question ${currentQuestionIndex + 1} of ${quizQuestions.length}
      </p>

      <h2 style="margin-top:0">${escapeHTML(question.q)}</h2>

      <div id="agastu-options" style="display:grid;gap:10px"></div>

      <p id="agastu-feedback" aria-live="polite"></p>

      <div style="display:flex;gap:10px;flex-wrap:wrap">
        <button
          type="button"
          id="agastu-next"
          disabled
          style="padding:11px 16px;border:0;border-radius:8px;background:#8b5cf6;color:white"
        >
          Next question
        </button>

        <button
          type="button"
          id="agastu-quit"
          style="padding:11px 16px;border:1px solid #8b5cf6;border-radius:8px;background:transparent;color:inherit"
        >
          Restart quiz
        </button>
      </div>
    `;

    const options = getById("agastu-options");

    question.options.forEach((option, index) => {
      const button = document.createElement("button");

      button.type = "button";
      button.textContent =
        `${String.fromCharCode(65 + index)}. ${option}`;

      button.style.cssText =
        "padding:12px;text-align:left;border:1px solid #51417c;border-radius:9px;background:#211b38;color:#fff;";

      button.addEventListener("click", () => {
        chooseAnswer(index, button);
      });

      options.appendChild(button);
    });

    getById("agastu-next").addEventListener("click", () => {
      currentQuestionIndex += 1;
      renderQuestion();
    });

    getById("agastu-quit").addEventListener("click", renderQuizIntro);

    scrollToElement(panel);
  }

  function chooseAnswer(index, selectedButton) {
    if (answeredCurrent) return;

    answeredCurrent = true;

    const question = quizQuestions[currentQuestionIndex];
    const buttons = $$("#agastu-options button");

    buttons.forEach((button, i) => {
      button.disabled = true;

      if (i === question.answer) {
        button.style.border = "2px solid #22c55e";
      }
    });

    const feedback = getById("agastu-feedback");

    if (index === question.answer) {
      score += 1;
      feedback.textContent = `Correct! ${question.explain}`;
    } else {
      selectedButton.style.border = "2px solid #ef4444";
      feedback.textContent = `Not quite. ${question.explain}`;
    }

    const nextButton = getById("agastu-next");
    nextButton.disabled = false;

    nextButton.textContent =
      currentQuestionIndex === quizQuestions.length - 1
        ? "See results"
        : "Next question";
  }

  function renderResults() {
    const panel = ensureQuizPanel();
    const total = quizQuestions.length;

    const percent = total
      ? Math.round((score / total) * 100)
      : 0;

    panel.innerHTML = `
      <h2>Quiz complete! 🎉</h2>

      <p>Class ${selectedClass} · ${escapeHTML(selectedSubject)}</p>

      <p style="font-size:1.25rem">
        Your score: <strong>${score} / ${total}</strong> (${percent}%)
      </p>

      <p>
        ${
          percent >= 80
            ? "Excellent work! Keep practising."
            : percent >= 50
              ? "Good effort. Review the explanations and try again."
              : "Keep learning. Practise again to improve your score."
        }
      </p>

      <button
        type="button"
        id="agastu-retry"
        style="padding:12px 18px;border:0;border-radius:9px;background:#8b5cf6;color:white"
      >
        Try again
      </button>
    `;

    getById("agastu-retry").addEventListener("click", beginQuiz);

    scrollToElement(panel);
  }

  function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, character => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    })[character]);
  }

  // Select Class 11 or Class 12.
  window.selectClass = function (classNumber) {
    const value = String(classNumber).replace(/\D/g, "");

    if (value === "11" || value === "12") {
      selectedClass = value;
    }

    $$("[data-class]").forEach(button => {
      const active =
        String(button.getAttribute("data-class")) === selectedClass;

      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });

    const classSelect = getById("class-select");

    if (classSelect) {
      classSelect.value = selectedClass;
    }

    return selectedClass;
  };

  // Select a subject.
  window.selectSubject = function (subject) {
    if (typeof subject === "string" && subject.trim()) {
      const normalized = subject.trim().toLowerCase();

      const knownSubjects = [
        "physics",
        "chemistry",
        "mathematics",
        "maths",
        "computer science",
        "cs"
      ];

      if (knownSubjects.includes(normalized)) {
        if (normalized === "maths") {
          selectedSubject = "Mathematics";
        } else if (normalized === "cs") {
          selectedSubject = "Computer Science";
        } else {
          selectedSubject = normalized.replace(
            /\b\w/g,
            letter => letter.toUpperCase()
          );
        }
      }
    }

    $$("[data-subject]").forEach(button => {
      const subjectValue =
        button.getAttribute("data-subject") || "";

      const active =
        subjectValue.toLowerCase() === selectedSubject.toLowerCase();

      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });

    const input = getById("chat-input");

    if (input) {
      input.value =
        `I'm studying Class ${selectedClass} ${selectedSubject}. Please help me understand a topic.`;
      input.focus();
    }

    const askSection = getById("ask");

    if (askSection) {
      scrollToElement(askSection);
    }

    return selectedSubject;
  };

  // Start the practice quiz.
  window.startPractice = function () {
    renderQuizIntro();
  };

  // Open the AI chat section.
  window.openChat = function () {
    const askSection = getById("ask");

    scrollToElement(askSection);

    const input = getById("chat-input");

    if (input) {
      input.focus({ preventScroll: true });
    }
  };

  function setupClassAndSubjectButtons() {
    $$("[data-class]").forEach(button => {
      button.addEventListener("click", () => {
        window.selectClass(button.getAttribute("data-class"));
      });
    });

    $$("[data-subject]").forEach(button => {
      button.addEventListener("click", () => {
        window.selectSubject(button.getAttribute("data-subject"));
      });
    });

    const classSelect = getById("class-select");

    if (classSelect) {
      classSelect.addEventListener("change", () => {
        window.selectClass(classSelect.value);
      });
    }

    const subjectSelect = getById("subject-select");

    if (subjectSelect) {
      subjectSelect.addEventListener("change", () => {
        window.selectSubject(subjectSelect.value);
      });
    }
  }

  // Connect the chatbot to the Render backend.
  function setupChatbot() {
    const form = getById("chat-form");
    const input = getById("chat-input");
    const messages = getById("chat-messages");
    const status = getById("chat-status");

    if (!form || !input || !messages) {
      console.warn(
        "AGASTU AI chat elements were not found. Check the IDs in index.html."
      );
      return;
    }

    form.addEventListener("submit", async event => {
      event.preventDefault();

      const question = input.value.trim();

      if (!question) return;

      const userMessage = document.createElement("div");
      userMessage.className = "message user-message";
      userMessage.textContent = question;

      messages.appendChild(userMessage);

      input.value = "";
      input.disabled = true;

      const submitButton = $('button[type="submit"]', form);

      if (submitButton) {
        submitButton.disabled = true;
      }

      if (status) {
        status.textContent = "AGASTU AI is thinking...";
      }

      const reply = document.createElement("div");
      reply.className = "message bot-message";
      reply.textContent = "Please wait...";

      messages.appendChild(reply);
      messages.scrollTop = messages.scrollHeight;

      try {
        const response = await fetch(`${BACKEND_URL}/ask`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            question: question
          })
        });

        let data;

        try {
          data = await response.json();
        } catch {
          throw new Error("The server returned an unreadable response.");
        }

        if (!response.ok) {
          throw new Error(
            data.error || `Server error (${response.status})`
          );
        }

        reply.textContent =
          data.answer || "I didn't receive an answer. Please try again.";

        if (status) {
          status.textContent = "Ready";
        }
      } catch (error) {
        console.error("AGASTU AI chat error:", error);

        reply.textContent =
          "I couldn't connect to the AI just now. Please try again in a moment.";

        if (status) {
          status.textContent = "Connection error";
        }
      } finally {
        input.disabled = false;

        if (submitButton) {
          submitButton.disabled = false;
        }

        input.focus();
        messages.scrollTop = messages.scrollHeight;
      }
    });
  }

  function initialise() {
    setupClassAndSubjectButtons();
    setupChatbot();

    const classSelect = getById("class-select");

    if (
      classSelect &&
      ["11", "12"].includes(String(classSelect.value))
    ) {
      selectedClass = String(classSelect.value);
    }

    const subjectSelect = getById("subject-select");

    if (
      subjectSelect &&
      questionBank[selectedClass][subjectSelect.value]
    ) {
      selectedSubject = subjectSelect.value;
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialise);
  } else {
    initialise();
  }
})();

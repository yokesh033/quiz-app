const questions = [
  {
    question: "What is the capital of India?",
    options: ["New Delhi", "Mumbai", "Kolkata"],
    answer: "New Delhi"
  },
  {
    question: "Which language is used for web apps?",
    options: ["Python", "JavaScript", "C++"],
    answer: "JavaScript"
  },
  {
    question: "HTML stands for?",
    options: ["HyperText Markup Language", "HighText Machine Language", "HyperTabular Markup Language"],
    answer: "HyperText Markup Language"
  },
  {
    question: "What is the output of 2 + 2?",
    options: ["3", "4", "5"],
    answer: "4"
  },
  {
    question: "CSS is used for?",
    options: ["Styling", "Programming", "Data Analysis"],
    answer: "Styling"
  },
  {
    question: "JavaScript is?",
    options: ["Scripting Language", "Database", "Operating System"],
    answer: "Scripting Language"
  },
  {
    question: "React is a?",
    options: ["Library", "Framework", "Compiler"],
    answer: "Library"
  },
  {
    question: "Which tag is used for a link in HTML?",
    options: ["<a>", "<link>", "<href>"],
    answer: "<a>"
  },
  {
    question: "MongoDB is a?",
    options: ["Relational DB", "NoSQL DB", "Spreadsheet"],
    answer: "NoSQL DB"
  },
  {
    question: "VS Code is a?",
    options: ["Text Editor", "Compiler", "Browser"],
    answer: "Text Editor"
  }
];

let currentQuestion = 0;
let score = 0;

const questionContainer = document.getElementById("question-container");
const answersContainer = document.getElementById("answers-container");
const nextBtn = document.getElementById("next-btn");
const scoreDisplay = document.getElementById("score");

function showQuestion() {
  const q = questions[currentQuestion];
  questionContainer.innerText = `${currentQuestion + 1}. ${q.question}`;
  answersContainer.innerHTML = "";

  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.innerText = option;
    btn.onclick = () => selectAnswer(btn, option);
    answersContainer.appendChild(btn);
  });

  nextBtn.style.display = "none";
}

function selectAnswer(button, selected) {
  const correct = questions[currentQuestion].answer;
  const allButtons = answersContainer.querySelectorAll("button");

  allButtons.forEach(btn => {
    btn.disabled = true;
    if (btn.innerText === correct) {
      btn.style.backgroundColor = "#388e3c";
    } else {
      btn.style.backgroundColor = "#d32f2f";
    }
  });

  if (selected === correct) score++;
  nextBtn.style.display = "block";
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
});

function showScore() {
  questionContainer.innerText = "Quiz Completed!";
  answersContainer.innerHTML = "";
  scoreDisplay.innerText =`Your Score: ${score} / ${questions.length}`;
  nextBtn.style.display = "none";
}

showQuestion();
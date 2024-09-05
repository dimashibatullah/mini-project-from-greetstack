const questions = [
  {
    question: "1. Di negara apa monas berada?",
    answer: [
      { text: "Italy", correct: false },
      { text: "Perancis", correct: false },
      { text: "Malaysia", correct: false },
      { text: "Indonesia", correct: true },
    ],
  },
  {
    question: "2. Siapa pemain sepak bola terkenal dari Portugal?",
    answer: [
      { text: "Messi", correct: false },
      { text: "Neymar", correct: false },
      { text: "C.Ronaldo", correct: true },
      { text: "Mbappe", correct: false },
    ],
  },
  {
    question: "3. Di negara mana Menara Eiffel berada?",
    answer: [
      { text: "Italia", correct: false },
      { text: "Spanyol", correct: false },
      { text: "Perancis", correct: true },
      { text: "Jerman", correct: false },
    ],
  },
  {
    question: "4. Planet apa yang terdekat dengan matahari?",
    answer: [
      { text: "Mars", correct: false },
      { text: "Venus", correct: false },
      { text: "Bumi", correct: false },
      { text: "Merkurius", correct: true },
    ],
  },
  {
    question: "5. Siapa penemu lampu pijar?",
    answer: [
      { text: "Alexander Graham Bell", correct: false },
      { text: "Nikola Tesla", correct: false },
      { text: "Albert Einstein", correct: false },
      { text: "Thomas Edison", correct: true },
    ],
  },
];

// Elemen DOM
const questionElement = document.querySelector(".question");
const answerElements = document.querySelectorAll(".answer li");
const nextBtn = document.querySelector("#next-btn");
const boxQuestion = document.querySelector(".box-question");
const playAgainBtn = document.querySelector("#playAgain-btn");
const result = document.querySelector(".result");
const resultContent = document.querySelector("#result-content");

// Variabel awal
let score = 0;
let currentQuestionIndex = 0;
const totalQuestions = questions.length;

// Fungsi menampilkan pertanyaan
function displayQuestion(index) {
  const currentQuestion = questions[index];
  questionElement.textContent = currentQuestion.question;

  answerElements.forEach((answerElement, i) => {
    const answer = currentQuestion.answer[i];
    answerElement.textContent = answer.text;
    answerElement.setAttribute("data-correct", answer.correct);
    resetAnswerStyles(answerElement);
  });

  nextBtn.style.display = "none";
}

// Fungsi untuk mereset gaya jawaban
function resetAnswerStyles(answerElement) {
  answerElement.style.pointerEvents = "auto";
  answerElement.style.cursor = "pointer";
  answerElement.classList.remove("true", "false");
}

// Fungsi untuk mengunci jawaban setelah dipilih
function lockAnswers(selectedAnswer, isCorrect) {
  answerElements.forEach((answerElement) => {
    answerElement.style.pointerEvents = "none";
    answerElement.style.cursor = "not-allowed";

    if (answerElement.getAttribute("data-correct") === "true") {
      answerElement.classList.add("true");
    } else if (!isCorrect) {
      selectedAnswer.classList.add("false");
    }
  });

  nextBtn.style.display = "block";
}

// Fungsi menangani klik jawaban
function handleAnswerClick(answerElement) {
  const isCorrect = answerElement.getAttribute("data-correct") === "true";

  if (isCorrect) {
    score++;
  }

  lockAnswers(answerElement, isCorrect);
}

// Fungsi menampilkan hasil kuis
function showResult() {
  boxQuestion.style.display = "none";
  result.style.display = "block";
  resultContent.textContent = `Your score is ${score} out of ${totalQuestions}`;
  playAgainBtn.style.display = "block";
}

// Fungsi reset game untuk bermain lagi
function resetGame() {
  score = 0;
  currentQuestionIndex = 0;
  result.style.display = "none";
  playAgainBtn.style.display = "none";
  boxQuestion.style.display = "block";
  displayQuestion(currentQuestionIndex);
}

// Event listener untuk klik jawaban
answerElements.forEach((answerElement) => {
  answerElement.addEventListener("click", () => {
    handleAnswerClick(answerElement);
  });
});

// Event listener untuk tombol "Next"
nextBtn.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < totalQuestions) {
    displayQuestion(currentQuestionIndex);
  } else {
    showResult();
  }
});

// Event listener untuk tombol "Play Again"
playAgainBtn.addEventListener("click", resetGame);

// Menampilkan pertanyaan pertama
displayQuestion(currentQuestionIndex);

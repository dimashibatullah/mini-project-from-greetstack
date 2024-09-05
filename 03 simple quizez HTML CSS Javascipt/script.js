// data pertanyaan
const questions = [
  {
    question: "1. Di negara apa monas berada",
    answer: [
      { text: "Italy", correct: false },
      { text: "Perancis", correct: false },
      { text: "Malaysia", correct: false },
      { text: "Indonesia", correct: true },
    ],
  },
  {
    question: "2. Siapa pemain sepak bola pemain terkenal dari portugal ?",
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

// mengambil elemen
let pertanyaan = document.querySelector(".question");
let jawaban = document.querySelectorAll(".answer li");
const nextBtn = document.querySelector("#next-btn");
const boxQuestion = document.querySelector(".box-question");
const playAgainBtn = document.querySelector("#playAgain-btn");
const result = document.querySelector(".result");
const resultContent = document.querySelector("#result-content");

// initial varible
let score = 0;
let counter = 1;
let jmlSoal = 5;

// fungsi menampilkan pertanyaan pertama
function firstQuestion() {
  pertanyaan.textContent = questions[0].question;
  jawaban.forEach((x, i) => {
    x.textContent = questions[0].answer[i].text;
    x.setAttribute("data-correct", questions[0].answer[i].correct);
  });
}

// menampilkan pertanyaan pertama
firstQuestion();

// cek benar atau salah jawaban
jawaban.forEach((pilihan) => {
  pilihan.addEventListener("click", () => {
    // cek correct jawaban
    if (pilihan.getAttribute("data-correct") == "true") {
      pilihan.classList.add("true");
      jawaban.forEach((x) => {
        x.style.pointerEvents = "none";
        x.style.cursor = "not-allowed";
      });
      score++;
    } else {
      pilihan.classList.add("false");
      jawaban.forEach((x) => {
        if (x.getAttribute("data-correct") == "true") {
          x.classList.add("true");
        }
        x.style.pointerEvents = "none";
        x.style.cursor = "not-allowed";
      });
    }
    nextBtn.style.display = "block";
  });
});

nextBtn.addEventListener("click", function () {
  if (counter >= 5) {
    boxQuestion.style.display = "none";
    result.style.display = "block";
    resultContent.textContent = `your scored is ${score} of ${jmlSoal}`;
    playAgainBtn.style.display = "block";
    jawaban.forEach((x) => {
      x.style.pointerEvents = "auto";
      x.style.cursor = "pointer";
      x.classList.remove("true", "false");
      nextBtn.style.display = "none";
    });
  } else {
    // ganti pertanyaan
    pertanyaan.textContent = questions[counter].question;
    jawaban.forEach((x, i) => {
      x.textContent = questions[counter].answer[i].text;
      x.setAttribute("data-correct", questions[counter].answer[i].correct);
    });
    // tambah counter
    counter++;

    //reset style
    jawaban.forEach((x) => {
      x.style.pointerEvents = "auto";
      x.style.cursor = "pointer";
      x.classList.remove("true", "false");
      nextBtn.style.display = "none";
    });
  }
});

playAgainBtn.addEventListener("click", () => {
  counter = 1;
  boxQuestion.style.display = "block";
  firstQuestion();
  result.style.display = "none";
  playAgainBtn.style.display = "none";
  score = 0;
});

function disableCursor(x, nextBtn) {
  x.style.pointerEvents = "none";
  x.style.cursor = "not-allowed";
  x.classList.remove("true", "false");
  nextBtn.style.display = "none";
}

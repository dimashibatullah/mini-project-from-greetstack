const passwordChars = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z", // huruf kecil
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z", // huruf besar
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9", // angka
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "=",
  "+",
  "{",
  "}",
  "[",
  "]",
  "|",
  "\\",
  ":",
  ";",
  '"',
  "'",
  "<",
  ">",
  ",",
  ".",
  "/",
  "?", // simbol
];

// mengambil element elemnent
const generateBtn = document.querySelector(".generate-btn");
const boxInput = document.querySelector("#input-pass");
const copyBtn = document.querySelector("#copy-btn");
const afterCopy = document.querySelector("#afterCopy");

let pass = "";
// ketika tombol generate diklik
generateBtn.addEventListener("click", () => {
  // generate password
  for (let i = 0; i < 8; i++) {
    let rand = Math.floor(Math.random() * 92);
    pass += passwordChars[rand];
  }

  //tampilkan password pad box input
  boxInput.value = pass;
  pass = "";
});

// ketika tombol copy di klik
copyBtn.addEventListener("click", () => {
  copyText(boxInput);
});

function copyText(input) {
  // blok text
  input.select();
  input.setSelectionRange(0, 99999);

  //copy text
  navigator.clipboard.writeText(input.value).then(() => {
    copyBtn.style.display = "none";
    afterCopy.style.display = "block";

    setTimeout(() => {
      copyBtn.style.display = "block";
      afterCopy.style.display = "none";
    }, 2000);
  });
}

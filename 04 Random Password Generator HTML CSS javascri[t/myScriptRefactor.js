// Karakter yang tersedia untuk password
const passwordChars = [
  ..."abcdefghijklmnopqrstuvwxyz", // huruf kecil
  ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ", // huruf besar
  ..."0123456789", // angka
  ..."!@#$%^&*()-_=+{}[]|\\:;\"'<>,.?/", // simbol
];

// mengambil element elemnent
const generateBtn = document.querySelector(".generate-btn");
const boxInput = document.querySelector("#input-pass");
const copyBtn = document.querySelector("#copy-btn");
const afterCopy = document.querySelector("#afterCopy");

// ketika tombol generate di klik
generateBtn.addEventListener("click", () => {
  // buat password random
  let resultPass = generatePass(passwordChars);

  // tampilkan resultPass pada box input
  boxInput.value = resultPass;
});

// ketika tombol salin di klik
copyBtn.addEventListener("click", () => {
  // copy text
  copyText(boxInput);
});

// function generate pass
function generatePass(passwordChars) {
  let pass = "";
  for (let i = 0; i < 8; i++) {
    let rand = Math.floor(Math.random() * 92);
    pass += passwordChars[rand];
  }
  return pass;
}

// function copy text
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

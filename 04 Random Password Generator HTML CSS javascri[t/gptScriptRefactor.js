// Karakter yang tersedia untuk password
const passwordChars = [
  ..."abcdefghijklmnopqrstuvwxyz", // huruf kecil
  ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ", // huruf besar
  ..."0123456789", // angka
  ..."!@#$%^&*()-_=+{}[]|\\:;\"'<>,.?/", // simbol
];

// Mengambil elemen DOM
const generateBtn = document.querySelector(".generate-btn");
const boxInput = document.querySelector("#input-pass");
const copyBtn = document.querySelector("#copy-btn");
const afterCopy = document.querySelector("#afterCopy");

// Fungsi untuk generate password acak
function generatePassword(length = 8) {
  let password = "";
  for (let i = 0; i < length; i++) {
    const randIndex = Math.floor(Math.random() * passwordChars.length);
    password += passwordChars[randIndex];
  }
  return password;
}

// Ketika tombol generate diklik
generateBtn.addEventListener("click", () => {
  const newPassword = generatePassword(8); // Generate password dengan panjang 8 karakter
  boxInput.value = newPassword;
});

// Fungsi untuk menyalin text
function copyText(input) {
  navigator.clipboard.writeText(input.value).then(() => {
    copyBtn.style.display = "none";
    afterCopy.style.display = "block";

    // Tampilkan pesan 'disalin' selama 2 detik
    setTimeout(() => {
      copyBtn.style.display = "block";
      afterCopy.style.display = "none";
    }, 2000);
  });
}

// Ketika tombol copy diklik
copyBtn.addEventListener("click", () => {
  if (boxInput.value) {
    copyText(boxInput);
  }
});

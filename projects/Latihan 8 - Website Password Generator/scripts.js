let passwordLength = document.getElementById("passwordLength");
let password = document.getElementById("password");

function generatePassword(len) {
  const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
  const numerik = "0123456789";
  const simbol = "!@#$%^&*()";

  const data = upperAlphabet + lowerAlphabet + numerik + simbol;

  let generator = "";
  for (let index = 0; index < len; index++) {
    generator += data[Math.floor(Math.random() * data.length)];
  }
  return generator;
}

function getPassword() {
  const newPassword = generatePassword(passwordLength.value);
  password.value = newPassword;
  setTimeout(() => {
    alert("Password Berhasil Dibuat!");
  }, 1000);
}

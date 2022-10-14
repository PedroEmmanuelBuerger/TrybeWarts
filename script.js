// Ramon G B S Requisito 3

const buttonEnter = document.querySelector(".button");

const verifyTryber = () => {
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  if (email === "tryber@teste.com" && password === "123456") {
    alert("Olá, Tryber!");
  }
  alert("Email ou senha inválidos.");
};

buttonEnter.addEventListener("click", verifyTryber);

// --------------------------------------------------

const checkbox = document.getElementById("agreement");
const buttonCheck = document.getElementById("submit-btn");
buttonCheck.disabled = true;

// pedro E. Requesito 18
function verifyCheck() {
  const checkboxVerify = document.getElementById("agreement").value;
  console.log(checkboxVerify);
  if (buttonCheck.disabled === true) {
    return (buttonCheck.disabled = false);
  }
  return (buttonCheck.disabled = true);
}

checkbox.addEventListener("click", verifyCheck);

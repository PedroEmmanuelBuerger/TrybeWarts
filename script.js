// Ramon G B S Requisito 3

const buttonEnter = document.querySelector('.button');

const verifyTryber = () => {
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  if (email === 'tryber@teste.com' && password === '123456') {
    alert('Olá, Tryber!');
  }
  alert('Email ou senha inválidos.');
};

buttonEnter.addEventListener('click', verifyTryber);

// --------------------------------------------------

const checkbox = document.getElementById('agreement');
const buttonCheck = document.getElementById('submit-btn');
buttonCheck.disabled = true;

// pedro E. Requesito 18
function verifyCheck() {
  const checkboxVerify = document.getElementById('agreement').value;
  console.log(checkboxVerify);
  if (buttonCheck.disabled === true) {
    buttonCheck.disabled = false;
  } else {
    buttonCheck.disabled = true;
  }
}

checkbox.addEventListener('click', verifyCheck);

// --------------------------------------------------

// pedro E. Requesito 21 - bonus
const spanCounter = document.getElementById('counter');
const textarea = document.getElementById('textarea');
textarea.addEventListener('input', () => {
  const counter = 500 - textarea.value.length;
  spanCounter.innerText = counter;
  console.log(spanCounter.innerText);
});

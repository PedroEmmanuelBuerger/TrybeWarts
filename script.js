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

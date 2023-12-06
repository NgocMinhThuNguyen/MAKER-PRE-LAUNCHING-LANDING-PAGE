const email = document.querySelector("#email-address");
const form = document.querySelector('form');

let error = email.nextElementSibling;

form.addEventListener('submit', (event) => {
  event.preventDefault();

  validateForm();
});

function validateForm() {
  const userEmail = email.value;

  if (userEmail === '') {
    error.textContent = 'Oops! Please enter your email.'
    showError();
  } else {
    validateEmail(userEmail, error);
  }
}

function validateEmail(userEmail, error) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(!(emailRegex.test(userEmail))) {
    error.textContent = "Oops! That doesn't look like an email";
    showError();
  } else {
    showSuccess();
  }
}

function showError() {
  email.classList.add('error');
  error.classList.add('error');
}

function showSuccess() {
  email.classList.remove('error');
  error.classList.remove('error');
}
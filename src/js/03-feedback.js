var throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('.feedback-form input');
const messageInput = document.querySelector('.feedback-form textarea');
const formData = JSON.parse(localStorage.getItem('feedback-form-state')) || {email: '', message: ''};

formFill();

form.addEventListener('input', throttle(event => {
  formData[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}, 500));

form.addEventListener('submit', onFormSubmit);


function formFill() {
  const formString = localStorage.getItem('feedback-form-state');
  const formJs = JSON.parse(formString);

  if (formJs) {
    if (formJs.email) {
      emailInput.value = formJs.email;
    }
    if (formJs.message) {
      messageInput.value = formJs.message;
    }
  }
}

function clearStorage(evt) {
  localStorage.removeItem('feedback-form-state');
  evt.currentTarget.reset();
}

function onFormSubmit(evt) {
  evt.preventDefault();
  if (!emailInput.value || !messageInput.value) {
    return;
  }
  console.log(formData);
  clearStorage(evt);
}



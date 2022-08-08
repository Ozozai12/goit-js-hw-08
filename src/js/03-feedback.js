var throttle = require('lodash.throttle');

const textInput = document.querySelector('.feedback-form');
const submitBtn = document.querySelector('.feedback-form button');
const emailInput = document.querySelector('.feedback-form input');
const messageInput = document.querySelector('.feedback-form textarea');
const formData = {};

formFill();

textInput.addEventListener('input', throttle(event => {
  formData[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}, 500));

function formFill() {
  const formString = localStorage.getItem('feedback-form-state');
  const formJs = JSON.parse(formString);
  if (formJs) {
    emailInput.value = formJs.email;
    messageInput.value = formJs.message;
  }
}

submitBtn.addEventListener('click', onSubmitClick);

function onSubmitClick(evt) {
  evt.preventDefault();
  if (emailInput.value === '' || messageInput.value === '') {
    return;
  }
  console.log(formData);
  clearStorage();
}

function clearStorage() {
  localStorage.removeItem('feedback-form-state');
  emailInput.value = '';
  messageInput.value = '';
}

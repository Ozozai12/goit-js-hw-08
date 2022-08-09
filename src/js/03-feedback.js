var throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('.feedback-form input');
const messageInput = document.querySelector('.feedback-form textarea');
const formData = {email: '', message: ''};

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
    emailInput.value = formJs.email;
    messageInput.value = formJs.message;
  } 
}



function clearStorage() {
  localStorage.removeItem('feedback-form-state');
  emailInput.value = '';
  messageInput.value = '';
  formData.email = '';
  formData.message = ''
}

function onFormSubmit(evt) {
  evt.preventDefault();
  if (!emailInput.value || !messageInput.value) {
    return;
  }
  console.log(formData);
  clearStorage();
}



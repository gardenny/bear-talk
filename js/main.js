'use strict';

const chatScreen = document.querySelector('.chat_screen');
const chatForm = document.querySelector('.chat_form');
const textInput = document.querySelector('.chat_form-msg');

chatForm.addEventListener('submit', e => {
  e.preventDefault();

  const newMsg = document.createElement('li');
  newMsg.setAttribute('class', 'chat_content right');
  newMsg.innerHTML = `
    <div class="chat_photo"></div>
    <div class="chat_bubble">${textInput.value}</div>`;

  chatScreen.appendChild(newMsg);
  textInput.value = '';
  textInput.focus();
});

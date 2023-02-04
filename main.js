'use strict';

const chatScreen = document.querySelector('.chat_screen');
const chatForm = document.querySelector('.chat_form');
const textInput = document.querySelector('.chat_form-msg');

chatForm.addEventListener('submit', e => {
  e.preventDefault();
  if (textInput.value.trim() === '') {
    alert('메시지 내용을 입력해주세요.');
    textInput.value = '';
    return;
  }

  const newMsg = document.createElement('li');
  newMsg.setAttribute('class', 'chat_content right');
  newMsg.innerHTML = `
    <div class="chat_photo"></div>
    <div class="chat_bubble">${textInput.value}</div>`;

  chatScreen.appendChild(newMsg);
  newMsg.scrollIntoView({ block: 'center' });
  textInput.value = '';
  textInput.focus();
});

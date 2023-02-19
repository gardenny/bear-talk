![beartalk](https://user-images.githubusercontent.com/110226567/216779047-26492282-58ae-47d0-a7bc-48532d2b1007.png)

# 🐻 BearTalk

모바일 채팅엡 UI 구현 사이트 👉 [Demo](https://imjone.github.io/bear-talk/)

<br />

## 📢 프로젝트 개요

저의 최종 목표 중 하나가 바로 채팅 어플리케이션 개발이었습니다.<br />
아직 서버에 대한 지식은 없기에, UI적인 부분만이라도 만들어보고 싶었습니다.<br />
PC 카카오톡 디자인을 참고하였으며, SCSS 문법을 통해 빠르게 스타일링하였습니다.

<br />

## 🗨️ 사용 기술

<p>
  <img src="https://img.shields.io/badge/HTML-E34F26?style=flat-square&logo=HTML5&logoColor=white"/>
  <img src="https://img.shields.io/badge/SCSS-CC6699?style=flat-square&logo=Sass&logoColor=white"/>
  <img src="https://img.shields.io/badge/JavaScript-f7df1e?style=flat-square&logo=JavaScript&logoColor=white"/>
</p>

<br />

## 📋 주요 기능

- 아이디와 비밀번호를 입력할 수 있는 로그인폼
- 채팅 내용 및 상대 프로필 미리보기 페이지
- 채팅방 내 간단한 메시지 전송 기능

<br />

## 💻 소스 코드

전체 코드 보러 가기 👉 [Notion](https://www.notion.so/imjone/BearTalk-31aa513be24941818f2ee5c65ec71eef?pvs=4)

### 📍 메시지 전송

`createElement` 메소드를 통해 새로운 DOM 요소를 생성한 후,<br />
채팅방 내 자식 요소로 추가하여 메시지 전송 효과를 구현하였습니다.

```javascript
const chatScreen = document.querySelector('.chat_screen');
const textInput = document.querySelector('.chat_form-msg');

const newMsg = document.createElement('li');
newMsg.setAttribute('class', 'chat_content right');
newMsg.innerHTML = `
  <div class="chat_photo"></div>
  <div class="chat_bubble">${textInput.value}</div>`;

chatScreen.appendChild(newMsg);
newMsg.scrollIntoView({ block: 'center' });
textInput.value = '';
textInput.focus();
```

### 📍 유효성 검사

`submit` 이벤트 발생 시 간단한 유효성을 검사를 진행하며,<br />
메시지창에 입력된 텍스트가 공백 뿐일 경우 알림창을 띄웁니다.

```javascript
const chatForm = document.querySelector('.chat_form');

chatForm.addEventListener('submit', e => {
  e.preventDefault();
  if (textInput.value.trim() === '') {
    alert('메시지 내용을 입력해주세요.');
    textInput.value = '';
    return;
  }
});
```

<br />

## 😊 배운 점 및 느낀 점

- 빠르고 효율적인 스타일링이 가능한 SCSS 문법의 매력을 느꼈습니다.
- 더욱 다양하고 사실적인 UI 요소 및 기능 구현에 대한 아쉬움이 많이 남습니다.
- 원하는 기능을 어떤 식으로 구현할 수 있을지 고민하며 탐구력을 기를 수 있었습니다.

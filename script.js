const messages = [
  "You are deeply loved.",
  "No matter what kind of day this is, this page is here for you.",
  "You make life better in a hundred quiet ways.",
  "This little website exists because you matter to me.",
  "You are one of my favorite parts of life.",
  "You deserve reminders that are soft, warm, and real.",
  "I will keep making things for you.",
  "You make ordinary days feel brighter.",
  "You are loved more than a small page can say."
];

const messageEl = document.getElementById('message');
const newMessageBtn = document.getElementById('new-message');
const heartsBtn = document.getElementById('send-hearts');
const heartsContainer = document.getElementById('hearts-container');

let currentMessageIndex = 0;

function showText(el, text) {
  el.classList.add('changing');
  setTimeout(() => {
    el.textContent = text;
    el.classList.remove('changing');
  }, 180);
}

function nextFrom(list, currentIndex) {
  let nextIndex = Math.floor(Math.random() * list.length);
  if (nextIndex === currentIndex) {
    nextIndex = (nextIndex + 1) % list.length;
  }
  return nextIndex;
}

function nextMessage() {
  currentMessageIndex = nextFrom(messages, currentMessageIndex);
  showText(messageEl, messages[currentMessageIndex]);
}

function createHeart(burst = false) {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.textContent = Math.random() > 0.5 ? '💗' : '💕';
  heart.style.left = `${Math.random() * 100}vw`;
  heart.style.animationDuration = `${burst ? 3 + Math.random() * 2 : 5 + Math.random() * 4}s`;
  heart.style.setProperty('--drift', `${-60 + Math.random() * 120}px`);
  heart.style.fontSize = `${18 + Math.random() * 18}px`;
  heartsContainer.appendChild(heart);
  setTimeout(() => heart.remove(), 9000);
}

function heartBurst() {
  for (let i = 0; i < 18; i += 1) {
    setTimeout(() => createHeart(true), i * 90);
  }
}

newMessageBtn.addEventListener('click', nextMessage);
heartsBtn.addEventListener('click', heartBurst);
document.body.addEventListener('click', (event) => {
  if (event.target.tagName !== 'BUTTON' && event.target.tagName !== 'A') {
    createHeart(true);
  }
});

setInterval(() => createHeart(false), 1000);
setInterval(nextMessage, 9500);

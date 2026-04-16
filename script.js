const messages = [
  "You are loved. Deeply, truly, and always.",
  "No matter what kind of day this is, Colin loves Lyndsey.",
  "You make life softer, brighter, and way more beautiful.",
  "This page exists for one reason: to remind you how much you mean to me.",
  "If you needed a sign today, here it is: I love you.",
  "You are my favorite person, and that does not change.",
  "A tiny website cannot hold all of it, but it can still say this: I love you."
];

const messageEl = document.getElementById('message');
const newMessageBtn = document.getElementById('new-message');
const heartsBtn = document.getElementById('send-hearts');
const heartsContainer = document.getElementById('hearts-container');

let currentIndex = 0;

function showMessage(index) {
  messageEl.classList.add('changing');
  setTimeout(() => {
    messageEl.textContent = messages[index];
    messageEl.classList.remove('changing');
  }, 180);
}

function nextMessage() {
  let nextIndex = Math.floor(Math.random() * messages.length);
  if (nextIndex === currentIndex) {
    nextIndex = (nextIndex + 1) % messages.length;
  }
  currentIndex = nextIndex;
  showMessage(currentIndex);
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
  for (let i = 0; i < 18; i++) {
    setTimeout(() => createHeart(true), i * 90);
  }
}

newMessageBtn.addEventListener('click', nextMessage);
heartsBtn.addEventListener('click', heartBurst);
document.body.addEventListener('click', (event) => {
  if (event.target.tagName !== 'BUTTON') {
    createHeart(true);
  }
});

setInterval(() => createHeart(false), 900);
setInterval(nextMessage, 9000);

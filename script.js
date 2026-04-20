const messages = [
  "You make the hard rooms lighter.",
  "When you were there, I could breathe.",
  "You made care look less like burden, more like art.",
  "I love how naturally we make room for people we love.",
  "You are caring with backbone — tender and tough at the same time.",
  "You call me into strength when anxiety tries to make me smaller.",
  "I trust the kind of love that enters tired rooms dancing.",
  "Making lunch with you for people we love felt like a glimpse of our life.",
  "This feels real because it does not feel scripted.",
  "You are one of the easiest people in the world to trust."
];

const quotes = [
  "This is a love story neither of us would write — which is how I know it’s real.",
  "No borrowed lines, no pretty lie to hide in.",
  "Just bright enough to change the weather, just human enough to reach the hard.",
  "All I know is when you were there, I could breathe.",
  "Maybe that’s the closest thing I have to faith: what grows around us when we give ourselves away.",
  "This is the kind of love I trust — the kind that enters tired rooms dancing and leaves them lighter than it found them."
];

const messageEl = document.getElementById('message');
const quoteEl = document.getElementById('quote');
const newMessageBtn = document.getElementById('new-message');
const newQuoteBtn = document.getElementById('new-quote');
const heartsBtn = document.getElementById('send-hearts');
const songHeartsBtn = document.getElementById('song-hearts');
const heartsContainer = document.getElementById('hearts-container');

let currentMessageIndex = 0;
let currentQuoteIndex = 0;

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

function nextQuote() {
  currentQuoteIndex = nextFrom(quotes, currentQuoteIndex);
  showText(quoteEl, quotes[currentQuoteIndex]);
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
newQuoteBtn.addEventListener('click', nextQuote);
heartsBtn.addEventListener('click', heartBurst);
songHeartsBtn.addEventListener('click', heartBurst);
document.body.addEventListener('click', (event) => {
  if (event.target.tagName !== 'BUTTON' && event.target.tagName !== 'A') {
    createHeart(true);
  }
});

setInterval(() => createHeart(false), 1000);
setInterval(nextMessage, 9500);

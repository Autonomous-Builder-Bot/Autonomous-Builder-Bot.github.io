const coupleQuestions = [
  {level:'easy', text:'What was your first impression of me?'},
  {level:'easy', text:'What is one little thing I do that you find adorable?'},
  {level:'easy', text:'What outfit of mine do you like the most?'},
  {level:'easy', text:'What is your favorite memory of us so far?'},
  {level:'easy', text:'What is something stupid that always makes you laugh?'},
  {level:'easy', text:'If we could teleport anywhere for dinner tonight, where are we going?'},
  {level:'easy', text:'What is one food you could eat every week forever?'},
  {level:'easy', text:'What is something you are weirdly competitive about?'},
  {level:'easy', text:'What song makes you think of me?'},
  {level:'easy', text:'What is a date we have had that you would happily repeat exactly?'},
  {level:'easy', text:'What celebrity would you want to have dinner with?'},
  {level:'easy', text:'What is something you think I am better at than I realize?'},
  {level:'easy', text:'What is your favorite physical feature of mine?'},
  {level:'easy', text:'What is something about you that you think I find especially attractive?'},
  {level:'easy', text:'If we had an entire day with no responsibilities, what should we do?'},
  {level:'easy', text:'What is your guilty-pleasure TV show, movie, song, or food?'},
  {level:'easy', text:'What is the funniest thing we have ever argued about?'},
  {level:'easy', text:'What is something ridiculous you would love for us to do together once?'},
  {level:'easy', text:'If our relationship were a movie genre, what would it be?'},
  {level:'easy', text:'Who is more likely to survive a zombie apocalypse, and why?'},
  {level:'warm', text:'What is something you would like me to compliment you on more often?'},
  {level:'warm', text:'When do you feel most attractive around me?'},
  {level:'warm', text:'What is something romantic you would secretly love me to do?'},
  {level:'warm', text:'What is one thing you would like us to try on a date that we have never done?'},
  {level:'warm', text:'What is something I do that instantly puts you in a better mood?'},
  {level:'warm', text:'What is something about me you did not expect to fall in love with?'},
  {level:'warm', text:'What is one way we are surprisingly different?'},
  {level:'warm', text:'What is one way we are almost too similar?'},
  {level:'warm', text:'What do you think our biggest strength as a couple is?'},
  {level:'warm', text:'What do you think I understand about you better than most people?'},
  {level:'warm', text:'What is something you would like more of from me physically: hugging, kissing, cuddling, flirting, or something else?'},
  {level:'warm', text:'What is something you wish we did together more frequently?'},
  {level:'warm', text:'What is one trip you would really like us to take together?'},
  {level:'warm', text:'What is a side of you that you want me to see more often?'},
  {level:'warm', text:'When have you felt especially proud to be with me?'},
  {level:'warm', text:'What do you think makes our relationship different from your previous relationships?'},
  {level:'warm', text:'What is something you have learned about love from being with me?'},
  {level:'warm', text:'What is a completely harmless secret you have never told me?'},
  {level:'warm', text:'What is one thing you are curious about trying romantically with me?'},
  {level:'warm', text:'If you could relive one night we have spent together, which one?'},
  {level:'vulnerable', text:'When do you feel closest to me?'},
  {level:'vulnerable', text:'When do you feel most distant from me?'},
  {level:'vulnerable', text:'What is something you sometimes need from me but have trouble asking for?'},
  {level:'vulnerable', text:'What is something you are afraid I misunderstand about you?'},
  {level:'vulnerable', text:'What is one insecurity you wish I understood better?'},
  {level:'vulnerable', text:'What is something I do that can make you feel unappreciated, even if I do not mean to?'},
  {level:'vulnerable', text:'What is something I do that makes you feel especially loved?'},
  {level:'vulnerable', text:'What is one thing you have wanted to tell me but could not figure out how to phrase?'},
  {level:'vulnerable', text:'What do you think I need emotionally that I do not always admit?'},
  {level:'vulnerable', text:'What do you think you need emotionally that you do not always admit?'},
  {level:'vulnerable', text:'What is one relationship habit you would like us to break?'},
  {level:'vulnerable', text:'What is one relationship habit you would never want us to lose?'},
  {level:'vulnerable', text:'What is something you wish I apologized for differently?'},
  {level:'vulnerable', text:'During arguments, what is something I do that makes resolving things harder?'},
  {level:'vulnerable', text:'During arguments, what is something you do that makes resolving things harder?'},
  {level:'vulnerable', text:'What is one compromise you have made for our relationship that I may not fully appreciate?'},
  {level:'vulnerable', text:'What is one compromise I have made that you appreciate?'},
  {level:'vulnerable', text:'What is something you are scared could eventually cause problems between us?'},
  {level:'vulnerable', text:'What is one thing you hope is different about our relationship a year from now?'},
  {level:'vulnerable', text:'What is one thing you desperately hope stays exactly the same?'},
  {level:'hard', text:'Have I ever genuinely hurt your feelings without realizing how badly?'},
  {level:'hard', text:'What is the biggest thing you think I need to work on as a partner?'},
  {level:'hard', text:'What is the biggest thing you need to work on as a partner?'},
  {level:'hard', text:'Have you ever pretended something did not bother you because you did not want another argument?'},
  {level:'hard', text:'What is something about our relationship that you sometimes worry is not sustainable?'},
  {level:'hard', text:'What is a boundary of yours you think I do not completely understand?'},
  {level:'hard', text:'Have you ever felt taken for granted by me? When?'},
  {level:'hard', text:'Have you ever taken me for granted?'},
  {level:'hard', text:'What is something you have forgiven me for but have not completely forgotten?'},
  {level:'hard', text:'What is something you think I still hold against you?'},
  {level:'hard', text:'Have you ever seriously questioned whether we should stay together?'},
  {level:'hard', text:'If yes, what was happening that made you question it?'},
  {level:'hard', text:'What is something about me that you love but also find difficult to live with?'},
  {level:'hard', text:'What is something about yourself you worry could hurt our relationship someday?'},
  {level:'hard', text:'Is there anything you feel like you sacrifice disproportionately in our relationship?'},
  {level:'hard', text:'What is one truth about our relationship you think neither of us particularly likes admitting?'},
  {level:'hard', text:'If you could change one thing about the way I treat you, what would it be?'},
  {level:'hard', text:'If I could change one thing about the way you treat me, what do you think I would choose?'},
  {level:'hard', text:'What question are you secretly hoping I do not ask you tonight?'},
  {level:'hard', text:'What is something completely honest you think I need to hear, even if there is a chance I will not like hearing it?'}
];

const levelNames = {easy:'Easy', warm:'Warm', vulnerable:'Vulnerable', hard:'Hard'};
const players = ['Colin', 'Lyndsey'];
const gameState = {player:0, deck:[], position:0, answered:0, sips:0, skips:0};

const gameQuestion = document.getElementById('game-question');
const questionCard = document.getElementById('question-card');
const turnLabel = document.getElementById('turn-label');
const levelChip = document.getElementById('level-chip');
const cardCount = document.getElementById('card-count');
const gameStats = document.getElementById('game-stats');
const difficultySelect = document.getElementById('difficulty-select');
const colinPill = document.getElementById('player-colin');
const lyndseyPill = document.getElementById('player-lyndsey');

function shuffle(list) {
  const copy = [...list];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function buildDeck() {
  const selected = difficultySelect.value;
  const pool = selected === 'all' ? coupleQuestions : coupleQuestions.filter(q => q.level === selected);
  gameState.deck = shuffle(pool);
  gameState.position = 0;
  renderQuestion(false);
}

function updatePlayers() {
  const isColin = gameState.player === 0;
  colinPill.classList.toggle('active', isColin);
  lyndseyPill.classList.toggle('active', !isColin);
}

function updateStats() {
  gameStats.textContent = `${gameState.answered} answered · ${gameState.sips} sips · ${gameState.skips} skips`;
}

function renderQuestion(animate = true) {
  if (!gameState.deck.length) return;
  if (gameState.position >= gameState.deck.length) {
    gameState.deck = shuffle(gameState.deck);
    gameState.position = 0;
  }

  const q = gameState.deck[gameState.position];
  const apply = () => {
    gameQuestion.textContent = q.text;
    turnLabel.textContent = `${players[gameState.player]}'s turn`;
    levelChip.textContent = levelNames[q.level];
    levelChip.dataset.level = q.level;
    cardCount.textContent = `${gameState.position + 1} / ${gameState.deck.length}`;
    updatePlayers();
    questionCard.classList.remove('is-leaving');
  };

  if (!animate) {
    apply();
    return;
  }

  questionCard.classList.add('is-leaving');
  window.setTimeout(apply, 190);
}

function advance(result) {
  if (result === 'answered') gameState.answered += 1;
  if (result === 'sip') gameState.sips += 1;
  if (result === 'skip') gameState.skips += 1;
  gameState.player = gameState.player === 0 ? 1 : 0;
  gameState.position += 1;
  updateStats();
  renderQuestion(true);
}

function resetGame() {
  gameState.player = 0;
  gameState.answered = 0;
  gameState.sips = 0;
  gameState.skips = 0;
  updateStats();
  buildDeck();
}

document.getElementById('game-answer').addEventListener('click', () => advance('answered'));
document.getElementById('game-sip').addEventListener('click', () => advance('sip'));
document.getElementById('game-skip').addEventListener('click', () => advance('skip'));
document.getElementById('game-shuffle').addEventListener('click', buildDeck);
document.getElementById('game-reset').addEventListener('click', resetGame);
difficultySelect.addEventListener('change', buildDeck);

resetGame();

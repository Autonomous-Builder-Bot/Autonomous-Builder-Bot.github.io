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
  {level:'easy', text:'What tiny thing can instantly improve your mood?'},
  {level:'easy', text:'If I were a flavor of ice cream, what flavor would I be?'},
  {level:'easy', text:'What is one thing we are surprisingly good at doing together?'},
  {level:'easy', text:'Which one of us would be more dangerous with unlimited money?'},
  {level:'easy', text:'What is one inside joke of ours you never want to lose?'},
  {level:'easy', text:'If we had to enter a couples competition, what would we have the best chance of winning?'},
  {level:'easy', text:'What is your favorite way for us to waste time together?'},
  {level:'easy', text:'If we switched lives for a day, what would surprise you most?'},
  {level:'easy', text:'What is a random skill you wish you could instantly master?'},
  {level:'easy', text:'What is one thing you think I would be terrible at on a reality show?'},
  {level:'easy', text:'What nickname would you give me if you had to invent a new one right now?'},
  {level:'easy', text:'What is one thing I do that is unintentionally funny?'},
  {level:'easy', text:'If we opened a business together, what should it be?'},
  {level:'easy', text:'What fictional couple are we absolutely nothing like?'},
  {level:'easy', text:'What is the most spontaneous thing you would do with me this weekend?'},
  {level:'easy', text:'If we had a signature cocktail or mocktail, what would be in it?'},
  {level:'easy', text:'What ordinary chore is more fun when we do it together?'},
  {level:'easy', text:'What is one harmless thing you would challenge me to do right now?'},
  {level:'easy', text:'What is your favorite picture of us, even if it is not the best-looking one?'},
  {level:'easy', text:'If our relationship had a mascot, what would it be?'},

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
  {level:'warm', text:'What kind of affection from me feels the most meaningful?'},
  {level:'warm', text:'What is a moment when you remember looking at me and thinking, wow, I really love this person?'},
  {level:'warm', text:'What is one thing I could do more often that would make you feel desired?'},
  {level:'warm', text:'What is a date idea that feels very us?'},
  {level:'warm', text:'What is something about our chemistry that you really like?'},
  {level:'warm', text:'What is one compliment from me that has actually stuck with you?'},
  {level:'warm', text:'What part of our normal routine feels oddly romantic to you?'},
  {level:'warm', text:'What is one place you would love to kiss me that we have never been together?'},
  {level:'warm', text:'What is something I wear that immediately gets your attention?'},
  {level:'warm', text:'What is one memory of us that still gives you butterflies?'},
  {level:'warm', text:'What is one way I can make you feel more pursued?'},
  {level:'warm', text:'What is something sweet you have wanted to surprise me with?'},
  {level:'warm', text:'What is one romantic tradition you would like us to create?'},
  {level:'warm', text:'When do you feel the safest being completely yourself with me?'},
  {level:'warm', text:'What is something you think we will laugh about when we are old?'},
  {level:'warm', text:'If we planned one perfect lazy morning together, what happens?'},
  {level:'warm', text:'What is one thing I do that makes you feel chosen?'},
  {level:'warm', text:'What kind of surprise from me would make you ridiculously happy?'},
  {level:'warm', text:'What is one future memory you really want us to create?'},
  {level:'warm', text:'What is something about me you appreciate more now than when we first started dating?'},

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
  {level:'vulnerable', text:'What is something you wish I noticed without you having to ask?'},
  {level:'vulnerable', text:'When you shut down emotionally, what do you usually need from me?'},
  {level:'vulnerable', text:'What is a fear about the future that you do not talk about very often?'},
  {level:'vulnerable', text:'What is one way you think I sometimes misread your intentions?'},
  {level:'vulnerable', text:'What part of yourself are you still learning how to accept?'},
  {level:'vulnerable', text:'What is something you wish you could trust me with more easily?'},
  {level:'vulnerable', text:'What is one thing you need during conflict that I may not naturally give you?'},
  {level:'vulnerable', text:'When have you felt most emotionally supported by me?'},
  {level:'vulnerable', text:'What kind of reassurance works best for you when you are insecure?'},
  {level:'vulnerable', text:'What is something from your past that still affects how you love today?'},
  {level:'vulnerable', text:'What is one thing you wish we could talk about more calmly?'},
  {level:'vulnerable', text:'What do you worry I might eventually get tired of?'},
  {level:'vulnerable', text:'What is one way you have changed because of this relationship?'},
  {level:'vulnerable', text:'What is something you are still learning how to give me?'},
  {level:'vulnerable', text:'What does feeling respected by me look like in everyday life?'},
  {level:'vulnerable', text:'What does feeling emotionally safe with me look like?'},
  {level:'vulnerable', text:'What is a need of yours that you sometimes minimize because you worry it is too much?'},
  {level:'vulnerable', text:'When do you feel least understood by me?'},
  {level:'vulnerable', text:'What is one thing about our relationship you think deserves more attention?'},
  {level:'vulnerable', text:'What is something you hope I never stop trying to understand about you?'},

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
  {level:'hard', text:'What is something completely honest you think I need to hear, even if there is a chance I will not like hearing it?'},
  {level:'hard', text:'What is the hardest recurring problem between us to admit is actually recurring?'},
  {level:'hard', text:'What is something I do that you think I underestimate the impact of?'},
  {level:'hard', text:'Have you ever agreed with me just to end a conflict? What was it about?'},
  {level:'hard', text:'What is something you wish I would take more responsibility for?'},
  {level:'hard', text:'What is something you think you need to take more responsibility for?'},
  {level:'hard', text:'What is one resentment you never want to let quietly build between us?'},
  {level:'hard', text:'When have you felt lonely while we were technically together?'},
  {level:'hard', text:'What is one difference between us that you worry may become harder over time?'},
  {level:'hard', text:'What is something about our future that you think we may want different things about?'},
  {level:'hard', text:'What is one promise you think couples make too casually?'},
  {level:'hard', text:'What would make you lose trust in me faster than almost anything else?'},
  {level:'hard', text:'What behavior from you do you think tests my patience the most?'},
  {level:'hard', text:'What behavior from me tests your patience the most?'},
  {level:'hard', text:'What is something you are afraid to need from another person?'},
  {level:'hard', text:'What is one thing about love that you believe differently than I do?'},
  {level:'hard', text:'Have you ever felt like you were competing with something else in my life for attention?'},
  {level:'hard', text:'What is one subject where you think we both become too defensive?'},
  {level:'hard', text:'What is something you would want us to fix before ever making a much bigger commitment?'},
  {level:'hard', text:'If our relationship stayed exactly as it is today for five years, what would concern you most?'},
  {level:'hard', text:'What is the most uncomfortable truth you can say about yourself as a partner?'}
];

const levelNames = {easy:'Easy', warm:'Warm', vulnerable:'Vulnerable', hard:'Hard'};
const players = ['Colin', 'Lyndsey'];
const gameState = {
  player: 0,
  deck: [],
  position: 0,
  turns: 0,
  scores: [0, 0],
  answered: [0, 0],
  sips: [0, 0],
  skips: [0, 0]
};

const gameQuestion = document.getElementById('game-question');
const questionCard = document.getElementById('question-card');
const turnLabel = document.getElementById('turn-label');
const levelChip = document.getElementById('level-chip');
const cardCount = document.getElementById('card-count');
const gameStats = document.getElementById('game-stats');
const difficultySelect = document.getElementById('difficulty-select');
const colinPill = document.getElementById('player-colin');
const lyndseyPill = document.getElementById('player-lyndsey');
const scoreColin = document.getElementById('score-colin');
const scoreLyndsey = document.getElementById('score-lyndsey');
const scoreLeader = document.getElementById('score-leader');

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

function updateScoreboard() {
  const totalSkips = gameState.skips[0] + gameState.skips[1];
  gameStats.textContent = `Colin: ${gameState.sips[0]} sips · Lyndsey: ${gameState.sips[1]} sips · ${totalSkips} skips`;
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
  const currentPlayer = gameState.player;

  if (result === 'answered') {
    gameState.answered[currentPlayer] += 1;
  }

  if (result === 'sip') {
    gameState.sips[currentPlayer] += 1;
    gameState.scores[currentPlayer] += 1;
  }

  if (result === 'skip') {
    gameState.skips[currentPlayer] += 1;
    gameState.scores[currentPlayer] += 2;
  }

  gameState.turns += 1;
  gameState.player = currentPlayer === 0 ? 1 : 0;
  gameState.position += 1;
  updateScoreboard();
  renderQuestion(true);
}

function resetGame() {
  gameState.player = 0;
  gameState.turns = 0;
  gameState.scores = [0, 0];
  gameState.answered = [0, 0];
  gameState.sips = [0, 0];
  gameState.skips = [0, 0];
  updateScoreboard();
  buildDeck();
}

document.getElementById('game-answer').addEventListener('click', () => advance('answered'));
document.getElementById('game-sip').addEventListener('click', () => advance('sip'));
document.getElementById('game-skip').addEventListener('click', () => advance('skip'));
document.getElementById('game-shuffle').addEventListener('click', buildDeck);
document.getElementById('game-reset').addEventListener('click', resetGame);
difficultySelect.addEventListener('change', buildDeck);

resetGame();

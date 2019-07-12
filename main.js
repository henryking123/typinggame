const words = [
  'hat',
  'river',
  'lucky',
  'statue',
  'generate',
  'stubborn',
  'cocktail',
  'runaway',
  'joke',
  'developer',
  'establishment',
  'hero',
  'javascript',
  'nutrition',
  'revolver',
  'echo',
  'siblings',
  'investigate',
  'horrendous',
  'symptom',
  'laughter',
  'magic',
  'master',
  'space',
  'definition'
];

const $wordDisplay = document.querySelector("#word-display");
const $timeDisplay = document.querySelector("#time-display");
const $scoreDisplay = document.querySelector("#score-display");
const $message = document.querySelector("#message");
let isPlaying = false;
let time = 6;
let score = 0;
let firstTimePlay;

function init() {
  console.log("123");
  genWord();
}
window.addEventListener("load", init);

function genWord() {
  const randIndex = Math.floor(Math.random() * words.length);
  $wordDisplay.innerHTML = words[randIndex];
}

const $wordInput = document.querySelector("#word-input");
$wordInput.addEventListener("input", () => {
  if (!isPlaying) {
    isPlaying = true;
    resetVar();

    if (!firstTimePlay) {
      setInterval(() => {
        if (time > 0) {
          time--;
        } else if (time === 0) {
          $message.innerHTML = "Game Over";
          isPlaying = false;
        }

        $timeDisplay.innerHTML = time;
      }, 1000);

      firstTimePlay = true;
    }
  }

  matchWord();
});

function resetVar() {
  $message.innerHTML = "_";
  time = 6;
  score = 0;
  $scoreDisplay.innerHTML = score;
}

function matchWord() {
  if ($wordInput.value === $wordDisplay.innerHTML) {
    $message.innerHTML = "Correct";
    genWord();
    $wordInput.value = "";
    score++;
    $scoreDisplay.innerHTML = score;
    time = 6;
  }
}
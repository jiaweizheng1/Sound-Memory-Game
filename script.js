// global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
var clueHoldTime = 0; //how long to hold each clue's light/sound
var pattern = [];
var mistakes = 3;

var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.1; //must be between 0.0 and 1.0
var guessCounter = 0;

function playsound(i) {
  document.getElementById("sound" + i).play();
}

function stopsound(j) {
  document.getElementById("sound" + j).currentTime = 0;
  document.getElementById("sound" + j).pause();
}

function updatelives(k) {
  document.getElementById("live").innerText = k;
}

function startGame() {
  //initialize game variables
  randPattern();
  mistakes = 3;
  clueHoldTime = 1200;
  updatelives(mistakes);

  progress = 0;
  gamePlaying = true;
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}

function stopGame() {
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

function playTone(btn, len) {
  playsound(btn);
  lightButton(btn);
  tonePlaying = true;
  setTimeout(function() {
    stopTone(btn);
  }, len);
}

function startTone(btn) {
  if (!tonePlaying) {
    playsound(btn);
    lightButton(btn);
    tonePlaying = true;
  }
}

function stopTone(btn) {
  clearButton(btn);
  stopsound(btn);
  tonePlaying = false;
}

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
  document.getElementById("img" + btn).classList.remove("hidden");
}

function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
  document.getElementById("img" + btn).classList.add("hidden");
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    clueHoldTime -= 20;
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
}

function loseGame() {
  stopGame();
  alert("Game Over. You lost.");
}

function winGame() {
  stopGame();
  alert("You won!");
}

function guess(btn) {
  console.log("user guessed: " + btn);

  if (!gamePlaying) {
    return;
  }

  if (pattern[guessCounter] == btn) {
    if (guessCounter == progress) {
      if (progress == pattern.length - 1) {
        winGame();
      } else {
        progress++;
        playClueSequence();
      }
    } else {
      guessCounter++;
    }
  } else if (--mistakes == 0) {
    loseGame();
  }

  updatelives(mistakes);
}

function randPattern() {
  for (let i = 0; i <= 7; i++) {
    pattern[i] = Math.floor(Math.random() * (5 - 1 + 1) + 1); // (max - min + 1) + 1
  }
}

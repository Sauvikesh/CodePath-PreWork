// global constants
let clueHoldTime = 1000; //how long to hold each clue's light/sound
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
let pattern = [];
let progress = 0; 
let gamePlaying = false;
let tonePlaying = false;
let volume = 0.5;  //must be between 0.0 and 1.0
let guessCounter = 0;
let mistakeCounter;
let seconds = 0;
const timerElement = document.getElementById("timer");
let runTimer = false;


function randomNumber(max, min){
    return Math.floor(Math.random() * (max - min) + min);
}

function startGame() {
    //initialize game variables
    progress = 0;
    gamePlaying = true;
    patternLength = randomNumber(6, 3);
    seconds = patternLength * 7;
    mistakeCounter = 0;
    runTimer = true;

    for(i = 0; i < patternLength; i++){
      pattern.push(randomNumber(6, 1));
    }

    // swap the Start and Stop buttons
    document.getElementById("startButton").classList.add("hidden");
    document.getElementById("stopButton").classList.remove("hidden");
    playClueSequence();
}

setInterval(updateTimer, 1000);


function updateTimer() {
  if(runTimer){
    timerElement.innerHTML = `Seconds left to guess: ${seconds}`;
    seconds--;
  }
}

function stopGame() {
    gamePlaying = false;
    runTimer = false;
    document.getElementById("startButton").classList.remove("hidden");
    document.getElementById("stopButton").classList.add("hidden");
}

function lightButton(btn){
    document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn) {
    if(gamePlaying){
      lightButton(btn);
      playTone(btn,clueHoldTime);
      setTimeout(clearButton,clueHoldTime,btn);
    }
}
function playClueSequence() {
    let delay = nextClueWaitTime; //set delay to initial wait time
    guessCounter = 0;
    for(let i=0;i<=progress;i++) { // for each clue that is revealed so far
      console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
      setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
      delay += clueHoldTime 
      delay += cluePauseTime;
    }
    clueHoldTime -= (clueHoldTime / pattern.length);
}

function loseGame() {
    stopGame();
    alert("Game Over. You lost.");
}

function winGame() {
    stopGame();
    alert("Game Over. You won!");
}

function guess(btn) {
  console.log("user guessed: " + btn);
  
  if(!gamePlaying){
    return;
  }
  
  if(pattern[guessCounter] == btn){
    //Guess was correct!
    if(guessCounter == progress){
      if(progress == pattern.length - 1){
        //GAME OVER: WIN!
        winGame();
      }else{
        //Pattern correct. Add next segment
        progress++;
        playClueSequence();
      }
    }else{
      //so far so good... check the next guess
      guessCounter++;
    }
  }else{
    if(mistakeCounter == 2){
      //Guess was incorrect and 2 mistakes have been made
      //GAME OVER: LOSE!
      loseGame();
    }
      mistakeCounter++; // add to mistake counter
      playClueSequence();
  }
}

// Sound Synthesis Functions
const freqMap = {
    1: 261.6,
    2: 329.6,
    3: 392,
    4: 466.2,
    5: 276.8
  }
  function playTone(btn,len){ 
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
    setTimeout(function(){
      stopTone()
    },len)
  }
  function startTone(btn){
    if(!tonePlaying){
      context.resume()
      o.frequency.value = freqMap[btn]
      g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
      context.resume()
      tonePlaying = true
    }
  }
  function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
  }
  
  // Page Initialization
  // Init Sound Synthesizer
  var AudioContext = window.AudioContext || window.webkitAudioContext 
  var context = new AudioContext()
  var o = context.createOscillator()
  var g = context.createGain()
  g.connect(context.destination)
  g.gain.setValueAtTime(0,context.currentTime)
  o.connect(g)
  o.start(0)
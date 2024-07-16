let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessfield");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrhi = document.querySelector(".lowOrhi");
const startOver = document.querySelector(".result");

const p = document.createElement("p");

let prevGuesses = [];
let numGuess = 1;

let playGame = true;
if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a Valid Number");
  }else if(guess < 1){
    alert("Please enter a Valid Number");
  }else if(guess >100){
    alert("Please enter a Number less than 100");
  }else{
    prevGuesses.push(guess)
    if(numGuess === 11){
        displayGuess(guess)
        displayMessage(`Game Over . Random number was ${randomNumber}`)
        endGame()
    }else {
        displayGuess(guess);
        checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
    if(guess === randomNumber){
        displayMessage(`You Guess it Right! :)`)
    }else if (guess < randomNumber){
        displayMessage(`Number is too low :(`)
    }else if (guess > randomNumber){
        displayMessage(`Number is  Tooo high`)
    }
}

function displayGuess(guess) {
    userInput.value = ''
    guessSlot.innerHTML += `${guess}  `
    numGuess++;
    remaining.innerHTML = `${ 11 - numGuess}`
}

function displayMessage(message) {
    lowOrhi.innerHTML = `<h2>${message} </h2>`
}
function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled', '');
    p.classList.add('button')
    p.innerHTML = ` <h2 id = "newGame">Start NEW game </h2>`
    startOver.appendChild(p)
    playGame = false;
    newGame()
}

function newGame() {
 const newGame =    document.querySelector('#newGame')
 newGame.addEventListener('click', function(e){
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuesses = []
    numGuess =1 ;
    guessSlot.innerHTML = ''
    remaining.innerHTML = `${ 11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
 })
}


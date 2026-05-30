let randomNumber = parseInt((Math.random() * 100) + 1 ) ;  // a random num

const submit = document.querySelector("#subt") ;
const userInput  = document.querySelector("#guessField") ;

const guessSlot = document.querySelector(".guesses") ;
const remaining = document.querySelector(".lastResult") ;

const lowOrHigh = document.querySelector(".lowOrHi") ;
const startOver = document.querySelector(".resultParas") ;

const p = document.createElement("p") ;

let prevGuess = [] ;
let numGuess = 1;

let playGame = true ;

if(playGame) {
    submit.addEventListener('click' , function(e) {
        e.preventDefault() ;

        const guess = parseInt(userInput.value) ;

        validateGuess(guess) ;
    })
}

function validateGuess(guess) {

    //  check if the number is a num or not 
    if(isNaN(guess)){
        alert('Please Enter a valid number ')
    } else if(guess < 1 ){
        alert('Please Enter a number less than 1')
    } else if(guess > 100) {
        alert('Please Enter a number less than 100')
    } else{
        prevGuess.push(guess)

        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game Over  , random number was ${randomNumber}`);
            endGame() ;
        } else {
            displayGuess(guess) ;
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {

    // to check eqaul lower or higher 
    if(guess === randomNumber) {
        displayMessage(`You Guessed it Right `) ;
        endGame() ;

    } else if(guess < randomNumber) {
        displayMessage(`Number is too low `) ;
    } else if(guess > randomNumber) {
        displayMessage(`Number is too High`) ;
    }
}

function displayGuess(guess) {

    // 
    userInput.value  = "" ; // ek bar value aa gyi toh input field clear krdo
    guessSlot.innerHTML += `${guess} ` ;

    numGuess ++ ;
    remaining.innerHTML = `${11 - numGuess}` ;
}

function displayMessage(message){

    //
    lowOrHigh.innerHTML = `<h2>${message}</h2>`
}

function newGame() {

    //
    const newGameButton =document.querySelector("#newGame") ;
    newGameButton.addEventListener('click' , function(e) {

        randomNumber = parseInt((Math.random() * 100) + 1 ); 
        prevGuess = [] ;
        numGuess =1 ;
        guessSlot.innerHTML = '' ;
        remaining.innerHTML =  `${11 - numGuess}` ;
        userInput.removeAttribute('disabled') ;
        startOver.removeChild(p) ;

        playGame = true ;

    })

}

function endGame() {

    //
    userInput.value  = '' ;
    userInput.setAttribute('disabled' , '') ;
    p.classList.add('button') ;
    p.innerHTML = `<h2 id= "newGame">Start new game</h2>` ;
    startOver.appendChild(p) ;
    playGame = false ;
    newGame() ;
}

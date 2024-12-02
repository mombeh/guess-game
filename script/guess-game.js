//guess-game.js

const secretNumber = 80
let attempt = 0
//References to element
const guessInput = document.getElementById('guessinput')
const guessButton = document.getElementById('guessbutton')
const feedback = document.getElementById('feedback')
const attemptDisplay = document.getElementById('attempt')
const restart = document.getElementById('restart')
 
//guess function
guessButton.addEventListener('click', () => {
    const userGuess = parseInt(guessInput.value, 10)
    attempt++

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        feedback.textContent = 'Please enter a number betweem 1 and 100'
    }

    if (userGuess === secretNumber) {
        feedback.textContent = 'Congratulation! You guessed the number'
        guessButton.disabled = true
        restart.style.display = 'inline-block'
    } else if (userGuess < secretNumber) {
        feedback.textContent = 'number is too low'
    } else {
        feedback.textContent = 'number is high'
    }

    attemptDisplay.textContent = `Attempt: ${attempt}`
    guessInput.value = ''
})

//restart function
restart.addEventListener('click', () => {
    attempt = 0
    feedback.textContent = ''
    attemptDisplay.textContent = ''
    guessInput.value = ''
    guessButton.disabled = false
    restart.style.display = 'none'
})
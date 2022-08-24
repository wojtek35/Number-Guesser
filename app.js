// Game value
let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

// UI elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Play again event listener
game.addEventListener('mousedown', (e) => {
    if (e.target.className === 'play-again') {
        window.location.reload();
    }
})

// Listen for guess button
guessBtn.addEventListener('click', () => {
    let guess = parseInt(guessInput.value);
    // Validate

    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'red')
    }
    // Check if won - Game over - Won
    if (guess === winningNum) {
        msg = `${winningNum} is the correct number. You win!`
        gameOver(true, msg)
    } else {
        // Wrong number
        guessesLeft -= 1;
        if (guessesLeft <= 0) {
            // Game over - Lost
            // Set message
            msg = `You lost. ${winningNum} is correct. `
            gameOver(won=false, msg)
        } else {
            // Game continues - answer wrong
            // Clear input
            guessInput.value =''
            // Set message
            setMessage(`Try again. Guesses left: ${guessesLeft}`, 'red')
        }
    }
})

function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}

function gameOver(won, msg) {
    let color; 
    won === true ? color = 'green' : color = 'red'

    // Disable input
    guessInput.disabled = true;
    // Change border color 
    guessInput.style.borderColor = color
    message.style.color = color
    
    // Set message
    setMessage(msg)

    // Play again
    guessBtn.value = 'Play Again'
    guessBtn.className += 'play-again'
    
}

// Get winning number
function getRandomNum(min, max) {
    let winningNum = Math.floor(Math.random()*(max-min+1)+min)
    console.log(winningNum)
    return(winningNum)
}
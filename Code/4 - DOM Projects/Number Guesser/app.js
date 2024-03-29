/*
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again
*/

// Game Values
let min = 1,
	max = 10,
	winningNum = getRandomNum(min, max),
	guessesLeft = 3;

// UI Elements
const game = document.querySelector('#game');
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const guessBtn = document.querySelector('#guess-btn');
const guessInput = document.querySelector('#guess-input');
const message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Play Again Event Listener
game.addEventListener('mousedown', function(e) {
	if (e.target.className === 'play-again') {
		window.location.reload();
	}
});

// Listen for guest
guessBtn.addEventListener('click', function() {
	let guess = parseInt(guessInput.value);

	// Validate
	if (isNaN(guess) || guess < min || guess > max) {
		setMessage(`Please enter a number between ${min} and ${max}`, 'red');
	}

	// Check if won
	if (guess === winningNum) {
		gameOver(true, `${winningNum} is correct, YOU WIN!`);
	} else {
		// Subtract a guess
		guessesLeft -= 1;
		if (guessesLeft === 0) {
			// Gameover = Lost
			gameOver(false, `GAME OVER! The correct number was ${winningNum}`);
		} else {
			// Game continues = answer wrong
			guessInput.style.borderColor = 'red';
			setMessage(
				`${guess} is inccorrect. ${guessesLeft} guesses left.`,
				'red'
			);
			guessInput.value = '';
		}
	}
});

// Game over
function gameOver(won, msg) {
	let color;
	won === true ? (color = 'green') : (color = 'red');

	// Disbale input
	guessInput.disabled = true;
	// Change border color
	guessInput.style.borderColor = color;
	// Set Text color
	message.style.color = color;
	// Set Message
	setMessage(msg);

	// Play Again
	guessBtn.value = 'Play Again';
	guessBtn.className += 'play-again';
}

// Get Random Number
function getRandomNum(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

// Set Message
function setMessage(msg, color) {
	message.style.color = color;
	message.textContent = msg;
}

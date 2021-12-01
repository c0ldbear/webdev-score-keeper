const player1 = {
	score: 0,
	button: document.querySelector('#btnPlayer1'),
	display: document.querySelector('#scorePlayer1')
};

const player2 = {
	score: 0,
	button: document.querySelector('#btnPlayer2'),
	display: document.querySelector('#scorePlayer2')
};

const selection = document.querySelector('#roundSelect');

// const btnPlayer1 = document.querySelector('#btnPlayer1');
// const btnPlayer2 = document.querySelector('#btnPlayer2');
const scorePlayer1 = document.querySelector('#scorePlayer1');
const scorePlayer2 = document.querySelector('#scorePlayer2');
const scores = document.querySelector('#scores');

const btnReset = document.querySelector('#btnResetScore');

const mehEmoij = document.createElement('i');
mehEmoij.classList.add('far', 'fa-meh-blank');
const sadEmoij = document.createElement('i');
sadEmoij.classList.add('far', 'fa-sad-tear');
const happyEmoij = document.createElement('i');
happyEmoij.classList.add('far', 'fa-laugh-beam');

// const player1 = { score: 0 };
// const player2 = { score: 0 };

const defaultScore = -1;
let scoreLimit = defaultScore;
let winner = false;

selection.addEventListener('change', (e) => {
	console.log('change event on select, e:', e);
	scoreLimit = parseInt(e.target.value);
	disableButtons(false);
});

btnPlayer1.addEventListener('click', (e) => {
	if (!winner && scoreLimit > 0) {
		console.log('+1 score to Player 1');
		player1.score++;
		scorePlayer1.innerText = player1.score;
	}

	/* Player 1 wins (check) */
	if (player1.score === scoreLimit) {
		console.log('Player 1 have won!');
		scorePlayer1.classList.add('winner');
		scorePlayer1.prepend(happyEmoij, ' ');
		// scorePlayer1.classList.add('has-text-weight-semibold');
		scorePlayer2.classList.add('loser');
		scorePlayer2.append(' ', sadEmoij);
		// scorePlayer1.classList.add('has-text-weight-light');
		winner = true;
		disableButtons(true);
	}
});

btnPlayer2.addEventListener('click', (e) => {
	if (!winner && scoreLimit > 0) {
		console.log('+1 score to Player 2');
		player2.score++;
		scorePlayer2.innerText = player2.score;
	}

	/* Player 2 wins (check) */
	if (player2.score === scoreLimit) {
		console.log('Player 2 have won!');
		scorePlayer2.classList.add('winner');
		scorePlayer2.append(' ', happyEmoij);
		scorePlayer1.classList.add('loser');
		scorePlayer1.prepend(sadEmoij, ' ');
		winner = true;
		disableButtons(true);
	}
});

btnReset.addEventListener('click', () => {
	resetGame();
	// // scorePlayer1.style.color = '';
	// scorePlayer1.innerText = 0;
	// scorePlayer1.classList.remove('winner', 'loser');
	// player1.score = 0;

	// // scorePlayer2.style.color = '';
	// scorePlayer2.innerText = 0;
	// scorePlayer2.classList.remove('winner', 'loser');
	// player2.score = 0;

	// selection.value = 0;
	// scorelimit = defaultscore;
	// winner = false;
	// disablebuttons(true);
});

const disableButtons = function(state) {
	player1.button.disabled = state;
	player2.button.disabled = state;
};

const resetPlayer = (player) => {
	player.display.innerText = 0;
	player.display.classList.remove('winner', 'loser');
	player.score = 0;
};

const resetGame = () => {
	resetPlayer(player1);
	resetPlayer(player2);

	selection.value = 0;
	scoreLimit = defaultScore;
	winner = false;
	disableButtons(true);
};

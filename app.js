const player1 = {
	score: 0,
	button: document.querySelector('#btnPlayer1'),
	display: document.querySelector('#scorePlayer1'),
	addEmoji: function(smiley) {
		this.display.prepend(smiley, ' ');
	}
};

const player2 = {
	score: 0,
	button: document.querySelector('#btnPlayer2'),
	display: document.querySelector('#scorePlayer2'),
	addEmoji: function(smiley) {
		this.display.append(' ', smiley);
	}
};

const selection = document.querySelector('#roundSelect');
const scores = document.querySelector('#scores');
const btnReset = document.querySelector('#btnResetScore');

const mehEmoij = document.createElement('i');
mehEmoij.classList.add('far', 'fa-meh-blank');
const sadEmoij = document.createElement('i');
sadEmoij.classList.add('far', 'fa-sad-tear');
const happyEmoij = document.createElement('i');
happyEmoij.classList.add('far', 'fa-laugh-beam');

const defaultScore = -1;
let scoreLimit = defaultScore;
let winner = false;

selection.addEventListener('change', (e) => {
	console.log('change event on select, e:', e);
	scoreLimit = parseInt(e.target.value);
	disableButtons(false);
});

const updateGame = (player, opponent) => {
	if (!winner && scoreLimit > 0) {
		player.score++;
		player.display.innerText = player.score;
	}

	/* Player 1 wins (check) */
	if (player.score === scoreLimit) {
		player.display.classList.add('winner');
		player.addEmoji(happyEmoij);
		opponent.display.classList.add('loser');
		opponent.addEmoji(sadEmoij);
		winner = true;
		disableButtons(true);
	}
};

btnPlayer1.addEventListener('click', (e) => {
	updateGame(player1, player2);
});

btnPlayer2.addEventListener('click', (e) => {
	updateGame(player2, player1);
});

btnReset.addEventListener('click', () => {
	resetGame();
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

const selection = document.querySelector('#roundSelect');

const btnPlayer1 = document.querySelector('#btnPlayer1');
const btnPlayer2 = document.querySelector('#btnPlayer2');
const scorePlayer1 = document.querySelector('#scorePlayer1');
const scorePlayer2 = document.querySelector('#scorePlayer2');
const scores = document.querySelector('#scores');

const btnReset = document.querySelector('#btnResetScore');

const player1 = { score: 0 };
const player2 = { score: 0 };

const defaultScore = -1;
let scoreLimit = defaultScore;
let winner = false;

selection.addEventListener('change', (e) => {
	console.log('change event on select, e:', e);
	scoreLimit = parseInt(e.target.value);
});

btnPlayer1.addEventListener('click', (e) => {
	if (!winner && scoreLimit > 0) {
		console.log('+1 score to Player 1');
		player1.score++;
		scorePlayer1.innerText = player1.score;
	}

	if (player1.score === scoreLimit) {
		console.log('Player 1 have won!');
		scorePlayer1.style.color = '#1a936f';
		scorePlayer2.style.color = '#931a3e';
		winner = true;
	}
});

btnPlayer2.addEventListener('click', (e) => {
	if (!winner && scoreLimit > 0) {
		console.log('+1 score to Player 2');
		player2.score++;
		scorePlayer2.innerText = player2.score;
	}

	if (player2.score === scoreLimit) {
		console.log('Player 2 have won!');
		scorePlayer2.style.color = '#1a936f';
		scorePlayer1.style.color = '#931a3e';
		winner = true;
	}
});

btnReset.addEventListener('click', () => {
	scorePlayer1.style.color = '';
	scorePlayer1.innerText = 0;
	player1.score = 0;

	scorePlayer2.style.color = '';
	scorePlayer2.innerText = 0;
	player2.score = 0;

	selection.value = 0;
	scoreLimit = defaultScore;
	winner = false;
});

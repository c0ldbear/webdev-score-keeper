const btnPlayer1 = document.querySelector('#btnPlayer1');
const btnPlayer2 = document.querySelector('#btnPlayer2');
const scorePlayer1 = document.querySelector('#scorePlayer1');
const scorePlayer2 = document.querySelector('#scorePlayer2');
const scores = document.querySelector('#scores');

const btnReset = document.querySelector('#btnResetScore');

const player1 = { score: 0 };
const player2 = { score: 0 };

btnPlayer1.addEventListener('click', (e) => {
	console.log('+1 score to Player 1');

	player1.score++;
	scorePlayer1.innerText = player1.score;

	if (player1.score === 5) {
		/* set the number of rounds instead of specific '5' in the if-statement */
		scorePlayer1.style.color = '#1a936f';
		scorePlayer2.style.color = '#931a3e';
	}
});

btnPlayer2.addEventListener('click', (e) => {
	console.log('+1 score to Player 2');

	player2.score++;
	scorePlayer2.innerText = player2.score;

	if (player2.score === 5) {
		/* set the number of rounds instead of specific '5' in the if-statement */
		scorePlayer2.style.color = '#1a936f';
		scorePlayer1.style.color = '#931a3e';
	}
});

btnReset.addEventListener('click', () => {
	scorePlayer1.style.color = '';
	scorePlayer1.innerText = 0;
	player1.score = 0;
	scorePlayer2.style.color = '';
	scorePlayer2.innerText = 0;
	player2.score = 0;
});

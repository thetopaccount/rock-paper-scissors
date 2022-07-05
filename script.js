const computerPlay = () => {
	let randomNumber = Math.floor((Math.random() * 100));

	// On division by 3, a number can have one of 3 remainders - either 0, 1, or 2.
	// Computer's answer will thus vary depending on what the remainder will be.
	switch (randomNumber % 3) {
		case 0:
			return "rock";
		case 1:
			return "paper";
		case 2:
			return "scissors";
		default:
			debugger;
			console.log("Sorry, an unexpected error occurred.");
			return "Error";
	}
}


function playRound (playerSelection, computerSelection) {
	if (playerSelection === computerSelection) {
		return ROUND_DRAW;
	}
	// By checking if it's a draw above, we've eliminated the possibilities RR, PP, and SS.
	// Check the remaining possibilities now:
	else {
		let finalResult;
		switch (playerSelection) {
			case "rock":
				// Possibilities: RP or RS
				if (computerSelection === "paper") {
					finalResult = RVP_LOSE;
					computerScore++;
				}
				else {
					finalResult = RVS_WIN;
					playerScore++;
				}
				break;
			case "paper":
				// Possibilities: PR or PS
				if (computerSelection === "rock") {
					finalResult = PVR_WIN;
					playerScore++;
				}
				else {
					finalResult = PVS_LOSE;
					computerScore++;
				}
				break;
			case "scissors":
				// Possibilities: SR or SP
				if (computerSelection === "rock") {
					finalResult = SVR_LOSE;
					computerScore++;
				}
				else {
					finalResult = SVP_WIN;
					playerScore++;
				}
				break;
			default:
				return INCORRECT_STRING_ENTERED;
		}
		return finalResult;
	}
}


function displayResult(result) {
	document.getElementById('result').textContent = result;
}


function updateScores() {
	document.getElementById('player-score').textContent = playerScore;
	document.getElementById('computer-score').textContent = computerScore;
}


// Global vars for keeping track of the score
let playerScore = 0;
let computerScore = 0;


// Messages for possible results:
const PROMPT_MESSAGE = "What's your weapon of choice?\n(Rock/Paper/Scissors)";
const INCORRECT_STRING_ENTERED = "Sorry! You entered something wrong. Please enter either 'rock', 'paper', or 'scissors'.";
const PLAYER_WON_GAME = "\nWe have a winner (and it's YOU)!\n ";
const PLAYER_LOST_GAME = "Better luck next time...";
const ROUND_DRAW = "It's an even fight - neither won.";
const RVP_LOSE = "Tough luck, you lose - paper eats rock :(";
const RVS_WIN = "Yay, you win - rock crushes scissors!";
const PVR_WIN = "Yay, you win - paper eats rock!";
const PVS_LOSE = "Tough luck, you lose - scissors cut paper :(";
const SVR_LOSE = "Tough luck, you lose - rock crushes scissors :(";
const SVP_WIN = "Yay, you win - scissors cut paper!";


let buttons = document.getElementById('selection-buttons');

buttons.addEventListener('click', (e) => {
	let result = playRound(e.target.id, computerPlay());
	displayResult(result);
	updateScores();
	
	if (playerScore === 5 || computerScore === 5) {
		buttons.replaceChildren();
		setTimeout(() => {
			document.getElementById('result').textContent = 
				(playerScore === 5 ? PLAYER_WON_GAME : PLAYER_LOST_GAME);
		}, 2000);
	}
});


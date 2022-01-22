const computerPlay = () => {
	// Take random number between 1 and 100, and round it off:
	let randomNumber = (Math.random() * 100).toFixed();

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
	// Make player's selection case-insensitive first:
	playerSelection ? playerSelection = playerSelection.toLowerCase() : '';

	// Check if it's a draw first:
	if (playerSelection === computerSelection) {
		return drawResult;
	}
	// By checking above, we've eliminated the possibilities RR, PP, and SS.
	// Check the remaining possibilities now:
	else {
		let finalResult;
		switch (playerSelection) {
			case "rock":
				computerSelection === "paper" ? finalResult = rockVsPaperResult : finalResult = rockVsScissorsResult;
				finalResult === rockVsPaperResult ? computerScore++ : playerScore++;
				break;
			case "paper":
				computerSelection === "rock" ? finalResult = paperVsRockResult : finalResult = paperVsScissorsResult;
				finalResult === paperVsRockResult ? playerScore++ : computerScore++;
				break;
			case "scissors":
				computerSelection === "rock" ? finalResult = scissorsVsRockResult : finalResult = scissorsVsPaperResult;
				finalResult === scissorsVsRockResult ? computerScore++ : playerScore++;
				break;
			default:
				return unrecognizedSelection;
		}
		return finalResult;
	}
}


function game() {
	let playerSelection;
	let computerSelection;
	let isGameWon = false;
	let currentRound = 1;

	// Setting the stage...
	console.clear();

	while (!isGameWon) {
		playerSelection = prompt("What's your weapon of choice? (Rock/Paper/Scissors)");
		computerSelection = computerPlay();

		console.group(`Round ${currentRound}`);
		console.log(playRound(playerSelection, computerSelection));
		console.log(`YOU ${playerScore} - ${computerScore} COM`);
		console.groupEnd();

		// First to win 5 rounds wins the game
		(playerScore === 5 || computerScore === 5) ? isGameWon = true : isGameWon = false;

		isGameWon && playerScore === 5 ? console.log("\nWe have a winner (and it's YOU)!\n ") : 
			isGameWon && computerScore === 5 ? console.error("Better luck next time...") : 
				isGameWon = false;

		currentRound++;
	}
}


// Global vars for keeping track of the score
let playerScore = 0;
let computerScore = 0;


// Messages for possible results:
const unrecognizedSelection = "Sorry! We do not recognize the object you entered. Please enter either 'rock', 'paper', or 'scissors'.";
const drawResult = "It's an even fight - neither won.";
const rockVsPaperResult = "Tough luck, you lose - paper eats rock :(";
const rockVsScissorsResult = "Yay, you win - rock crushes scissors!";
const paperVsRockResult = "Yay, you win - paper eats rock!";
const paperVsScissorsResult = "Tough luck, you lose - scissors cut paper :(";
const scissorsVsRockResult = "Tough luck, you lose - rock crushes scissors :(";
const scissorsVsPaperResult = "Yay, you win - scissors cut paper!";


// Play a game:
alert("Press (ctrl+shift+i) to open your console and start playing!");
game();
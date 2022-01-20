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


// Messages for possible result combinations:
const drawResult = "It's an even fight - neither won.";
const rockVsPaperResult = "Tough luck, you lose - paper eats rock :(";
const rockVsScissorsResult = "Yay, you win - rock crushes scissors!";
const paperVsRockResult = "Yay, you win - paper eats rock!";
const paperVsScissorsResult = "Tough luck, you lose - scissors cut paper :(";
const scissorsVsRockResult = "Tough luck, you lose - rock crushes scissors :(";
const scissorsVsPaperResult = "Yay, you win - scissors cut paper!";

// Message for wrong string entered:
const unrecognizedSelection = "Sorry! We do not recognize the object you entered.\nPlease enter either 'rock', 'paper', or 'scissors'.";


function playRound (playerSelection, computerSelection) {

	// Make player's selection case-insensitive first:
	playerSelection = playerSelection.toLowerCase();

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
				break;
			case "paper":
				computerSelection === "rock" ? finalResult = paperVsRockResult : finalResult = paperVsScissorsResult;
				break;
			case "scissors":
				computerSelection === "rock" ? finalResult = scissorsVsRockResult : finalResult = scissorsVsPaperResult;
				break;
			default:
				return unrecognizedSelection;
		}
		return finalResult;
	}
}


const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
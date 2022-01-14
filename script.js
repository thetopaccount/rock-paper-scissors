const computerPlay = () => {
	// Take random number between 1 and 100, and round it off.
	let randomNumber = (Math.random() * 100).toFixed();

	// On division by 3, a number can have one of 3 remainders - either 0, 1, or 2.
	// Computer's answer thus depends on what the remainder is.
	switch (randomNumber % 3) {
		case 0:
			return "Rock";
		case 1:
			return "Paper";
		case 2:
			return "Scissors";
		default:
			debugger;
			console.log("Sorry, an unexpected error occurred.");
			return "Error";
	}
}

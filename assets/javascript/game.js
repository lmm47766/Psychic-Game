
// Variables
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z'];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var currentGuesses=[];
var randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];

console.log(randomLetter);


function validate(guess){
	if (currentGuesses.indexOf(guess) != -1 ) {
		return guess
	}
	else {
		alert("already pressed");
	}
}


function rand(){
	 alphabet[Math.floor(Math.random() * alphabet.length)];
}


// Function for guessed letter
function guessedLetter() {
	validate(guess);
	var guess = document.getElementById("guess").value;
	console.log(guess);
	document.getElementById("guess").value="";


	//Looping until we hit 9 times
	if ( guessesLeft >= 1 ) {

			if (randomLetter === guess){
				wins++;
				currentGuesses=[""]
				guessesLeft=9;
				console.log(guessesLeft);
				rand();
				console.log
// Variables
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z'];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var currentGuesses=[];
var randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];

console.log(randomLetter);





function rand(){
	 alphabet[Math.floor(Math.random() * alphabet.length)];
}


// Function for guessed letter
function guessedLetter() {

	var guess = document.getElementById("guess").value;
	console.log(guess);
	document.getElementById("guess").value="";

//Checking for duplicate letters
if (currentGuesses.indexOf(guess) === -1 && guess.length === 1) {

		//Runs while number of guesses are greater than 9
		if ( guessesLeft >= 1 ) {

				//
				if (randomLetter === guess){
					guessesLeft=9;
					currentGuesses=[];
					wins++;
					console.log(guessesLeft);
					rand();
					console.log(randomLetter);
					document.getElementById("wins").innerHTML="Wins: " + wins;
					document.getElementById("losses").innerHTML="Losses: " + losses;
					document.getElementById("guessesLeft").innerHTML="Guesses Left: " + guessesLeft;
					document.getElementById("currentGuesses").innerHTML="Your Guesses so far: " + currentGuesses;			
					// return
				}
				else {
					guessesLeft--;
					currentGuesses.push(guess);
					// console.log(currentGuesses);
					document.getElementById("wins").innerHTML="Wins: " + wins;
					document.getElementById("losses").innerHTML="Losses: " + losses;
					document.getElementById("guessesLeft").innerHTML="Guesses Left: " + guessesLeft;
					document.getElementById("currentGuesses").innerHTML="Your Guesses so far: " + currentGuesses;
					// return
				} 
		}
		else {
			guessesLeft=9;
			losses++;
			currentGuesses= [];
			document.getElementById("wins").innerHTML="Wins: " + wins;
			document.getElementById("losses").innerHTML="Losses: " + losses;
			document.getElementById("guessesLeft").innerHTML="Guesses Left: " + guessesLeft;
			rand();
			document.getElementById("currentGuesses").innerHTML="Your Guesses so far: " + currentGuesses;		
		}


}
else {
	alert("Repeaded Letter or entered a more than one letter");
}

}


		
(randomLetter);
				document.getElementById("wins").innerHTML="Wins: " + wins;
				document.getElementById("losses").innerHTML="Losses: " + losses;
				document.getElementById("guessesLeft").innerHTML="Guesses Left: " + guessesLeft;
				document.getElementById("currentGuesses").innerHTML="Your Guesses so far: " + currentGuesses;			
				return
			}
			else {
				guessesLeft--;
				currentGuesses.push(guess);
				// console.log(currentGuesses);
				document.getElementById("wins").innerHTML="Wins: " + wins;
				document.getElementById("losses").innerHTML="Losses: " + losses;
				document.getElementById("guessesLeft").innerHTML="Guesses Left: " + guessesLeft;
				document.getElementById("currentGuesses").innerHTML="Your Guesses so far: " + currentGuesses;
				return
			} 
	}
	else {
		guessesLeft=9;
		losses++;
		document.getElementById("wins").innerHTML="Wins: " + wins;
		document.getElementById("losses").innerHTML="Losses: " + losses;
		document.getElementById("guessesLeft").innerHTML="Guesses Left: " + guessesLeft;
		currentGuesses= [""]
		rand();
		document.getElementById("currentGuesses").innerHTML="Your Guesses so far: " + currentGuesses;		
	}




}


		

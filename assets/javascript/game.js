
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


	//Looping until we hit 9 times
	for (var i = 0; i < guessesLeft ; i++) {

		if (randomLetter === guess){
			wins++;
			guessesLeft--;
			console.log(guessesLeft);
			rand();
			console.log(randomLetter);
			document.getElementById("wins").innerHTML="Wins: " + wins;
			document.getElementById("losses").innerHTML="Losses: " + losses;
			document.getElementById("guessesLeft").innerHTML="Guesses Left: " + guessesLeft;
			document.getElementById("currentGuesses").innerHTML="Your Guesses so far: " + currentGuesses;			
			return
		}
		else{
			losses++;
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


	if (wins > losses) {
		alert("YOU WIN");

	}
	else {
		alert("YOU LOOSE");
	}



}
		

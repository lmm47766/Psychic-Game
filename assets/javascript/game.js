
// Variables
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z'];
var wins = 0;
var losses=0;
var guessesLeft = 9;
var currentGuesses=[];
var randomletter = alphabet[Math.floor(Math.random() * alphabet.length)];


console.log(randomletter);



document.onkeyup = function (event) {
	var guess = event.key;
	document.getElementById("letter").innerHTML = guess;

	
	if (validate(guess) && newLetter(guess) ) {

		if (randomletter == guess ) {
			wins++;
			guessesLeft=9;
			currentGuesses=[];			
			document.getElementById("wins").innerHTML = wins;
			randomletter = alphabet[Math.floor(Math.random() * alphabet.length)];
			console.log(randomletter);
		}
		else if (guessesLeft > 0){
			guessesLeft--;
			currentGuesses.push(guess);
			document.getElementById("guessesLeft").innerHTML = guessesLeft;
			document.getElementById("currentGuesses").innerHTML= currentGuesses.join(" ");
		}
		else {
			losses++;
			guessesLeft=9;
			currentGuesses=[];
			document.getElementById("guessesLeft").innerHTML = guessesLeft;
			document.getElementById("losses").innerHTML = losses;
			document.getElementById("currentGuesses").innerHTML= currentGuesses.join(" ");
			randomletter = alphabet[Math.floor(Math.random() * alphabet.length)];
			console.log(randomletter);
		}

	}
	else if (validate(guess) === false){
		alert("invalid input");
	}
	else {
		alert("duplicated letter");

		
	}

}





//validating the input is a valid value
function validate(input) {
	var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z'];

    if( letters.indexOf(input) === -1 ) {
    	return false;
    }
    return true;

}

function newLetter(letter) {
	if ( currentGuesses.indexOf(letter) > -1  ) {
		return false;
	}
	else {
		return true;
	}
}





		

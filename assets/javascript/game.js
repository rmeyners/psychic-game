
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessedLetters = [];


function game() {
	guessesLeft = 10;
	guessedLetters = [];
}

document.onkeyup = function() {
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	console.log("User guess: " + userGuess);

	var computerGuess = alphabet[Math.floor(Math.random()*alphabet.length)];
	console.log("Computer guess: " + computerGuess);

	if (userGuess == computerGuess) {
		alert("You're A Psychic!")
		wins++;
		document.getElementById("wins").innerHTML = "Wins: " + wins;
		game();
	}else if (guessesLeft ==  0) {
		alert("No More Guesses! Try Again.")
		losses++;
		document.getElementById("losses").innerHTML = "Losses: " + losses;
		game();
	}if (userGuess !== computerGuess) {
		guessedLetters.push(userGuess);
		document.getElementById("lettersGuessed").innerHTML = "Guessed letters: " + guessedLetters;
		guessesLeft--;
		document.getElementById("guessesLeft").innerHTML = "Guesses left: " + guessesLeft;
		}
	}
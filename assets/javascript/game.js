
//list of words 
var words = [ "hodor", "targaryen","wildfire","dragonglass","direwolf","valardohaeris"];

//chose word from list at random
currentWord = words[Math.floor(Math.random() * words.length)];

//split word into independent characters within an array
var letters = currentWord.split([""]);

//create a empty array for blanks
var blanks =[];

//loop through the length of letters to create the same amount of blanks as current word
for (var i = 0; i < letters.length; i++) {

	blanks.push("-");
}
//write up the blanks to the screen first
document.getElementById( "blanks").innerHTML= blanks;


//define variables

//start with 0 wins
var wins = 0; 
//6 tries for every word
var guesses = 6;
//this is where the letters already pressed will be shown
var lettersGuessed = ""; 
//the win counter
var guessedCorrect = 0;
//logs key user pressed
var alreadyPressed = [];
 
// Captures Key Clicks and starts game
document.onkeyup = function(event) {

	// Determines which exact key was selected. Make it lowercase
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
        
			// loop through the array of letters in the answer to check if it matches
			for (var i = 0; i < letters.length; i++){

				//show positive game progress
				//if user guess matches letters array
				if (letters[i] === userGuess){
					//switch blanks into letter pressed
					blanks [i] = userGuess;
					//write it up within the ID blnks
					document.getElementById( "blanks").innerHTML= blanks;
					//win condition counter
					guessedCorrect + 1;
				}
			}
				
			//negative game progress, checks if element is not within the array
			if( letters.indexOf(userGuess)=== -1){
				//checks id the user already pressed a letter not within the array
				if( alreadyPressed.indexOf(userGuess)=== -1){
					//decrease guesses by one 
					guesses= guesses -1;
					document.getElementById( "guesses").innerHTML= guesses;
					//changes input to uppercase
					var lettersUp = userGuess.toUpperCase();
					//prints up the user guess to the screen 
					lettersGuessed = lettersGuessed + lettersUp + " ";
					document.getElementById( "lettersGuessed").innerHTML=lettersGuessed;	
				}
			}
			
			//win condition
			if (guessedCorrect === letters.length){

				wins = wins + 1;
				document.getElementById( "wins").innerHTML= wins;

				//print header on top of the game slot by changing div's css* style
					
				//change the image in the section to the left of game

				//play sound related to current array
			}

				// needs to be outside the loop 
				// lose codition 

			else if( guesses === 0 ){
				//reset all variables back to start point
				//break loop and go on to next word
				 location.reload();
			}
			
			alreadyPressed.push(userGuess);

}



</script>
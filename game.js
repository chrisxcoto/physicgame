console.log("myjavascriphasLoaded")

var userWin = 0;

var userLosses = 0;

var guessesLeft = 10;

var lettersGuessed = [];

var computerChoice = "abcdefghijklmnopqrstuvwxyz".split("");

var computerGuess = "";


// var $userWin = document.getElementById("userWin");
var $userWin = document.getElementById("userWin");
var $userLosses = document.getElementById("userLosses");
var $guessesLeft = document.getElementById("guessesLeft");
var $lettersGuessed = document.getElementById("lettersGuessed");

// This is my reset function

function resetGame() {

    guessesLeft = 10;
    lettersGuessed = [];

    var randomCompChoice = [Math.floor(Math.random() * computerChoice.length)];
    computerGuess = computerChoice[randomCompChoice];

 $userWin.innerText = userWin;
 $userLosses.innerText = userLosses;
 $guessesLeft.innerText = guessesLeft;
 $lettersGuessed.innerText = lettersGuessed;

    alert("A new game is starting");

}

document.onkeyup = function (event) {
    var userGuess = event.key;

    if (computerChoice.includes(userGuess)) {

        if (lettersGuessed.includes(userGuess)) {
            alert("Letter already guessed once")
            return false;
        }
        else if (userGuess === computerGuess) {

            userWin++;

            $userWin.innerText = userWin
            alert("You Win!");

            resetGame()

        }

        else {
            lettersGuessed.push(userGuess);
            $lettersGuessed.textContent = lettersGuessed.join(", ");
            guessesLeft--;
            $guessesLeft.innerText = guessesLeft;


        }

        if (guessesLeft === 0) {

            userLosses++;
            $userLosses.innerText = userLosses;
            alert("You lost!")

            resetGame();


        }

    }



}

resetGame();



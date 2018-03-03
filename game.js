var randomLetter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
    'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'z'];
var wins = 0;
var losses = 0;
var guesses = 10;
var usedLetters = [];
var bool = true;
//sets the random computer guess
var computerChoice = randomLetter[Math.floor(Math.random() * randomLetter.length)];
//shows how many guesses are left
document.getElementById("guesses").innerHTML = "Guesses Left:" + " " + guesses;

//Function to reset the variables
var reset = function() {
        guesses = 10;
        usedLetters = [];
        computerChoice = randomLetter[Math.floor(Math.random() * randomLetter.length)];
        console.log(computerChoice);
        document.getElementById("used").innerHTML = "Letters You've Guessed:" + " " + usedLetters;
        document.getElementById("guesses").innerHTML = "Guesses Left:" + " " + guesses;
    }
    //function to check if the userguess has not been used before
var validator = function(userGuess) {
    //if userguess is a usedletter not valid
    if (usedLetters.indexOf(userGuess) === -1) {
        return true;
    } else {
        return false;
    }
};


document.onkeyup = function(event) {
    userGuess = event.key;
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        if (userGuess === computerChoice) {
            alert("Gesus, you're psychic")
            wins++;
            document.getElementById("wins").innerHTML = "Wins:" + " " + wins;
            reset();
        } else {

            if (!validator(userGuess)) {
                alert("Letter has been chosen already, choose another");
            } else {
                guesses--;
                usedLetters.push(userGuess);
                document.getElementById("used").innerHTML = "Letters You've Guessed:" + " " + usedLetters;
                document.getElementById("guesses").innerHTML = "Guesses Left:" + " " + guesses;
                if (guesses < 1) {
                    alert("You must not be a psychic");
                    losses++;
                    document.getElementById("losses").innerHTML = "Losses:" + " " + losses;
                    reset();

                }
            }
        }

    } else {
        alert("Choose a letter between A-Z");
    }
}
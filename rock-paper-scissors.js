//Rock, Paper, Scissors

//Rock beats Scissors
//Scissors beats Paper
//Paper beats Rock

const choices = ['Rock', 'Paper', 'Scissors']

// getComputerChoice: randomly return either 'Rock', 'Paper', or 'Scissors'
function getComputerChoice() {
    let randomIndex = Math.floor(Math.random() * choices.length)
    console.log("Computer choice:", choices[randomIndex]);
    return choices[randomIndex] 
}

// getHumanChoice: prompt the user to enter either 'Rock', 'Paper', or 'Scissors'
function getHumanChoice(input){
    console.log(`human choice: ${input}, ${choices.indexOf(input)}`);
    return choices.indexOf(input);
}


// playGame: function that plays a 5 round game of Rock Paper Scissors
// reset the scores to 0
// loop over playRound 5 times
// return the higher score as the winner

function playGame() {
    // store human score
    let humanScore = 0

    // store computer score
    let computerScore = 0

    for (let round = 0; round < 5; round++) {
        playRound();
    }

    if (humanScore > computerScore) {
        return "Human wins!"
    } else if (computerScore > humanScore) {
        return "Computer wins!"
    } else {
        return "It's a tie!"
    }
}

// playRound: function that takes humanChoice and computerChoice as parameters
function playRound(computerScore, humanScore) {
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice(document.getElementById('getHumanChoice-input').value);
    if (humanChoice === computerChoice) {
        humanScore+=0
        computerScore+=0
    } else if (humanChoice == 0 && computerChoice == 2){
        humanScore+=1
    } else if (humanChoice == 1 && computerChoice == 0){
        humanScore+=1
    } else if (humanChoice == 2 && computerChoice == 1){
        humanScore+=1
    } else {
        computerScore+=1
    }
    //return humanScore, computerScore;
}
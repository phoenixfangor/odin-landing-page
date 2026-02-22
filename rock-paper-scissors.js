//Rock, Paper, Scissors

//Rock beats Scissors
//Scissors beats Paper
//Paper beats Rock

const choices = ['Rock', 'Paper', 'Scissors']
const choiceEmojis = {
    'Rock': '🪨',
    'Paper': '📄',
    'Scissors': '✂️'
};

// Game state
let humanScore = 0;
let computerScore = 0;
let currentRound = 0;

// getComputerChoice: randomly return either 'Rock', 'Paper', or 'Scissors'
function getComputerChoice() {
    let randomIndex = Math.floor(Math.random() * choices.length)
    console.log("Computer choice:", choices[randomIndex]);
    return choices[randomIndex] 
}

// playGame: function that plays a 5 round game of Rock Paper Scissors
function playGame() {
    // reset the scores to 0
    humanScore = 0;
    computerScore = 0;
    currentRound = 0;
    
    // Show dialog for first round
    showDialogForRound();
}

// Show dialog and wait for user input
function showDialogForRound() {
    const favDialog = document.getElementById("favDialog");
    favDialog.showModal();
}

// playRound: function that takes humanChoice and computerChoice as parameters
function playRound(humanChoice) {
    let computerChoice = getComputerChoice();
    let humanChoiceIndex = choices.indexOf(humanChoice);
    let computerChoiceIndex = choices.indexOf(computerChoice);

    outputBox.innerHTML += `${currentRound + 1}. `;
    console.log(`Round ${currentRound + 1} - Human choice: ${humanChoice}, Computer choice: ${computerChoice}`);

    if (humanChoiceIndex === computerChoiceIndex) {
        // Tie
        outputBox.innerHTML += (`[H: ${humanScore} | C: ${computerScore}] =TIE!= `);
    } else if (
        (humanChoiceIndex === 0 && computerChoiceIndex === 2) || // Rock beats Scissors
        (humanChoiceIndex === 1 && computerChoiceIndex === 0) || // Paper beats Rock
        (humanChoiceIndex === 2 && computerChoiceIndex === 1)    // Scissors beats Paper
    ) {
        humanScore++;
        outputBox.innerHTML += (`[H: ${humanScore} | C: ${computerScore}] =HUMAN!= `);
    } else {
        computerScore++;
        outputBox.innerHTML += (`[H: ${humanScore} | C: ${computerScore}] =COMPUTER!= `);
    }
    
    outputBox.innerHTML += ` (Human: ${choiceEmojis[humanChoice]}, Computer: ${choiceEmojis[computerChoice]})\n`;
    
    currentRound++;
    
    // Check if game is over
    if (currentRound < 5) {
        // Play next round
        showDialogForRound();
    } else {
        // Game over, announce winner
        if (humanScore > computerScore) {
            outputBox.innerHTML += "=== GAME OVER: Human wins! ===\n";
        } else if (computerScore > humanScore) {
            outputBox.innerHTML += "=== GAME OVER: Computer wins! ===\n";
        } else {
            outputBox.innerHTML += "=== GAME OVER: It's a tie! ===\n";
        }
    }
}
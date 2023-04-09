function getComputerChoice (){
    let options = {1: "rock", 2: "paper", 3: "scissors"};
    return options[Math.floor(Math.random() * 3) + 1];
}


let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection){
    if (playerSelection == computerSelection){
        console.log("Its a tie!");
    } else if (playerSelection == 'rock' && computerSelection == 'scissors'){
        console.log("You win! Rock beats scissors");
        playerScore++;
    } else if (playerSelection == 'paper' && computerSelection == 'rock'){
        console.log("You win! Paper beats Rock");
        playerScore++;
    } else if (playerSelection == 'scissors' && computerSelection == 'paper'){
        console.log("You win! Scissors beats Paper");
        playerScore++;
    } else if (playerSelection == 'scissors' && computerSelection == 'rock'){
        console.log("You lose. Rock beats Scissors");
        computerScore++;
    } else if (playerSelection == 'rock' && computerSelection == 'paper'){
        console.log("You lose. Paper beats Rock");
        computerScore++;
    } else if (playerSelection == 'paper' && computerSelection == 'scissors'){
        console.log("You lose. Scissors beats Paper");
        computerScore++;
    }

    return playerScore;
    return computerScore;

}

function game(){
    for (let i = 0; i < 5; i++){
        let playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
        
        while (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors'){
            playerSelection = prompt("Choose a valid input: rock, paper, or scissors").toLowerCase();
        }
    playRound(playerSelection, getComputerChoice());
    }


    if (playerScore > computerScore){
        console.log(`Congrats! You beat the computer ${playerScore} out of 5 rounds!`);
    } else if (playerScore === computerScore) {
        console.log("This game ended in a tie. How strange.");
    } else {
        console.log(`Oh no, the computer beat you ${computerScore} out of 5 rounds...`);
    }
}
game();
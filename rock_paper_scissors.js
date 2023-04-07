function getComputerChoice (_min, max){
    return Math.floor(Math.random() * max) + 1
}

let computerSelection = getComputerChoice(1, 3);
    if (computerSelection == 1){
        computerSelection = 'rock';
    } else if (computerSelection == 2){
        computerSelection = 'paper';
    } else if (computerSelection == 3){
        computerSelection = 'scissors';
    }

let playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();

function playRound(playerSelection, computerSelection){
    if (playerSelection == 'rock' && computerSelection == 'scissors'){
        return "You win! Rock beats Scissors";

    } else if (playerSelection == 'paper' && computerSelection == 'rock'){
        return "You win! Paper beats Rock";

    } else if (playerSelection == 'scissors' && computerSelection == 'paper'){
        return "You win! Scissors beats Paper";

    } else if (playerSelection == 'scissors' && computerSelection == 'rock'){
        return "You lose. Rock beats Scissors";

    } else if (playerSelection == 'rock' && computerSelection == 'paper'){
        return "You lose. Paper beats Rock";

    } else if (playerSelection == 'paper' && computerSelection == 'scissors'){
        return "You lose. Scissors beats Paper";
    } else {
        return "Its a tie!"
    }
}

console.log(playRound(playerSelection, computerSelection));
let computerChoice = '';

function getComputerChoice (min, max){
    return Math.floor(Math.random() * 3) + 1;
}

if (getComputerChoice === 1){
    computerChoice = 'Rock';
}
else if (getComputerChoice === 2){
    computerChoice = 'Paper';
}
else
    computerChoice = 'Scissors';
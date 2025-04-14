let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    const Choices = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * Choices.length);
    return Choices[random];
}

function playRound(playerSelection) {
    const computerSelection = getComputerChoice();

    if(playerSelection === computerSelection){
        console.log("Empate")
    }else if(
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ){
        console.log("vitoria do player")
        humanScore++
    }else{
        console.log("Vitoria do computador")
        computerScore++
    }

    score();

    if(humanScore === 5 || computerScore === 5){
        winner()
    }
}


const playerResult = document.querySelector(".player-score");
const computerResult = document.querySelector(".computer-score")

function score(){
    playerResult.textContent = `Player Score: ${humanScore}`;
    computerResult.textContent = `Computer Score ${computerScore}`;
}

function winner(){
    if(humanScore === 5){
        playerResult.textContent = "Player venceu"
    }else{
        computerResult.textContent = "Computador venceu"
    }
}

document.querySelector(".rock").addEventListener("click", () => playRound("rock"))
document.querySelector(".paper").addEventListener("click", () => playRound("paper"))
document.querySelector(".scissors").addEventListener("click", () => playRound("scissors"))
function getComputerChoice() {
    let numero = Math.floor(Math.random() * 3)

    if (numero === 0) {
        const rock = "rock"
        return rock
    } else if (numero === 1) {
        const paper = "paper"
        return paper
    } else if (numero === 2) {
        const scissors = "scissors"
        return scissors
    }
}
function getHumanChoice() {
    let choice = prompt("Rock or Paper or Scissors ")
    return choice
}

let humanScore = 0
let computerScore = 0

function playRound(getHumanChoice, getComputerChoice) {
    if (getHumanChoice === getComputerChoice) {
        console.log("You tied! " + getHumanChoice + " draws with " + getComputerChoice)
    } else if (getHumanChoice === "rock" && getComputerChoice === "paper") {
        console.log("You lose! "+ getHumanChoice + " loses to " + getComputerChoice)
        computerScore++
    } else if (getHumanChoice === "rock" && getComputerChoice === "scissors") {
        console.log("You win! " + getHumanChoice + " beats " + getComputerChoice)
        humanScore++
    } else if (getHumanChoice === "paper" && getComputerChoice === "rock") {
        console.log("You win! " + getHumanChoice + " beats " + getComputerChoice)
        humanScore++
    } else if (getHumanChoice === "paper" && getComputerChoice === "scissors") {
        console.log("You lose! " + getHumanChoice + " loses to " + getComputerChoice)
        computerScore++
    } else if (getHumanChoice === "scissors" && getComputerChoice === "paper") {
        console.log("You win! " + getHumanChoice + " beats " + getComputerChoice)
        humanScore++
    } else if (getHumanChoice === "scissors" && getComputerChoice === "rock") {
        console.log("You lose! " + getHumanChoice + " loses to " + getComputerChoice)
        computerScore++
    }
}


function playGame() {
    for (let i = 1; i <= 3; i++) {
        const humanSelection = getHumanChoice()
        const computerSelection = getComputerChoice()
       playRound(humanSelection, computerSelection)
    }
    
}

playGame()

console.log("Human Score = " + humanScore)
console.log("Computer Score = " + computerScore)
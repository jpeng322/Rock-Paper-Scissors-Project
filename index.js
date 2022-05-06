// let options = ["Rock", "Paper", "Scissor"]

// function computerPlay(a) {
//     console.log(a[(Math.floor(Math.random() * 3))])
// }

// computerPlay(options)

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection === "rock" && computerSelection === "scissor") {
        return "Congratulations! You Won"
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You Lose! Paper beats Rock"
    } else if (playerSelection === "rock" && computerSelection === "rock") {
        return "You tied! Try again!"
    } else if (playerSelection === "paper" && computerSelection === "scissor") {
        return "You Lose! Scissor beats Paper"
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You Lose! Paper beats Rock"
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        return "You tied! Try again!"
    } else if (playerSelection === "scissor" && computerSelection === "paper") {
        return "You Lose! Paper beats Rock"
    } else if (playerSelection === "scissor" && computerSelection === "scissor") {
        return "You tied! Try again!"
    } else {
        // (playerSelection === "scissor" && computerSelection === "rock")
        return "You Lose! Paper beats Scissor"
    }
}


console.log(playRound("papeR", "SciSSor"))
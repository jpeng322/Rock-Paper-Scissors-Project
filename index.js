

// function playRound(playerSelection, computerSelection) {
//     playerSelection = playerSelection.toLowerCase();
//     computerSelection = computerSelection.toLowerCase();
//     if (playerSelection === "rock" && computerSelection === "scissor") {
//         return "Congratulations! You Won"
//     } else if (playerSelection === "rock" && computerSelection === "paper") {
//         return "You Lose! Paper beats Rock"
//     } else if (playerSelection === "rock" && computerSelection === "rock") {
//         return "You tied! Try again!"
//     } else if (playerSelection === "paper" && computerSelection === "scissor") {
//         return "You Lose! Scissor beats Paper"
//     } else if (playerSelection === "paper" && computerSelection === "rock") {
//         return "You Lose! Paper beats Rock"
//     } else if (playerSelection === "paper" && computerSelection === "paper") {
//         return "You tied! Try again!"
//     } else if (playerSelection === "scissor" && computerSelection === "paper") {
//         return "You Lose! Paper beats Rock"
//     } else if (playerSelection === "scissor" && computerSelection === "scissor") {
//         return "You tied! Try again!"
//     } else {
//         // (playerSelection === "scissor" && computerSelection === "rock")
//         return "You Lose! Paper beats Scissor"
//     }
// }

// function game(result) {
//     for (i = 0; i < 1; i++) {
//         if (result === prompt("Congratulations! You Won")) {
//             playerScore += 1
//         } else if (result === prompt("You tied! Try again!")) {
//             playerScore += 0
//         } else { computerScore += 1 }
//     } return `${playerScore} : ${computerScore}`
// }

// New game()
// function game() {
//     for (i = 0; i < 2; i++) {
//         if (playerSelection === "scissor") {
//             return "you picked scissor"
//         } else { return "you did not pick scissor" }
//     }
// }

// let finalScore = ""
// let playerSelection = prompt("What is your pick?")
// let options = ["Rock", "Paper", "Scissor"]

// function computerPlay(a) {
//     (a[(Math.floor(Math.random() * 3))])
// }

// let ComputerSelection = computerPlay(options)

// function game() {
//     for (i = 0; i < 1; i++) {
//         function playRound(playerSelection, computerSelection) {
//             playerSelection = playerSelection.toLowerCase();
//             computerSelection = computerSelection.toLowerCase();
//             if (playerSelection === "rock" && computerSelection === "scissor") {
//                 playerScore += 1
//                 return `Congratulations! You Won. The score is now ${playerScore} : ${computerScore}`
//             } else if (playerSelection === "rock" && computerSelection === "paper") {
//                 computerScore += 1
//                 return `You Lose! Scissor beats Paper. The score is now ${playerScore} : ${computerScore}`
//             } else if (playerSelection === "rock" && computerSelection === "rock") {
//                 return `You tied! Try again! The score is now ${playerScore} : ${computerScore}`
//             } else if (playerSelection === "paper" && computerSelection === "scissor") {
//                 computerScore += 1
//                 return `You Lose! Scissor beats Paper. The score is now ${playerScore} : ${computerScore}`
//             } else if (playerSelection === "paper" && computerSelection === "rock") {
//                 playerScore += 1
//                 return `Congratulations! You Won. The score is now ${playerScore} : ${computerScore}`
//             } else if (playerSelection === "paper" && computerSelection === "paper") {
//                 return `You tied! Try again! The score is now ${playerScore} : ${computerScore}`
//             } else if (playerSelection === "scissor" && computerSelection === "paper") {
//                 playerScore += 1
//                 return `Congratulations! You Won. The score is now ${playerScore} : ${computerScore}`
//             } else if (playerSelection === "scissor" && computerSelection === "scissor") {
//                 return `You tied! Try again! The score is now ${playerScore} : ${computerScore} `
//             } else {
//                 // (playerSelection === "scissor" && computerSelection === "rock")
//                 computerScore += 1
//                 return `You Lose! Scissor beats Paper. The score is now ${playerScore} : ${computerScore}`
//             }
//         }
//     }
// }
// let playerSelection = prompt("What is your pick?");
// const options = ["Rock", "Paper", "Scissor"]
function computerPlay(a) {
    return (a[(Math.floor(Math.random() * 3))])

}
// console.log(computerPlay(options))




// function game() {
//     let finalRes = ""
//     for (i = 0; i < 5; i++) {
//         const playerAns = prompt("What is your pick?").toLowerCase()
//         console.log(playerAns)
//         const options = ["Rock", "Paper", "Scissor"]
//         const computerAns = computerPlay(options).toLowerCase()
//         console.log(computerAns)
//         playRound(playerAns, computerAns)
//     }
//     if (playerScore > computerScore) {
//         finalRes = "Congratulations, you are the winner!"
//     } else if (playerScore < computerScore) {
//         finalRes = "Sorry, you are the loser!"
//     } else {
//         finalRes = "You tied! Try again!"
//     }
//     return `The final score is ${playerScore} : ${computerScore}! ${finalRes}`
// }
// console.log(game())
// console.log(playRound("papeR", "SciSSor"))

const container = document.querySelector("#container")
const rockBtn = document.createElement('button')
rockBtn.textContent = "Rock Button"
container.append(rockBtn)

const paperBtn = document.createElement('button')
paperBtn.textContent = "Paper Button"
container.append(paperBtn)

const scissBtn = document.createElement('button')
scissBtn.textContent = "Scissor Button"
container.append(scissBtn)

const options = ["Rock", "Paper", "Scissor"]
let computerAns = computerPlay(options).toLowerCase()

rockBtn.addEventListener('click', function () {
    playRound("rock", computerAns)
    console.log(computerAns)
    checkRes()
    computerAns = computerPlay(options).toLowerCase()
})

paperBtn.addEventListener('click', function () {
    playRound("paper", computerAns)
    console.log(computerAns)
    checkRes()
    computerAns = computerPlay(options).toLowerCase()
})


scissBtn.addEventListener('click', function () {
    playRound("scissor", computerAns)
    console.log(computerAns)
    // console.log(playerSelection)
    // console.log(computerSelection)
    checkRes()
    computerAns = computerPlay(options).toLowerCase()
})

let resultDiv = document.createElement('div')
container.appendChild(resultDiv)

resultDiv.textContent = ""

let playerScore = 0
let computerScore = 0

function playRound(playerSelection, computerSelection) {
    // playerSelection = playerSelection.toLowerCase();
    // computerSelection = computerSelection.toLowerCase();
    // if (playerScore === 5) {
    //     return resultDiv.textContent = `Congratulations, you are the winner! The final score is ${playerScore} : ${computerScore}!`
    // } else if (computerScore === 5) {
    //     return resultDiv.textContent = `Sorry, you are the loser! The final score is ${playerScore} : ${computerScore}!`
    // }
    // else {
    if (playerSelection === "rock" && computerSelection === "scissor") {
        playerScore += 1
        resultDiv.textContent = (`Congratulations! You Won. The score is now ${playerScore} : ${computerScore}`)
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore += 1
        resultDiv.textContent = (`You Lose! Paper beats Rock. The score is now ${playerScore} : ${computerScore}`)
    } else if (playerSelection === "rock" && computerSelection === "rock") {
        resultDiv.textContent = (`You tied! Try again! The score is now ${playerScore} : ${computerScore}`)
    } else if (playerSelection === "paper" && computerSelection === "scissor") {
        computerScore += 1
        resultDiv.textContent = (`You Lose! Scissor beats Paper. The score is now ${playerScore} : ${computerScore}`)
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore += 1
        resultDiv.textContent = (`Congratulations! You Won. The score is now ${playerScore} : ${computerScore}`)
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        resultDiv.textContent = (`You tied! Try again! The score is now ${playerScore} : ${computerScore}`)
    } else if (playerSelection === "scissor" && computerSelection === "scissor") {
        playerScore += 1
        resultDiv.textContent = (`Congratulations! You Won. The score is now ${playerScore} : ${computerScore}`)
    } else if (playerSelection === "scissor" && computerSelection === "scissor") {
        resultDiv.textContent = (`You tied! Try again! The score is now ${playerScore} : ${computerScore} `)
    }
    // (playerSelection === "scissor" && computerSelection === "rock")
    else {
        computerScore += 1
        resultDiv.textContent = (`You Lose! Rock beats Scissor. The score is now ${playerScore} : ${computerScore}`)
    }
}
// }

function checkRes() {
    if (playerScore === 5) {
        return resultDiv.textContent = `Congratulations, you are the winner! The final score is ${playerScore} : ${computerScore}!`
    } else if (computerScore === 5) {
        return resultDiv.textContent = `Sorry, you are the loser! The final score is ${playerScore} : ${computerScore}!`
    }
}
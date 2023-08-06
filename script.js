// DOM

const rock = document.getElementById("rock-el")
const paper = document.getElementById("paper-el")
const scissors = document.getElementById("scissors-el")
const result = document.getElementById("result-el")
const pScore = document.getElementById("pscore-el")
const cScore = document.getElementById("cscore-el")


// event listeners

rock.addEventListener("click", function(){
    playerChoice("Rock")
    updateScore()
    updateMessage()
})

paper.addEventListener("click", function(){
    playerChoice("Paper")
    updateScore()
    updateMessage()
})

scissors.addEventListener("click", function(){
    playerChoice("Scissors")
    updateScore()
    updateMessage()
})


// keep track of scores

let playerScore = 0
let computerScore = 0
const options = ["Rock", "Paper", "Scissors"]


// functions


function computerChoice (){
    let choice =  Math.floor(Math.random() * options.length);
    return options[choice];
}


function playerChoice (playerSelection){

    const computerSelection = computerChoice()

    if (
        (playerSelection === "Rock" && computerSelection === "Scissors") || 
        (playerSelection === "Paper" && computerSelection === "Rock") ||
        (playerSelection === "Scissors" && computerSelection === "Paper")
        ){
            alert("You win this round!");
            playerScore ++
        }

    if (
        (computerSelection === "Rock" && playerSelection === "Scissors") ||
        (computerSelection=== "Paper" && playerSelection === "Rock") ||
        (computerSelection === "Scissors" && playerSelection === "Paper")
        ){
            alert("You lose!");
            computerScore ++

        }

    if (playerSelection === computerSelection){
        alert("Its a Draw!");

    }
}

function updateScore (){
    pScore.textContent = playerScore
    cScore.textContent = computerScore
}



function updateMessage (){
    if (playerScore === 5){
        alert("You Win!")
        endGame()
    } else if (computerScore === 5){
        alert("You Win")
        endGame()
    }

}


function endGame (){
    rock.disabled = "true"
    paper.disabled = "true"
    scissors.disabled = "true"
}

    

    





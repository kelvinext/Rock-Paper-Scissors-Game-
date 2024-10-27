let userScore = 0;
let computerScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score");

const drawGame = () => {
    console.log("Game was draw");
    msg.innerText = "Game was draw! Play again";
    msg.style.backgroundColor = "black";
    userScore = 0;
    userScorePara.innerText = userScore;
    computerScore = 0;
    computerScorePara.innerText = computerScore;
}


const genComputerChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
}

const showWinner = (userWin,userChoice,computerChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("you win");
        msg.innerText = `You win your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        computerScore++;
        computerScorePara.innerText = computerScore;
        console.log("you lose");
        msg.innerText = `You lose ${computerChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}


const playGame = (userChoice) => {
    console.log("user choice : ", userChoice);
    const computerChoice = genComputerChoice();
    console.log("computer choice : ", computerChoice);
    if (userChoice == computerChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice === 'rock') {
            // scissors, paper
            userWin = computerChoice === 'paper' ? false : true;
        }
        else if (userChoice === 'paper') {
            // scissors,rock
            userWin = computerChoice === 'scissor' ? false : true;
        }
        else {
            // rock , paper
            userWin = computerChoice === 'rock' ? false : true;
        }
        showWinner(userWin,userChoice,computerChoice);
    }
}


choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});

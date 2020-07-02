//declare game game
const game = () => {
    let pScore = 0;
    let cScore = 0;
    const playerScore = document.querySelector("#pScore");
    const computerScore = document.querySelector("#cScore");
    let computerHand = document.querySelector(".computer-hand");
    let playerHand = document.querySelector(".player-hand");


    //add computer options and player options
    const playGame = () => {
        const options = document.querySelectorAll(".option");
        const computerOptions = ["spock", "paper", "rock", "lizard", "scissors"];
        let playerChoice = " ";


        options.forEach((option) => {
            option.addEventListener("click", function () {
                let computerNumber = Math.floor(Math.random() * 5);
                let computerChoice = computerOptions[computerNumber];
                var playerChoice = option.id;
                compareChoice(playerChoice, computerChoice);
            });
        });
    };
    //reset game
    const restartGame = () => {
        let restart = document.querySelector("#restart-btn");
        restart.addEventListener("click", function () {
            pScore = 0;
            cScore = 0;
            playerScore.innerText = "0";
            computerScore.innerText = "0";
            playerHand.src = `assets/img/rock.png`;
            computerHand.src = `assets/img/rock.png`;
        });
    };

    //use a function to compare player and computer choice
    const compareChoice = (playerChoice, computerChoice) => {
        const result = document.querySelector(".result-text");
        //update score and img function
        const updateScore = () => {
            playerScore.textContent = pScore;
            computerScore.textContent = cScore;
        };
        const updateImgChoice = () => {
            playerHand.src = `assets/img/${playerChoice}.png`;
            computerHand.src = `assets/img/${computerChoice}.png`;
        };
        const updateInnerTextWin = () => {
            result.innerText = "You win!";
        };
        const updateInnerTextLose = () => {
            result.innerText = "You lose!";
        };

        //checking for a tie
        if (playerChoice === computerChoice) {
            result.innerText = "It's a tie!";
            updateImgChoice();
            //check for spock
        } else if (playerChoice === "spock") {
            if (computerChoice === "rock" || computerChoice === "scissors") {
                updateInnerTextWin();
                updateImgChoice();
                pScore++;
                updateScore();
            } else {
                updateInnerTextLose();
                updateImgChoice();
                cScore++;
                updateScore();

            }
            //check for paper
        } else if (playerChoice === "paper") {
            if (computerChoice === "rock" || computerChoice === "spock") {
                updateInnerTextWin();
                updateImgChoice();
                pScore++;
                updateScore();
            } else {
                updateInnerTextLose();
                updateImgChoice();
                cScore++;
                updateScore();
            }
            //check for rock
        } else if (playerChoice === "rock") {
            if (computerChoice === "scissors" || computerChoice === "lizard") {
                updateInnerTextWin();
                updateImgChoice();
                pScore++;
                updateScore();
            } else {
                updateInnerTextLose();
                updateImgChoice();
                cScore++;
                updateScore();
            }
            //check for lizard
        } else if (playerChoice === "lizard") {
            if (computerChoice === "spock" || computerChoice === "paper") {
                updateInnerTextWin();
                updateImgChoice();
                pScore++;
                updateScore();
            } else {
                updateInnerTextLose();
                updateImgChoice();
                cScore++;
                updateScore();
            }
            //check for scissors
        } else if (playerChoice === "scissors") {
            if (computerChoice === "paper" || computerChoice === "lizard") {
                updateInnerTextWin();
                updateImgChoice();
                pScore++;
                updateScore();
            } else {
                updateInnerTextLose();
                updateImgChoice();
                cScore++;
                updateScore();
            }
        }
    };
    restartGame();
    playGame();

};

game();
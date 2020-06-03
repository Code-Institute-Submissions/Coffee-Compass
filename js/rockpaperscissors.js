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
        let playerChoice = option.id;
        compareChoice(playerChoice, computerChoice);
      });
    });
  };
//reset game
const restartGame=()=>{
    let restart = document.querySelector("#restart-btn");
    restart.addEventListener("click", function(){
        pScore = 0;
        cScore = 0;
        playerScore.innerText = "0";
        computerScore.innerText = "0";
        playerHand.src = `assets/img/spock.png`
      computerHand.src = `assets/img/lizard.png`
    })
}
//update score
  const updateScore = () => {
    

    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  }
  //use a function to compare player and computer choice
  const compareChoice = (playerChoice, computerChoice) => {
    const result = document.querySelector(".result-text");

    //checking for a tie
    if (playerChoice === computerChoice) {
      result.innerText = "It's a tie!"
      playerHand.src = `assets/img/${playerChoice}.png`
      computerHand.src = `assets/img/${computerChoice}.png`
      //check for spock
    } else if (playerChoice === "spock") {
      if (computerChoice === "rock" || computerChoice === "scissors") {
        result.innerText = "You win!";
        playerHand.src = `assets/img/${playerChoice}.png`
        computerHand.src = `assets/img/${computerChoice}.png`
        pScore++
        updateScore()
      } else {
        result.innerText = "You lose!";
        playerHand.src = `assets/img/${playerChoice}.png`
        computerHand.src = `assets/img/${computerChoice}.png`
        cScore++
        updateScore()

      }
      //check for paper
    } else if (playerChoice === "paper") {
      if (computerChoice === "rock" || computerChoice === "spock") {
        result.innerText = "You win!"
        playerHand.src = `assets/img/${playerChoice}.png`
        computerHand.src = `assets/img/${computerChoice}.png`
        pScore++
        updateScore()
      } else {
        result.innerText = "You lose!"
        playerHand.src = `assets/img/${playerChoice}.png`
        computerHand.src = `assets/img/${computerChoice}.png`
        cScore++
        updateScore()
      }
      //check for rock
    } else if (playerChoice === "rock") {
      if (computerChoice === "scissors" || computerChoice === "lizard") {
        result.innerText = "You win!"
        playerHand.src = `assets/img/${playerChoice}.png`
        computerHand.src = `assets/img/${computerChoice}.png`
        pScore++
        updateScore()
      } else {
        result.innerText = "You lose!"
        playerHand.src = `assets/img/${playerChoice}.png`
        computerHand.src = `assets/img/${computerChoice}.png`
        cScore++
        updateScore()
      }
      //check for lizard
    } else if (playerChoice === "lizard") {
      if (computerChoice === "spock" || computerChoice === "paper") {
        result.innerText = "You win!"
        playerHand.src = `assets/img/${playerChoice}.png`
        computerHand.src = `assets/img/${computerChoice}.png`
        pScore++
        updateScore()
      } else {
        result.innerText = "You lose!"
        playerHand.src = `assets/img/${playerChoice}.png`
        computerHand.src = `assets/img/${computerChoice}.png`
        cScore++
        updateScore()
      }
      //check for scissors
    } else if (playerChoice === "scissors") {
      if (computerChoice === "paper" || computerChoice === "lizard") {
        result.innerText = "You win!"
        playerHand.src = `assets/img/${playerChoice}.png`
        computerHand.src = `assets/img/${computerChoice}.png`
        pScore++
        updateScore()
      } else {
        result.innerText = "You lose!"
        playerHand.src = `assets/img/${playerChoice}.png`
        computerHand.src = `assets/img/${computerChoice}.png`
        cScore++
        updateScore()
      }
    }
  }
  restartGame();
  playGame();
  
};

game();
//declare game game
const game = () => {
  let pScore = 0;
  let cScore = 0;


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
  //use a function to compare player and computer choice
  const compareChoice = (playerChoice, computerChoice) => {
    const result = document.querySelector(".result-text");
    //checking for a tie
    if (playerChoice === computerChoice) {
      console.log("It is a tie!");
      //check for spock
    } else if (playerChoice === "spock") {
      if (computerChoice === "rock" || computerChoice === "scissors") {
        console.log(`player wins: ${playerChoice} computer loses:${computerChoice}`)
      } else {
        console.log(`player loses: ${playerChoice} computer wins:${computerChoice}`)
      }
      //check for paper
    } else if (playerChoice === "paper") {
      if (computerChoice === "rock" || computerChoice === "spock") {
        console.log(`player wins: ${playerChoice} computer loses:${computerChoice}`)
      } else {
        console.log(`player loses: ${playerChoice} computer wins:${computerChoice}`)
      }
      //check for rock
    } else if (playerChoice === "rock") {
      if (computerChoice === "scissors" || computerChoice === "lizard") {
        console.log(`player wins: ${playerChoice} computer loses:${computerChoice}`)
      } else {
        console.log(`player loses: ${playerChoice} computer wins:${computerChoice}`)
      }
      //check for lizard
    } else if (playerChoice === "lizard") {
      if (computerChoice === "spock" || computerChoice === "paper") {
        console.log(`player wins: ${playerChoice} computer loses:${computerChoice}`)
      } else {
        console.log(`player loses: ${playerChoice} computer wins:${computerChoice}`)
      }
      //check for scissors
    } else if (playerChoice === "scissors") {
      if (computerChoice === "paper" || computerChoice === "lizard") {
        console.log(`player wins: ${playerChoice} computer loses:${computerChoice}`)
      } else {
        console.log(`player loses: ${playerChoice} computer wins:${computerChoice}`)
      }
    }
  }

  playGame();
};

game();
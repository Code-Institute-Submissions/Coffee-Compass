//declare game game
const game = () => {
  let pScore = 0;
  let cScore = 0;


  //add computer options and player options
  const playGame = () => {
    const options = document.querySelectorAll(".option");
    const computerOptions = ["spock", "paper", "rock", "lizard", "scissors"];
    let playerChoice = " ";

    options.forEach((option)=>{
        option.addEventListener("click", function(){
            computerNumber = Math.floor(Math.random()*5);
            computerChoice = computerOptions[computerNumber];
            playerChoice = option.id;
            compareChoice(playerChoice,computerChoice);
        });
    });
  };
  //use a function to compare player and computer choice
 const computerChoice = (playerChoice,computerChoice) =>{
     const result = document.querySelector(".result-text");
//checking for a tie
if (playerChoice === computerChoice){
    console.log("It is a tie!");

}
//check for spock
else if (playerChoice === "spock")
//check for paper

//check for rock

//check for lizard

//check for scissors



 }
playGame();
};

game();
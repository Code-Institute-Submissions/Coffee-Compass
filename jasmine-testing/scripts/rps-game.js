//check if rock beats lizard and scissors
function choice(a, b) {
    if (a === "rock" && b === "lizard" || "scissors") {
        return true;
        //check if lizard beats spock and paper
    } else if (a === "lizard" && b === "spock" || "paper") {
        return true;
        //check if spock beats rock and scissors
    } else if (a === "spock" && b === "rock" || "scissors") {
        return true;
        //check if scissors beats paper and lizard
    } else if (a === "scissors" && b === "paper" || "lizard") {
        return true;
        //check if paper beats rock and spock
    } else if (a === "scissors" && b === "rock" || "spock") {
        return true;
    } else {
        return false;
    }
};
//check if both values text and NOT numbers
function choiceNum(a, b) {
    if (typeof (a) == "number" || typeof (b) == "number") {
        alert("error!")
    } else {
        return true;
    };
};
//check if both values are filled out
function choiceBlank(a, b) {
    if (a == "" || b == "" || a == "" && b == "") {
        alert("error!");
    } else{
        return choiceBlank;
    }
}
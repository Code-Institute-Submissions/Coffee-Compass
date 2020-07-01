
//Rock beats Lizard & Scissors
describe("Rock beats Lizard & Scissors", function(){
    describe("Rock beats Lizard", function(){
        it("should return true", function(){
            expect(choice("rock", "lizard")).toBe(true)
        });
    });
     describe("Rock beats Scissors", function(){
        it("should return true", function(){
            expect(choice("rock", "scissors")).toBe(true)
        });
    });
    
});
//Lizard beats Spock & Paper
describe("Lizard beats Spock & Paper", function(){
    describe("Lizard beats Spock", function(){
        it("should return true", function(){
            expect(choice("lizard", "spock")).toBe(true)
        });
    });
     describe("Lizard beats Paper", function(){
        it("should return true", function(){
            expect(choice("lizard", "paper")).toBe(true)
        });
    });
});
//Spock beats Rock & Scissors
describe("Spock beats Rock & Scissors", function(){
    describe("Spock beats Rock", function(){
        it("should return true", function(){
            expect(choice("spock", "rock")).toBe(true)
        });
    });
     describe("Spock beats Scissors", function(){
        it("should return true", function(){
            expect(choice("spock", "scissors")).toBe(true)
        });
    });
});
//Scissors beats Paper & Lizard
describe("Scissors beats Paper & Lizard", function(){
    describe("Scissors beats Paper", function(){
        it("should return true", function(){
            expect(choice("scissors", "paper")).toBe(true)
        });
    });
     describe("Scissors beats Lizard", function(){
        it("should return true", function(){
            expect(choice("scissors", "lizard")).toBe(true)
        });
    });
});
//Paper beats Rock & Spock
describe("Paper beats Rock & Spock", function(){
    describe("Paper beats Rock", function(){
        it("should return true", function(){
            expect(choice("paper", "rock")).toBe(true)
        });
    });
     describe("Paper beats Spock", function(){
        it("should return true", function(){
            expect(choice("paper", "spock")).toBe(true)
        });
    });
});
//return an error if both values are not filled out
describe("Throw return error if either a or b value is left blank", function(){
    describe("a is left blank", function(){
        it("should return an error if we don't supply two values", function(){
            spyOn(window, "alert")
            choiceBlank("","rock");
            expect(window.alert).toHaveBeenCalledWith("error!");
        });
    });
     describe("b is left blank", function(){
        it("should return an error if we don't supply two values", function(){
            spyOn(window, "alert");
            choiceBlank("rock","")
            expect(window.alert).toHaveBeenCalledWith("error!");
        });
    });
});
//Throw return error if either a or b value is a number
describe("Throw return error if either a or b value is a number", function(){
    describe("a is a number", function(){
        it("should return an error if a is a number", function(){
            spyOn(window, "alert");
            choiceNum(1, "rock")
            expect(window.alert).toHaveBeenCalledWith("error!"); 
        });
    });
     describe("b is a number", function(){
        it("should return an error if b is a number", function(){
             spyOn(window, "alert");
            choiceNum("rock", 1)
            expect(window.alert).toHaveBeenCalledWith("error!"); 
        });
    });
});
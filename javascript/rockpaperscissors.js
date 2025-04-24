console.log("Hello World!");
console.log("Welcome to Rock, Paper, Scissors!");

//function getHumanChoice() {
 //   const input = prompt("Enter your choice (rock, paper, scissors): ");
 //   input != "rock" || input != "paper" || input != "scissors" ? console.log("Invalid choice! Please try again.") :
 //   console.log('please start over!');
 //      console.log('you chose ' + input + '.');

//} //getHumanChoice()

function  getComputerChoice() {
        const computerChoice = ["rock", "paper", "scissors"];
        const randomchoice = computerChoice.indexOf Math.floor(Math.random());
        console.log('The computer chose ' + randomchoice + '.');
        
} getComputerChoice()

/*function Start(getComputerChoice, getHumanChoice) {
    console.log('You chose ' + getHumanChoice.input + 'and the computer chose ' + getComputerChoice.randomchoice + '.');
        getHumanChoice.input == getComputerChoice.randomchoice ?  console.log("It's a tie!") :
        getHumanChoice.input == "rock" && getComputerChoice.randomchoice == "scissors" ? console.log('You win! Rock crushes Scissors!') :
        getHumanChoice.input == "paper" && getComputerChoice.randomchoice == "rock" ? console.log('You win! Paper covers Rock!') :
        getHumanChoice == "scissors" && getComputerChoice.randomchoice == "paper" ? console.log('You win! Scissors cut Paper!') :
        console.log('You lose! ' + getComputerChoice.randomchoice + ' beats ' + getHumanChoice.input + '!');
        return console.log("Thanks for playing!");

}
 // This is a simple Rock, Paper, Scissors game
// where the user plays against the computer.
// The user can choose Rock, Paper, or Scissors, and the computer will randomly choose one of the three options.

Start(getComputerChoice(), getHumanChoice());
*/

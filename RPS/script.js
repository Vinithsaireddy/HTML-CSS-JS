let user = 0;
let computer = 0;
let user_score = document.querySelector("#user-score");
let computer_score = document.querySelector("#computer-score");
let win = document.querySelector("#msg");
let reset = document.querySelector("#reset");

// Initially hide the reset button
reset.style.visibility = "hidden";

// Function to reset the game
const resetGame = () => {
    user = 0;
    computer = 0;
    user_score.innerText = user;
    computer_score.innerText = computer;
    win.innerText = "Let's Play!";
    document.querySelector("#msg").style.backgroundColor = "black";
    reset.style.visibility = "hidden";
};

// Event listener for reset button click
reset.addEventListener("click", resetGame);

let choices = document.querySelectorAll(".choice");

// Function to randomly select computer's choice
let compchoice = () => {
    const options = ["rock", "paper", "scissors"];
    let i = Math.floor(Math.random() * 3);
    return options[i];
};

// Function to compare user choice with computer choice
let comparison = (userchoice) => {
    console.log("User's choice =", userchoice);
    let computerChoice = compchoice();
    console.log("Computer's choice =", computerChoice);
    
    if (userchoice === computerChoice) {
        console.log("=====DRAW=====");
        win.innerText = "DRAW";
    } else if (userchoice === "rock") {
        if (computerChoice === "paper") {
            console.log("Computer wins(", computerChoice, ")");
            computer += 1;
            win.innerText = "Computer won!!";
        } else {
            console.log("Computer loses(", computerChoice, ")");
            user += 1;
            win.innerText = "You won!!";
        }
    } else if (userchoice === "paper") {
        if (computerChoice === "rock") {
            console.log("Computer loses(", computerChoice, ")");
            user += 1;
            win.innerText = "You won!!";
        } else {
            console.log("Computer wins(", computerChoice, ")");
            computer += 1;
            win.innerText = "Computer won!!";
        }
    } else if (userchoice === "scissors") {
        if (computerChoice === "paper") {
            console.log("Computer loses(", computerChoice, ")");
            user += 1;
            win.innerText = "You won!!";
        } else {
            console.log("Computer wins(", computerChoice, ")");
            computer += 1;
            win.innerText = "Computer won!!";
        }
    }

    console.log("User's score =", user);
    console.log("Computer's score =", computer);
    user_score.innerText = user;
    computer_score.innerText = computer;

    if (user === 5) {
        win.innerText = "You Have Won The Match";
        document.querySelector("#msg").style.backgroundColor = "green";
        reset.style.visibility = "visible";
    } else if (computer === 5) {
        win.innerText = "Computer Has Won The Match";
        document.querySelector("#msg").style.backgroundColor = "red";
        reset.style.visibility = "visible";
    } else {
        if (win.innerText === "Computer won!!") {
            document.querySelector("#msg").style.backgroundColor = "red";
            win.innerText = "You lost. " + userchoice + " loses to " + computerChoice;
        } else if (win.innerText === "You won!!") {
            document.querySelector("#msg").style.backgroundColor = "green";
            win.innerText = "You win!! Your " + userchoice + " beats " + computerChoice;
        } else {
            document.querySelector("#msg").style.backgroundColor = "black";
        }
    }
};

// Event listeners for user's choices
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        if (user < 5 && computer < 5) {
            const userChoice = choice.getAttribute("id");
            comparison(userChoice);
        }
    });
});

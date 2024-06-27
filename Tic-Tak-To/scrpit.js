let boxes = document.querySelectorAll(".box");
let playerDisplay = document.querySelector(".player-display");

if (!playerDisplay) {
    console.error('Element with class "player-display" not found.');
}

let checkWin = (currentPlayer) => {
    let box1 = document.querySelector("#box-1").innerText;
    let box2 = document.querySelector("#box-2").innerText;
    let box3 = document.querySelector("#box-3").innerText;
    let box4 = document.querySelector("#box-4").innerText;
    let box5 = document.querySelector("#box-5").innerText;
    let box6 = document.querySelector("#box-6").innerText;
    let box7 = document.querySelector("#box-7").innerText;
    let box8 = document.querySelector("#box-8").innerText;
    let box9 = document.querySelector("#box-9").innerText;

    const winningCombinations = [
        [box1, box2, box3],
        [box4, box5, box6],
        [box7, box8, box9],
        [box1, box5, box9],
        [box3, box5, box7],
        [box1, box4, box7],
        [box2, box5, box8],
        [box3, box6, box9]
    ];

    for (let combination of winningCombinations) {
        if (combination.every(cell => cell === currentPlayer)) {
            return true;
        }
    }
    return false;
};

let checkDraw = () => {
    // Check if all boxes are filled
    for (let box of boxes) {
        if (box.innerText === '') {
            return false; // There's an empty box, game is not a draw
        }
    }
    // If all boxes are filled and no winner, it's a draw
    return true;
};

let handleClick = (box) => {
    if (box.innerText === '') {
        let currentPlayer = playerDisplay.innerText === "Player X's Turn" ? 'X' : 'O';
        box.innerText = currentPlayer;

        if (checkWin(currentPlayer)) {
            document.getElementById("winner-text").innerText = `Player ${currentPlayer} Wins!`;
            document.getElementById("winner-message").style.display = "block";
            document.body.classList.add("blur");

            boxes.forEach((box) => {
                box.classList.add("blast");
                box.removeEventListener("click", handleClickWrapper);
            });
        } else if (checkDraw()) {
            document.getElementById("winner-text").innerText = "It's a Draw!";
            document.getElementById("winner-message").style.display = "block";
            document.body.classList.add("blur");

            boxes.forEach((box) => {
                box.classList.add("blast");
                box.removeEventListener("click", handleClickWrapper);
            });
        } else {
            playerDisplay.innerText = currentPlayer === 'X' ? "Player O's Turn" : "Player X's Turn";
        }
    }
};

let handleClickWrapper = (event) => {
    handleClick(event.target);
};

let initializeGame = () => {
    boxes.forEach((box) => {
        box.addEventListener("click", handleClickWrapper);
        box.classList.remove("blast"); // Remove the blast class on initialization
    });
};

playerDisplay.innerText = "Player X's Turn";
initializeGame();

let resetGame = () => {
    boxes.forEach((box) => {
        box.innerText = '';
    });

    playerDisplay.innerText = "Player X's Turn";
    document.getElementById("winner-message").style.display = "none";
    document.body.classList.remove("blur");

    initializeGame();
};

document.querySelector("#play-again").addEventListener("click", resetGame);

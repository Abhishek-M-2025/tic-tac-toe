const gridBox = ["", "", "", "", "", "", "", "", ""];
let totalInsert = 0;
let winnerDecided = false;
let turn = "X";

const stat = document.getElementById("status");
const board = document.getElementById("board");
const button = document.getElementById("resetBtn");

// Check Winner
function checkWinner(player) {
    if (gridBox[0] == player && gridBox[1] == player && gridBox[2] == player)
        return true;
    else if (gridBox[3] == player && gridBox[4] == player && gridBox[5] == player)
        return true;
    else if (gridBox[6] == player && gridBox[7] == player && gridBox[8] == player)
        return true;
    else if (gridBox[0] == player && gridBox[3] == player && gridBox[6] == player)
        return true;
    else if (gridBox[1] == player && gridBox[4] == player && gridBox[7] == player)
        return true;
    else if (gridBox[2] == player && gridBox[5] == player && gridBox[8] == player)
        return true;
    else if (gridBox[0] == player && gridBox[4] == player && gridBox[8] == player)
        return true;
    else if (gridBox[2] == player && gridBox[4] == player && gridBox[6] == player)
        return true;
    else
        return false;
}

// Click Event
board.addEventListener("click", (e) => {

    // Ignore clicks outside cells
    if (!e.target.classList.contains("cell")) {
        return;
    }

    const index = e.target.id;

    // Game over or already filled
    if (winnerDecided || totalInsert === 9 || gridBox[index] !== "") {
        return;
    }

    e.target.textContent = turn;
    e.target.classList.add(turn);

    gridBox[index] = turn;
    totalInsert++;

    if (checkWinner(turn)) {
        stat.textContent = `🎉 Player ${turn} Won the Game!`;
        winnerDecided = true;
        return;
    }

    if (totalInsert === 9) {
        stat.textContent = "🤝 Game Draw!";
        return;
    }

    turn = (turn === "X") ? "O" : "X";

    stat.textContent = `Player ${turn}'s Turn`;
});

// Reset Button
button.addEventListener("click", () => {

    for (let i = 0; i < 9; i++) {
        document.getElementById(i).textContent = "";
        document.getElementById(i).className = "cell";
        gridBox[i] = "";
    }

    totalInsert = 0;
    winnerDecided = false;
    turn = "X";

    stat.textContent = "Player X's Turn";
});
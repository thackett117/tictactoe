let cells = document.querySelectorAll('.row > div');

let shape = "X";

let cellCount = 0;

let winner = document.getElementById("winnerTag");

//An array of arrays of win conditions
let winConditions = [
    [cells[0], cells[1], cells[2]],
    [cells[3], cells[4], cells[5]],
    [cells[6], cells[7], cells[8]],
    [cells[0], cells[3], cells[6]],
    [cells[1], cells[4], cells[7]],
    [cells[2], cells[5], cells[8]],
    [cells[0], cells[4], cells[8]],
    [cells[2], cells[4], cells[6]],
];


for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', cellClicked);
};


//Function to place shapes and alternate between them
function cellClicked (cell) {
    if (cell.target.textContent == "") {
        cell.target.textContent = shape;
        checkWin();
    } if (shape == "X") {
        shape = 'O';
    }else {
        shape = "X";
    }
};




function checkWin() {
    cellCount++
    for (i = 0; i < winConditions.length; i++) {
        let shapeCount = 0;
        for (j = 0; j < winConditions[i].length; j++) {
            if (winConditions[i][j].innerHTML == shape) {
                shapeCount++
            };
            if (shapeCount == 3) {
                winner.innerHTML = shape + "'s Have Won!";
                reset();
                return;
            }
            if (cellCount == 9 && shapeCount == 3) {
                winner.innerHTML = shape + "'s Have Won!";
                reset();
                return;
            }
            else if (shapeCount != 3 && cellCount == 9) {
                winner.innerHTML = "It's a Tie!";
                reset();
                return;
            }
        }
    }
}


function reset() {
    for (i = 0; i < cells.length; i++) {
        cells[i].textContent = ''
        shape = 'O'
        cellCount = 0
    }
}
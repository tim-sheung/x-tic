const arr = [
    ["-", "-", "-"],
    ["-", "-", "-"],
    ["-", "-", "-"],
];

function printGame() {
    console.log(arr[0].join(""));
    console.log(arr[1].join(""));
    console.log(arr[2].join(""));
    console.log("");
}

function put(game, isCross, row, col) {
    game[row][col] = isCross ? "X" : "O";
}

function minimax(game, isCross) {}

function evaluate(game, isCross) {}

function isFinalState(game, isCross) {
    // Six winning cases
    const win1 = [
        [0, 0],
        [0, 1],
        [0, 2],
    ];
    const win2 = [
        [0, 0],
        [1, 0],
        [2, 0],
    ];
    const win3 = [
        [2, 0],
        [2, 1],
        [2, 2],
    ];
    const win4 = [
        [0, 2],
        [1, 2],
        [2, 2],
    ];
    const win5 = [
        [0, 0],
        [1, 1],
        [2, 2],
    ];
    const win6 = [
        [0, 2],
        [1, 1],
        [2, 0],
    ];
}

put(arr, true, 1, 2);

printGame();

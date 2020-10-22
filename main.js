const arr = [
    ["-", "-", "-"],
    ["-", "-", "-"],
    ["-", "-", "-"],
];

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

function printGame(game) {
    console.log(game[0].join(""));
    console.log(game[1].join(""));
    console.log(game[2].join(""));
    console.log("");
}

function put(game, position, isCross) {
    const [row, col] = position;
    game[row][col] = isCross ? "X" : "O";
}

function minimax(game, isCross) {}

// isCross means next turn's move
function evaluate(game, isCross) {
    let score;
    const winningSymbol = getWinningSymbol(game);
    if (winningSymbol) {
        if (winningSymbol === "X") {
            score = 1;
        } else {
            score = -1;
        }
    } else {
        if (isAllCellsOccupied(game)) {
            score = 0;
        } else {
            const emptyPositions = findEmptyPositions(game);
            const results = [];
            emptyPositions.forEach((_) => {
                // Must deepclone the array
                const newGame = JSON.parse(JSON.stringify(game));
                put(newGame, _, isCross);
                const result = evaluate(newGame, !isCross);
                results.push(result);
            });
            if (isCross) {
                score = Math.max(...results);
            } else {
                score = Math.min(...results);
            }
        }
    }
    console.log("Evaluating result:", score, " Next turn:", isCross ? "X" : "O");
    printGame(game);
    return score;
}

function isAllCellsOccupied(game) {
    for (let rowIndex = 0; rowIndex < 3; rowIndex++) {
        for (let colIndex = 0; colIndex < 3; colIndex++) {
            if (game[rowIndex][colIndex] === "-") {
                return false;
            }
        }
    }
    return true;
}

function getWinningSymbol(game) {
    let symbol;
    const conditions = [win1, win2, win3, win4, win5, win6];
    conditions.forEach((condition) => {
        const symbol1 = getSymbol(game, condition[0]);
        const symbol2 = getSymbol(game, condition[1]);
        const symbol3 = getSymbol(game, condition[2]);
        if (symbol1 === symbol2 && symbol2 === symbol3 && symbol1 !== "-") {
            symbol = symbol1;
        }
    });
    return symbol;
}

function getSymbol(game, position) {
    const [rowIndex, colIndex] = position;
    return game[rowIndex][colIndex];
}

function findEmptyPositions(game) {
    const positions = [];
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (game[i][j] === "-") {
                positions.push([i, j]);
            }
        }
    }
    return positions;
}

put(arr, [0, 0], true);
put(arr, [0, 1], false);
put(arr, [0, 2], true);
put(arr, [1, 1], false);
put(arr, [2, 1], true);
put(arr, [2, 0], false);

printGame(arr);

console.log(evaluate(arr, true));

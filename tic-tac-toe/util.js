export function getAvailableMoves(game) {
    const moves = [];
    for (let i = 0; i < game.length; i++) {
        for (let j = 0; j < game.length; j++) {
            if (game[i][j] !== -1 && game[i][j] !== 1) {
                moves.push([i, j]);
            }
        }
    }
    return moves;
}

export function move(game, row, col, color) {
    game[row][col] = color;
}

export function undo(game, row, col) {
    game[row][col] = "[ ]";
}

export function printGame(game, score, color) {
    console.log("==============");
    console.log("turn: ", color);
    game.forEach((_) => {
        const arr = [];
        _.forEach((color) => {
            arr.push(color === 1 ? " " : "");
            arr.push(color);
        });
        console.log(arr.join(" "));
    });
    console.log("score: ", score);
    console.log("==============");
    console.log("");
}

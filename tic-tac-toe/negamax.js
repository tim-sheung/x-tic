import { checkWinning } from "./evaluation.js";

const N = 3;
export let count = 0;

/**
 * @returns [score, bestMove]
 */
export function negaMax(game, depth, color) {
    count++;
    const currentState = checkWinning(game, N);
    const availableMoves = getAvailableMoves(game);
    if (depth === 0 || currentState !== 0 || availableMoves.length === 0) {
        printGame(game, currentState * color, color);
        return [currentState * color, null];
    }
    let score = -Infinity;
    let bestMove;
    availableMoves.forEach((_) => {
        move(game, _[0], _[1], color);
        let current = -negaMax(game, depth - 1, -color)[0];
        if (current > score) {
            score = current;
            bestMove = _;
        }
        undo(game, _[0], _[1]);
    });
    printGame(game, score, color);
    return [score, bestMove];
}

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

function move(game, row, col, color) {
    game[row][col] = color;
}

function undo(game, row, col) {
    game[row][col] = "[ ]";
}

function printGame(game, score, color) {
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

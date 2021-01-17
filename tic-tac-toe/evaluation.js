/**
 * @example
 * 1 for black win
 * -1 for white win
 * 0 for no win
 */
export function checkWinning(game, n) {
    let result;
    // Check rows
    for (const _ of game) {
        result = checkConsecutive(_, n);
        if (result !== 0) {
            return result;
        }
    }
    // Check columns
    for (let i = 0; i < game.length; i++) {
        const arr = [];
        for (let j = 0; j < game.length; j++) {
            arr.push(game[j][i]);
        }
        result = checkConsecutive(arr, n);
        if (result !== 0) {
            return result;
        }
    }
    // Check diagonals from top-left to bottom-right
    const diagnoalsTLBR = getDiagonalsTLBR(game, n);
    for (let i = 0; i < diagnoalsTLBR.length; i++) {
        result = checkConsecutive(diagnoalsTLBR[i], n);
        if (result !== 0) {
            return result;
        }
    }
    // Check diagonals from top-right to bottom-left
    const diagnoalsTRBL = getDiagonalsTRBL(game, n);
    for (let i = 0; i < diagnoalsTRBL.length; i++) {
        result = checkConsecutive(diagnoalsTRBL[i], n);
        if (result !== 0) {
            return result;
        }
    }
    return 0;
}

export function checkConsecutive(arr, n) {
    let black = 0;
    let white = 0;
    for (const _ of arr) {
        if (_ === 1) {
            white = 0;
            black++;
        } else if (_ === -1) {
            black = 0;
            white++;
        } else {
            white = 0;
            black = 0;
        }
        if (black >= n) {
            return 1;
        } else if (white >= n) {
            return -1;
        }
    }
    return 0;
}

// Get diagonals from top-Left to bottom-right
export function getDiagonalsTLBR(game, n) {
    const result = [];
    // Extract the lower triangle of matrix
    for (let i = 0; i <= game.length - n; i++) {
        const arr = [];
        for (let j = 0; j < game.length - i; j++) {
            arr.push(game[i + j][j]);
        }
        result.push(arr);
    }
    // Extract the upper triangle of matrix, except the main diagonal
    for (let j = 1; j <= game.length - n; j++) {
        const arr = [];
        for (let i = 0; i < game.length - j; i++) {
            arr.push(game[i][i + j]);
        }
        result.push(arr);
    }
    return result;
}

// Get diagonals from top-right to bottom-Left
export function getDiagonalsTRBL(game, n) {
    const result = [];
    // Extract the lower triangle of matrix
    for (let i = 0; i <= game.length - n; i++) {
        const arr = [];
        for (let j = game.length - 1; j >= i; j--) {
            arr.push(game[i + game.length - 1 - j][j]);
        }
        result.push(arr);
    }
    // Extract the upper triangle of matrix, except the main diagonal
    for (let j = game.length - 2; j >= n - 1; j--) {
        const arr = [];
        for (let i = 0; i <= j; i++) {
            arr.push(game[i][j - i]);
        }
        result.push(arr);
    }
    return result;
}

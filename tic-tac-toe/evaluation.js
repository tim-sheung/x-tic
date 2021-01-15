const board = [
    ["-", "-", "-"],
    ["-", "-", "-"],
    ["-", "-", "-"],
];

/**
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
    // Check Vertical
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

    return 0;
}

export function checkConsecutive(arr, n) {
    let black = 0;
    let white = 0;
    for (const _ of arr) {
        if (_ === 1) {
            white = 0;
            black++;
        } else if (_ === 0) {
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

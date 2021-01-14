const board = [
    ["-", "-", "-"],
    ["-", "-", "-"],
    ["-", "-", "-"],
];

function checkWinning(game, n) {
    let result = 0;
    // Check rows
    for (const _ of game) {
        result = checkConsecutive(_);
        if (result !== 0) {
            return result;
        }
    }
    return result;
}

function checkConsecutive(arr, n) {
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

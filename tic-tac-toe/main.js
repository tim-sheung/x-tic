import { negaMax } from "./negaMax.js";

/**
 * Board representation
 * 1 = black
 * -1 = white
 */

function main() {
    const game = [
        [1, 1, -1],
        [-1, -1, 1],
        ["[ ]", "[ ]", 1],
    ];
    const [score, bestMove] = negaMax(game, 9, -1);
    console.log("best move: ", bestMove, " score: ", score);
}

main();

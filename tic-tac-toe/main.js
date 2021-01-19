import { negaMax, count } from "./negaMax.js";

/**
 * Board representation
 * 1 = black
 * -1 = white
 */

function main() {
    const game = [
        [1, 1, -1],
        [-1, "[ ]", "[ ]"],
        [1, "[ ]", -1],
    ];
    const [score, bestMove] = negaMax(game, 7, 1);
    console.log("best move: ", bestMove, " score: ", score);
    console.log("Total nodes searched:", count);
}

main();
